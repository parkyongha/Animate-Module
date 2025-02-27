// 버전: 1.0.0
// 최종 수정자: 정구현
// 수정 내용: tween을 이용한 사운드 컨트롤 기능 구현, tween을 이용한 심볼 오버로딩 추가
// 추후 추가 기능: 절대 좌표 반환, 최상위 화면과 오브젝트간의 화면비 반환


//심볼 오버로딩
{
    /**
    * 무비클립 하위까지 인터랙션 여부 처리
    * @param {bool} value
    */
    createjs.MovieClip.prototype.MouseEnable = function (value) {
        this.mouseChildren = value;
        this.mouseEnabled = value;
    }

    /**
     * 특정 무비클립 하위의 nameFormat{N}으로된 이름 반환 0부터 순서대로 조회하여 action 적용
     * @param {String} nameFormat
     * @param {function} action
     */
    createjs.MovieClip.prototype.SetObjectAction = function (nameFormat, action) {
        var mIdx = 0;
        while (this[nameFormat + mIdx] != undefined) {
            action(this[nameFormat + mIdx], mIdx);
            mIdx++;
        }
    }

    /**
     * 특정 무비클립 하위의 nameFormat{N}_{N}으로된 이름 반환 0부터 순서대로 조회하여 action 적용
     * @param {String} nameFormat
     * @param {function} action
     * 
     */
    createjs.MovieClip.prototype.SetObjectActionFor2D = function (nameFormat, action) {
        var mIdx = 0;
        var eIdx = 0;
        while (this[nameFormat + mIdx + "_" + eIdx] != undefined) {
            while (this[nameFormat + mIdx + "_" + eIdx] != undefined) {
                action(this[nameFormat + mIdx + "_" + eIdx], mIdx, eIdx);
                eIdx++;
            }
            eIdx = 0;
            mIdx++;
        }
    }

    /**
    * 특정 무비클립 하위의 nameFormat{N}으로된 이름 반환 0부터 순서대로 조회하여 반환
    * @param {any} nameFormat
    * @returns
    */
    createjs.MovieClip.prototype.GetChildsByName = function (nameFormat) {
        var arr = [];

        var mIdx = 0;
        while (this[nameFormat + mIdx] != undefined) {
            arr.push(this[nameFormat + mIdx]);

            mIdx++;
        }

        return arr;
    }

    //무비클립 글로벌 좌표 위치
    createjs.MovieClip.prototype.GetWorldPos = function () {
        return this.localToGlobal(0, 0);
    }

    //무비클립 글로벌 스케일,
    createjs.MovieClip.prototype.GetWorldScale = function () {
        var scale = { x: 1, y: 1 };
        var clip = this;
        while (clip.parent != stage) {
            var tempScaleX = clip.parent.scaleX;
            var tempScaleY = clip.parent.scaleY;

            scale.x *= tempScaleX;
            scale.y *= tempScaleY;

            clip = clip.parent;
        }

        return scale;
    }

    /**
     * createjs.Tween 실행을 무비클립에서 실행
     * @param {any} prop
     * @param {any} duration
     * @param {any} ease
     * @returns
     */
    createjs.MovieClip.prototype.Tween = function (prop, duration, ease = createjs.Ease.linear) {
        return createjs.Tween.get(this).to(prop, duration, ease);
    }

    /**
     * createjs.Tween 이벤트 실행 대기를 무비클립에서 실행
     * @param {any} duration
     * @returns
     */
    createjs.MovieClip.prototype.Wait = function (duration) {
        return createjs.Tween.get(this).wait(duration);
    }

    /**
     * 무비클립에 정의된 이벤트 제거
     * @returns
     */
    createjs.MovieClip.prototype.RemoveTweens = function () {
        return createjs.Tween.removeTweens(this);
    }

    /**
     * 단일 Tween 제거
     */
    function RemoveTween(eraseTween) {
        if (eraseTween != null) {
            // Tween 지우기
            createjs.Tween._register(eraseTween, true);
        }
    }

    /**
     * 무비클립에 정의된 Tween 동작 완료 시 실행할 이벤트 정의
     * @param {any} callback
     * @returns
     */
    createjs.Tween.prototype.Complete = function (callback) {
        return this.call(callback);
    }

    /** 
     * 해당 obj의 총 프레임이나 해당 label의 프레임을 시간으로 바꿔 반환
     */
    createjs.MovieClip.prototype.FrameToSecond = function (label = null) {
        var obj = this;

        var frame = obj.totalFrames;

        if (obj.labels.length != 0 && label != null) {
            var idx = -1;

            for (var i = 0; i < obj.labels.length; i++) {
                if (obj.labels[i].label == label) {
                    idx = i;
                    break;
                }
            }

            if (idx == -1) {
                console.log("label 못 찾음");
                return 0;
            }

            if (idx < obj.labels.length - 1) {
                frame = obj.labels[idx + 1].position - obj.labels[idx].position;
            } else {
                frame = obj.totalFrames - obj.labels[idx].position;
            }
        }

        console.log("frame : " + frame);
        return frame * (1000 / 30);
    }
}

