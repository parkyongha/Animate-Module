/** @type {createjs.MovieClip} */
let root = this;

root.stop();

/**
 * @typedef {Object} Point
 * @property {number} x
 * @property {number} y
 */

/**
 * @type {Point[]}
 */
let points = [];

/** @type {createjs.Graphics | null} */
let graphics = null;

let isDrawing = false;

(function init() {
    console.log("init");

    var strokeContainer = new createjs.Container();
    stage.addChild(strokeContainer);

    const shape = new createjs.Shape();
    strokeContainer.addChild(shape);

    graphics = shape.graphics;
    points = [];

    stage.addEventListener("stagemousedown", startTrail);
    stage.addEventListener("stagemousemove", updateTrail);
    stage.addEventListener("stagemouseup", stopTrail);
})();

/** @param {createjs.MouseEvent} event */
function startTrail(event) {
    isDrawing = true;

    console.log("mouse down");

    drawStrokeOnTick();
}

/** @param {createjs.MouseEvent} event */
function updateTrail(event) {
    points.push({ x: event.stageX, y: event.stageY });
}

/** @param {createjs.MouseEvent} event */
function stopTrail(event) {
    isDrawing = false;

    console.log("mouse up");
}

function drawStrokeOnTick() {
    // 매 프레임마다 호출
    createjs.Ticker.on("tick", function () {
        if (!graphics || !isDrawing) return;

        if (points.length > 20) {
            points.shift();
        }

        graphics.clear();

        graphics.setStrokeStyle(1)
            .beginStroke("#000000");

        if (points.length > 0) {
            graphics.moveTo(points[0].x, points[0].y);

            for (let i = 1; i < points.length; i++) {
                graphics.lineTo(points[i].x, points[i].y);
            }
        }
    });
}
