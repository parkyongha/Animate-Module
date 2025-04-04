/** @type {createjs.MovieClip} */
let root = this;

root.stop();

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
}

/** @param {createjs.MouseEvent} event */
function updateTrail(event) {
    hue = (hue + 1) % 360;

    points.push({
        x: event.stageX / stage.scaleX,
        y: event.stageY / stage.scaleY,
        color: hsvToRgb(hue, 1, 1)
    });

    if (points.length > 360) {
        points.shift();
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