//사운드 컨트롤
const SOUND_TYPE_BGM = "sound_bgm";
const SOUND_TYPE_SFX = "sound_sfx";
const SOUND_TYPE_NARR = "sound_narr";
{
    var bgmSoundObj = null;
    var narrSoundObj = null;

    var soundInstances = null;

    //나레이션 정지 여부(의도적으로 정지했을 경우)
    var isNarrPause = false;
    var narrTweenEvent = null;

    /**
     * 음원 전체 정지(백그라운드 및 일지 정시 시)
     * @returns
     */
    function PauseSoundAll() {
        if (!stage.tickOnUpdate) return;
        stage.tickOnUpdate = false;
        soundInstances = createjs.Sound._instances;
        for (var i = 0; i < soundInstances.length; ++i) {
            soundInstances[i].paused = true;
        }
    }

    /**
     * 음원 전체 재실행(포그라운드 및 일지 정시 해제 시)
     * @returns
     */
    function ResumeSoundAll() {
        if (stage.tickOnUpdate) return;
        stage.tickOnUpdate = true;
        if (soundInstances) {
            for (var i = 0; i < soundInstances.length; ++i) {
                if (narrSoundObj && soundInstances[i].src.includes(narrSoundObj.src))
                    soundInstances[i].paused = isNarrPause;
                else
                    soundInstances[i].paused = false;
            }
        }
    }

    /**
     * 음원 전체 정지
     */
    function StopSoundAll() {
        StopBGM();
        StopNarr();
        soundInstances = createjs.Sound._instances;
        for (var i = 0; i < soundInstances.length; ++i) {
            soundInstances[i].stop();
        }
    }

    /**
     * 특정음원 정지
     * @param {any} name
     */
    function PauseSoundForName(name) {
        soundInstances = createjs.Sound._instances;
        for (var i = 0; i < soundInstances.length; ++i) {
            if (soundInstances[i].src.includes(name)) {
                soundInstances[i].paused = true;
            }
        }
    }

    /**
     * 특정 음원 재실행
     * @param {any} name
     */
    function ResumeSoundForName(name) {
        if (soundInstances) {
            for (var i = 0; i < soundInstances.length; ++i) {
                if (soundInstances[i].src.includes(name)) {
                    soundInstances[i].paused = false;
                    break;
                }
            }
        }
    }

    /**
     * 특정 음원 정지 여부 확인
     * @param {any} name
     * @returns
     */
    function IsPlaySoundForName(name) {
        soundInstances = createjs.Sound._instances;
        for (var i = 0; i < soundInstances.length; ++i) {
            if (soundInstances[i].src.includes(name)) {
                return true;
            }
        }

        return false;
    }

    /**
     * 배경음 실행
     * @param {any} name
     * @returns
     */
    function PlayBGM(name) {
        if (document.visibilityState !== "visible") {
            return false;
        }
        return PlaySoundID(name, SOUND_TYPE_BGM);
    }

    /**
     * 배경음 일시정지
     * @returns
     */
    function PauseBGM() {
        if (!bgmSoundObj) return;
        bgmSoundObj.paused = true;
    }

    /**
     * 배경음 재실행
     * @returns
     */
    function ResumeBGM() {
        if (!bgmSoundObj) return;
        bgmSoundObj.paused = false;
    }

    /**
     * 배경음 정지
     * @returns
     */
    function StopBGM() {
        if (!bgmSoundObj) return;

        bgmSoundObj.stop();
        bgmSoundObj = null;
    }

    /**
     * 배경음 크기 변경
     * @param {any} volume
     */
    function SetBGMVolume(volume = 1) {
        if (bgmSoundObj != undefined)
            bgmSoundObj = volume
    }

    /**
     * 효과음 실행
     * @param {any} name
     * @returns
     */
    function PlaySFX(name) {
        if (document.visibilityState !== "visible") {
            return false;
        }
        return PlaySoundID(name, SOUND_TYPE_SFX);
    }

    /**
     * 나레이션 실행
     * @param {any} name
     * @returns
     */
    function PlayNarr(name) {
        if (document.visibilityState !== "visible") {
            return false;
        }
        return PlaySoundID(name, SOUND_TYPE_NARR);
    }

    /**
     * 나레이션 일시정지
     */
    function PauseNarr() {
        if (!narrSoundObj) return;
        narrSoundObj[i].paused = true;
        isNarrPause = true;
        narrTweenEvent.paused = true;
    }

    /**
     * 나레이션 재생
     */
    function ResumeNarr() {
        if (!narrSoundObj) return;
        narrSoundObj.paused = false;
        isNarrPause = false;
        narrTweenEvent.paused = false;
    }

    /**
     * 나레이션 정지
     */
    function StopNarr() {
        if (!narrSoundObj) return;

        narrSoundObj.stop();
        narrSoundObj = null;

        if (narrTweenEvent != undefined) {
            createjs.Tween.removeTweens(narrTweenEvent.target);
            narrTweenEvent = null;
        }
    }

    /**
     * 나레이션 세팅
     * @param {String} sound
     */
    function SetNarr(sound) {
        StopNarr();
        narrSoundObj = sound;
    }

    //음성 파일 실행
    function PlaySoundID(name, type, volume = 1) {

        var sObj = null;
        switch (type) {
            case SOUND_TYPE_BGM:
                sObj = playSound(name, -1);
                sObj.loop = -1;
                sObj.volume = volume;
                bgmSoundObj = sObj;
                break;
            case SOUND_TYPE_NARR:
                sObj = playSound(name);
                sObj.volume = volume;
                SetNarr(sObj);
                break;
            case SOUND_TYPE_SFX:
                sObj = playSound(name);
                sObj.volume = volume;
                break;
        }
        return sObj;
    }

    /**
     * 음원 길이 + dur 만큼 대기 후 이벤트 실행
     * @param {String} name
     * @param {any} type
     * @param {Number} dur
     * @param {function} comp
     * @returns
     */
    function PlaySoundComplete(name, type, dur, comp) {
        var sound = playSound(name);

        if (sound == undefined)
            return null;

        if (type == SOUND_TYPE_NARR) {
            SetNarr(sound);
            narrTweenEvent = createjs.Tween.get(this).wait(sound.duration + dur).call(comp);
        } else {
            createjs.Tween.get(this).wait(sound.duration + dur).call(comp);
        }
    }

}

