/** @type {createjs.MovieClip} */
let root = this;

root.stop();

stage.enableMouseOver();

/**
 * @typedef {Object} Color
 * @property {number} r
 * @property {number} g
 * @property {number} b
 * 
 * @typedef {Object} Point
 * @property {number} x
 * @property {number} y
 * @property {Color} color
 */

/**
 * @type {Point[]}
 */
let points = [];

/** @type {createjs.Graphics | null} */
let graphics = null;

let isDrawing = false;

let hue = 0;

/** @type {createjs.MovieClip} */
let strokeContainer = null;

let trailLength = 100;

// 0.05면 5%만큼 떨어져서 따라감
let followObjectDistancePercent = 0.15;

// N만큼 거리두고 따라감
let followObjectDistance = 70;

// 0.5면 50% 위치부터 시작
let followObjectStartPosPercent = 0.2;

// 현재 마우스 위치에서 N만큼 거리두고 따라감
let followObjectStartDistance = 100;

let followObjects = root.GetChildsByName("followObject_");

/**
 * @typedef {createjs.MovieClip & {
 *   isTweening: boolean,
 *   isFollowing: boolean,
 *   isWithinObjectDistance: boolean,
 *   prevIndexGap: number,
 *   followIdx: number,
 *   point: Point
 * }} FollowObject
 */

/** @type {FollowObject[]} */
let trailFollowObjects = [];

(function init() {
    console.log("init");

    strokeContainer = new createjs.Container();
    root.addChild(strokeContainer);

    const shape = new createjs.Shape();
    strokeContainer.addChild(shape);

    graphics = shape.graphics;
    points = [];

    initFollowObject();

    stage.addEventListener("stagemousedown", startTrail);
    stage.addEventListener("stagemousemove", updateTrail);
    stage.addEventListener("stagemouseup", stopTrail);
})();

function initFollowObject() {
    followObjects.forEach((followObject) => {
        followObject.on('mouseover', () => {

            console.log(`mouseover: ${followObject.name} layer: ${trailFollowObjects.length}`);

            const point = points[points.length - 1];

            strokeContainer.addChildAt(followObject, strokeContainer.children.length - trailFollowObjects.length);
            trailFollowObjects.push(followObject);

            followObject.isTweening = true;
            followObject.point = point;

            followObject.isWithinObjectDistance = false;

            followObject.Tween({
                x: point.x,
                y: point.y,
            }, 300, createjs.Ease.quartOut).call(() => {
                let idx = points.indexOf(point);

                followObject.followIdx = idx;
                followObject.isTweening = false;
            });

        }, null, true);
    });
}

/**
 * Point간의 거리를 가져오는 함수
 * @param {{x: number, y: number}} curPoint 기준
 * @param {{x: number, y: number}} destPoint 목표
 * @returns 
 */
function getPointDistance(curPoint, destPoint) {

    return Math.sqrt(
        Math.pow(curPoint.x - destPoint.x, 2) +
        Math.pow(curPoint.y - destPoint.y, 2)
    );
}

function getFollowObjectPointIndex(index) {
    // index가 0이면 points의 top이랑 비교
    // 0이 아니면 trailFollowObject[index - 1] 해서 앞에 있는 오브젝트의 위치를 가져온 후
    // points에서 followObjectDistance보다 떨어져있는 pos를 선택해서 index로 반환
    // 끄읏?
    const objectDistance = (index == 0) ? followObjectStartDistance : followObjectDistance;
    const prevPosIdx = (index == 0) ? points.length - 1 : trailFollowObjects[index - 1].followIdx;

    const curObject = trailFollowObjects[index];

    const prevPos = points[prevPosIdx];

    if (prevPosIdx == -1)
        return -1;

    let idx = prevPosIdx;

    // 최~~~~~~~대한 followObjectDistance보다 떨어져있는 pos를 선택
    while (getPointDistance(prevPos, points[idx]) <= objectDistance && idx-- > 0);

    if (idx < curObject.followIdx) {
        idx = curObject.followIdx + 1;
    }

    if (idx < 0) idx = 0;

    //console.log(`idx: ${idx}`);

    return idx;
}

function updateFollowObjectsPos() {
    for (let i = 0; i < trailFollowObjects.length; i++) {
        let idx = getFollowObjectPointIndex(i);

        const followObject = trailFollowObjects[i];
        
        console.log(`followObject: ${followObject.name}\n idx: ${idx}`);

        if (idx == -1)
            continue;

        if (followObject.isFollowing) {
            followObject.followIdx = idx;

            followObject.x = points[idx].x;
            followObject.y = points[idx].y;
        } else if (followObject.isTweening == false) {
            followObject.x = points[followObject.followIdx].x;
            followObject.y = points[followObject.followIdx].y;

            followObject.followIdx--;

            const pointIdxinTrail = points.indexOf(followObject.point);

            if (followObject.followIdx <= idx) {
                console.log(`followObject: ${followObject.name}\n followIdx: ${followObject.followIdx}\n idx: ${idx}`);

                followObject.isFollowing = true;
            }
        }
    }
}

/** @param {createjs.MouseEvent} event */
function startTrail(event) {
    isDrawing = true;

    console.log("mouse down");
}

/** @param {createjs.MouseEvent} event */
function updateTrail(event) {
    hue = (hue + 1) % 360;

    points.push({
        x: event.stageX / stage.scaleX,
        y: event.stageY / stage.scaleY,
        color: hsvToRgb(hue, 1, 1)
    });

    updateFollowObjectsPos();

    if (points.length > trailLength) {
        // 빼는 조건을 살짝 손봐야 할듯
        // points.shift();
    }

    graphics.clear();

    for (let i = 1; i < points.length; i++) {
        var rgb = points[i].color;

        graphics
            .setStrokeStyle(10, 1, 1)
            .beginStroke(`rgba(${rgb.r}, ${rgb.g}, ${rgb.b})`)
            .moveTo(points[i - 1].x, points[i - 1].y)
            .lineTo(points[i].x, points[i].y)
            .endStroke();
    }
}

/** @param {createjs.MouseEvent} event */
function stopTrail(event) {
    isDrawing = false;

    console.log("mouse up");
}

function hsvToRgb(h, s, v) {
    const c = v * s, x = c * (1 - Math.abs((h / 60) % 2 - 1)), m = v - c;
    let r, g, b;
    if (h < 60) { r = c; g = x; b = 0; }
    else if (h < 120) { r = x; g = c; b = 0; }
    else if (h < 180) { r = 0; g = c; b = x; }
    else if (h < 240) { r = 0; g = x; b = c; }
    else if (h < 300) { r = x; g = 0; b = c; }
    else { r = c; g = 0; b = x; }
    return { r: Math.round((r + m) * 255), g: Math.round((g + m) * 255), b: Math.round((b + m) * 255) };
}
