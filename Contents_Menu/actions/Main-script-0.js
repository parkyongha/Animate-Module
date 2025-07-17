/** @type {createjs.MovieClip} */
const root = this;

const JsonType = {
    Feature: "feature",
    Module: "module"
};

/**
 * @typedef {Object} JsonData 
 * @property {string} name
 * @property {string} type
 * @property {string} link
*/


(function init() {
    fetch('./Data/data.json') // JSON이 있는 URL
        .then(response => {
            if (!response.ok) {
                throw new Error('네트워크 응답에 문제가 있습니다.');
            }
            return response.json(); // JSON으로 파싱
        })
        .then(data => {
            initResources(data); // JSON 데이터 처리
            console.log('불러온 데이터:', data); // 데이터 처리
        })
        .catch(error => {
            console.error('에러 발생:', error); // 에러 처리
        });

})();

// json 로딩이 끝났을 때
function requestLoaded(data) {
    var response = req.responseText;

    /** @type {JsonData[]} */
    var datas = JSON.parse(response);

    if (datas != null) {
        initResources(datas);
    }
}

/**
 * @param {JsonData[]} datas 
 * json 데이터로부터 리소스를 초기화합니다.
 */
function initResources(datas) {
    if (datas == null) return;

    let features = [];
    let modules = [];

    for (var i = 0; i < datas.length; i++) {
        const data = datas[i];

        if (data == null) continue;

        const type = data.type.toLowerCase();

        if (type == JsonType.Feature.toLowerCase()) {
            // Feature일 경우
            console.log("Feature: " + data.name);

            features.push(data);
        }
        else if (type == JsonType.Module.toLowerCase()) {
            // Module일 경우
            console.log("Module: " + data.name);

            modules.push(data);
        }
        else {
            console.log("Unknown type: " + data.name);
        }
    }

    initFeauture(features);
    initModule(modules);
}

/**
 * @param {JsonData[]} datas                                                                                                                       
 */
function initFeauture(datas) {
    for (var i = 0; i < datas.length; i++) {
        const data = datas[i];

        var featureItem = new lib.FeatureItem();

        featureItem.on('click', event => {
            console.log("click: " + data.link);
            window.open(data.link, '_blank');

        });

        root.contents.addChild(featureItem);
    }
}

/**
 * @param {JsonData[]} datas    
 */
function initModule(datas) {

}