//캡처 기능
{
    /**
     * 특정 무비클립 내부 캡처 이미지 생성
     * @param {any} func
     */
    createjs.Container.prototype.GetScreenShotForMovieClip = function (func) {

        var bound = this.getBounds()

        var width = bound.width;
        var height = bound.height;

        var bitmapCanvas = document.createElement('canvas');
        bitmapCanvas.width = width;
        bitmapCanvas.height = height;

        var bitmapContext = bitmapCanvas.getContext('2d');

        this.cache(0, 0, width, height);
        bitmapContext.drawImage(this.cacheCanvas, 0, 0, width, height);
        this.uncache();
        var bitmap = new createjs.Bitmap(bitmapCanvas);
        func(bitmap);
        bitmapCanvas.remove();
    }


    /**
     * 전체 화면 혹은 화면 상에서 부분 캡처, 스크린샷은 스테이지 기준으로 촬용
     * @param {any} func
     * @param {any} x 우상단 x좌표
     * @param {any} y 우상단 y좌표
     * @param {any} width 촬영 크기
     * @param {any} heigth 촬영 크기
     */
    function GetScreenShot(func, x = 0, y = 0, width = stage.canvas.width, heigth = stage.canvas.height) {
        var stage = this.stage;

        // Stage의 크기를 얻습니다.
        var stageWidth = width;
        var stageHeight = heigth;

        // 비트맵을 캡처하기 위한 캔버스를 생성합니다.
        var bitmapCanvas = document.createElement('canvas');
        bitmapCanvas.width = stageWidth;
        bitmapCanvas.height = stageHeight;

        // 캔버스 컨텍스트를 가져옵니다.
        var context = bitmapCanvas.getContext('2d');

        // Stage의 내용을 캔버스에 그립니다.
        context.drawImage(stage.canvas, x, y, stageWidth, stageHeight);
        var bitmap = new createjs.Bitmap(bitmapCanvas);

        func(bitmap);

        bitmapCanvas.remove();
    }

}


