class AsyncLoader {
    constructor(maxConcurrent = 5) {
        this.maxConcurrent = maxConcurrent;
        this.queue = [];
        this.activeCount = 0;
        this.results = {}; // id를 키로 로드된 결과 저장
        this.totalItems = 0;
        this.loadedItems = 0;
        this.eventListeners = {
            fileload: [],
            progress: [],
            complete: []
        };

        // 기본 basePath를 사용하려면 여기에 지정 (없으면 null)
        this._basePath = "";
    }

    // 이벤트 리스너 등록
    on(eventName, callback) {
        if (this.eventListeners[eventName]) {
            this.eventListeners[eventName].push(callback);
        }
    }

    // 이벤트 발생
    _emit(eventName, eventData) {
        if (this.eventListeners[eventName]) {
            this.eventListeners[eventName].forEach(cb => cb(eventData));
        }
    }

    // fetch API를 사용해 리소스를 로드합니다.
    // type이 'image'인 경우, blob을 Image 객체로 변환합니다.
    async loadResource(url, type) {
        // const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to load ${url}`);
        }
        if (type === 'json') {
            return response.json();
        } else if (type === 'image') {
            const blob = await response.blob();
            const img = new Image();
            img.src = url;

            await new Promise((resolve, reject) => {
                img.onload = resolve;
                img.onerror = reject;
            });

            return img;
        } else if (type === 'sound') {
            // 사운드의 경우, 일반 텍스트(또는 ArrayBuffer)로 로드하거나, 별도의 Sound API를 사용할 수 있습니다.
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to load ${url}`);
            }
            return response.arrayBuffer();
        } else {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to load ${url}`);
            }
            return response.text();
        }
    }

    // manifest 항목은 PreloadJS의 LoadItem 형식과 동일하게 { src, id, ... } 객체입니다.
    // 여기서 createjs.LoadItem.create()를 호출해 타입과 확장자 등을 자동으로 결정하고, 경로를 보정합니다.
    add(value, path, basePath) {
        const loadItem = createjs.LoadItem.create(value);
        if (!loadItem) {
            return Promise.reject(new Error("Invalid load item: " + JSON.stringify(value)));
        }
        let bp = ""; // 보정된 경로를 저장할 변수
        let useBasePath = basePath || this._basePath;

        // 만약 src가 객체가 아니라면 문자열 처리
        if (!(loadItem.src instanceof Object)) {
            const match = createjs.URLUtils.parseURI(loadItem.src);
            if (match.extension) {
                loadItem.ext = match.extension;
            }
            // 타입이 지정되지 않았다면 확장자로 타입 결정 (예: 이미지, 사운드 등)
            if (loadItem.type == null) {
                loadItem.type = createjs.RequestUtils.getTypeByExtension(loadItem.ext);
            }
            let autoId = loadItem.src;
            if (!match.absolute && !match.relative) {
                if (path) {
                    bp = path;
                    const pathMatch = createjs.URLUtils.parseURI(path);
                    autoId = path + autoId;
                    if (useBasePath != null && !pathMatch.absolute && !pathMatch.relative) {
                        bp = useBasePath + bp;
                    }
                } else if (useBasePath != null) {
                    bp = useBasePath;
                }
            }
            loadItem.src = bp + loadItem.src;
            loadItem.path = bp;
            if (loadItem.id === undefined || loadItem.id === null || loadItem.id === "") {
                loadItem.id = autoId;
            }
        }
        // (만약 src가 객체라면, 이미 타입과 경로가 설정되어 있다고 가정)

        const src = loadItem.src;
        const type = loadItem.type; // 예: createjs.Types.IMAGE 또는 "image", createjs.Types.SOUND 등
        const id = loadItem.id;
        this.totalItems++;
        return new Promise((resolve, reject) => {
            this.queue.push({ src, type, id, resolve, reject });
            this._runNext();
        });
    }

    // 큐에서 다음 항목을 실행합니다.
    _runNext() {
        if (this.queue.length === 0) {
            if (this.activeCount === 0) {
                this._emit('complete', { results: this.results, target: this });
            }
            return;
        }
        if (this.activeCount < this.maxConcurrent) {
            const { src, type, id, resolve, reject } = this.queue.shift();
            this.activeCount++;
            this.loadResource(src, type)
                .then(result => {
                    const key = id || src;
                    this.results[key] = result;
                    this.loadedItems++;
                    // fileload 이벤트 발생: evt 객체에 id와 result 전달
                    this._emit('fileload', { id: key, result: result });
                    let progress = this.loadedItems / this.totalItems;
                    this._emit('progress', { progress });
                    resolve(result);
                })
                .catch(err => {
                    reject(err);
                })
                .finally(() => {
                    this.activeCount--;
                    this._runNext();
                });
        }
    }

    // manifest 배열({ src, id } 객체 배열)을 받아 모든 항목을 로드합니다.
    async loadManifest(manifest, path, basePath) {
        const promises = manifest.map(item => this.add(item, path, basePath));
        return Promise.all(promises);
    }

    // LoadQueue의 getResult()와 동일하게 id를 사용해 로드된 결과를 반환합니다.
    getResult(id) {
        return this.results[id];
    }
}