/**
 * 파일 경로 입력 시 파일이 있는지 반환
 */

async function IsExistFile(filePath, success, failed) {

    fetch(filePath)
        .then(response => {
            if (response.ok) {
                console.log(filePath + ' 경로에 파일이 존재합니다');
                success();
            } else {
                throw new Error('Test');
                console.log(filePath + ' 경로에 파일이 존재하지 않습니다');
                failed();
            }
        })
        .catch(error => {
            console.log(filePath + ' 경로에 파일이 존재하지 않습니다');
            failed(error);
        });

}

/**
 * 외부 경로에서 폰트 로드 하여 적용
 * @param {any} fontName
 * @param {any} fontUrl
 * @param {any} success
 * @param {any} failed
 */
function LoadFont(fontName, fontUrl, success, failed) {
    try {
        const portfolioFont = new FontFace(fontName, 'url(' + fontUrl + ')');
        portfolioFont.load().then(function (font) {
            document.fonts.add(font);
            if (success != null) {
                success();
            }
        }).catch(function (error) {
            if (failed != null) {
                failed(error);
            }
        });
    } catch (error) {
        failed(error);
    }

}

/**
 * 스크립트 로드
 * @param {any} src
 * @param {any} callback
 */
function LoadScript(src, success, failed) {

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;

    try {
        script.onload = function () {
            console.log('Debug Mode Ready');
            success();
        };
        script.onerror = function (error) {
            // 스크립트 로딩 실패 시 실행할 콜백 함수
            failed(error);
            console.log('Debug Mode OFF');
        };
    }
    catch (error) {
        failed(error);
    }

    document.head.appendChild(script);

}

/**
* 상대 경로로 폴더의 .ttf 파일 목록을 가져와 PreloadJS를 사용하여 로드하고 파일 이름 배열을 반환합니다.
* @param {string} relativePath - 폴더의 상대 경로 (예: './test/fonts/')
* @param {function} callback - 파일 이름 배열을 반환하는 콜백 함수
*/
function loadFilesFromFolder(relativePath, callback) {
    // 폴더 URL을 fetch하여 디렉토리 목록 가져오기
    fetch(relativePath)
        .then(function (response) {
            if (!response.ok) throw new Error('디렉토리 접근 실패');
            return response.text();
        })
        .then(function (htmlText) {
            // HTML 파싱
            var parser = new DOMParser();
            var doc = parser.parseFromString(htmlText, 'text/html');

            // <a> 태그에서 href 속성 추출
            var links = doc.querySelectorAll('a');
            var fileNames = [];

            for (var i = 0; i < links.length; i++) {
                var href = links[i].getAttribute('href');
                // .ttf 파일만 필터링
                if (href && href.endsWith('.ttf')) {
                    // 경로를 상대 경로로 조정
                    var cleanHref = href.replace(/\/$/, ''); // 끝에 '/' 제거
                    fileNames.push(cleanHref);
                }
            }

            if (fileNames.length === 0) throw new Error('.ttf 파일 목록을 찾을 수 없습니다.');

            // PreloadJS를 사용하여 파일 로드
            var manifest = fileNames.map(function (fileName) {
                return {
                    id: fileName,
                    src: fileName
                };
            });

            var queue = new createjs.LoadQueue();
            queue.loadManifest(manifest);

            queue.on('complete', function () {
                console.log('모든 .ttf 파일이 로드되었습니다.');
                callback(fileNames);
            });

            queue.on('error', function (event) {
                console.error('파일 로드 중 오류 발생:', event);
            });
        })
        .catch(function (error) {
            console.error('파일 목록 가져오기 중 오류 발생:', error);
            callback([]);
        });
}


/**
 * hex값을 rgb값으로 반환
 * @param {any} hex
 * @returns
 */
function ConvertHexToRgb(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;

}