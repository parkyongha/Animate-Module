var root = this;
// 됨?
// ===================== 심볼 관리
var palette = root.palette;

var mcCanvas = root.mcCanvas;

// ===================== 캔버스
var bgSize = mcCanvas.nominalBounds;
var lastPoint;
var strokes = [];
var currentStroke = null;
var isDrawable = true;

var canvasOffsetY = 0;
var canvasOffsetX = 0;
var canvasRect;
var btnComplete = root.btn_complete;

var canvasBoard;
var clearColor = 0x00000000;

// ===================== 브러쉬 & 그리기
const paletteColors = [
    "rgba(255, 10, 42, 1)",
    "rgba(255, 214, 0, 1)",
    "rgba(84, 207, 75, 1)",
    "rgba(45, 70, 211, 1)",
    "rgba(0, 0, 0, 1)",
    "rgba(255, 255, 255, 1)",
    "rgba(0,0,0,0)"
];

const paletteStrokeSizes = [3, 5, 7];
const paletteEraserSizes = [7, 14, 21];

var pointerID = -1;

var brushConfig = {
    color: paletteColors[0],
    brushHSizeW: paletteStrokeSizes[1] / 2,
    brushHSizeH: paletteStrokeSizes[1] / 2,
    strokeCaps: "round",
    strokeSize: paletteStrokeSizes[1],
    eraser: "rgba(0,0,0,0)",
    eraserSize: paletteEraserSizes[1],
    isRandom: false,
    dist: 1,
    drawRange: 1
};

var isDrawing = false;

// ===================== palette

var paletteColorObjs = palette.GetChildsByName("color_");
var paletteStrokeObjs = palette.GetChildsByName("stroke_");
var paletteEraserObjs = palette.GetChildsByName("eraser_");

var isEraserMode = false;

// ===================== 기타 변수
var canvasDepth = 0;

var canvasMidPos = null;

{
    const bound = mcCanvas.getBounds() || mcCanvas.nominalBounds;

    mcCanvas.cache(0, 0, bound.width, bound.height);

    let shape = new createjs.Shape();
    mcCanvas.shape = shape;

    mcCanvas.addChild(shape);
}

root.InitCanvas = function () {
    console.log("Canvas Init");

    mcCanvas.on("mousedown", drawImageHandleMouseDown);

    canvasOffsetX = mcCanvas.x;
    canvasOffsetY = mcCanvas.y;

    Initpalette();
    InitEvents();
};

function drawImageHandleMouseDown(event) {
    canvasOffsetX = mcCanvas.x;
    canvasOffsetY = mcCanvas.y;

    OnDrawStart(event);
}

function Initpalette() {

    // 공통으로 사용할 설정 객체 배열
    const paletteConfigs = [
        {
            items: paletteColorObjs,
            selectVisible: { color: true, stroke: true, eraser: false },
            updateBrush: idx => {
                brushConfig.color = paletteColors[idx];
                isEraserMode = false;
            }
        },
        {
            items: paletteStrokeObjs,
            selectVisible: { color: true, stroke: true, eraser: false },
            updateBrush: idx => {
                brushConfig.strokeSize = paletteStrokeSizes[idx];
                isEraserMode = false;
            }
        },
        {
            items: paletteEraserObjs,
            selectVisible: { color: false, stroke: false, eraser: true },
            updateBrush: idx => {
                brushConfig.eraserSize = paletteEraserSizes[idx];
                isEraserMode = true;
                console.log("Eraser Mode:", isEraserMode, "Size:", brushConfig.eraserSize);
            }
        }
    ];

    // 공통 처리 함수
    paletteConfigs.forEach(({ items, selectVisible, updateBrush }) => {
        items.forEach((obj, idx) => {
            obj.on("click", () => {
                // UI 토글
                palette.color_select.visible = selectVisible.color;
                palette.stroke_select.visible = selectVisible.stroke;
                palette.eraser_select.visible = selectVisible.eraser;

                // 인디케이터 위치/프레임 설정
                if (selectVisible.color) {
                    palette.color_select.set({ x: obj.x, y: obj.y });
                }
                if (selectVisible.stroke) {
                    palette.stroke_select.set({ x: obj.x, y: obj.y });
                }
                if (selectVisible.eraser) {
                    palette.eraser_select.set({ x: obj.x, y: obj.y });
                    palette.eraser_select.gotoAndStop(idx);
                }

                // 브러시 설정 업데이트
                updateBrush(idx);
            });
        });
    });

}

function InitEvents() {

}

function OnDrawStart(e) {

    if (!isDrawable)
        return;

    if (pointerID != -1 && !CheckPointerID(e))
        return;

    lastPoint = GetPosition(e);

    pointerID = e.pointerID;

    drawBrush(lastPoint.x, lastPoint.y);

    stage.addEventListener("stagemousemove", OnDrawBrush);
    stage.addEventListener("stagemouseup", OnDrawEnd);

    isDrawing = true;
}

function OnDrawBrush(e) {
    if (!CheckPointerID(e))
        return;

    var p = GetPosition(e);

    DrawLine(lastPoint, p);

    lastPoint = p;
}

function OnDrawEnd(e) {
    if (!CheckPointerID(e))
        return;

    isDrawing = false;

    currentStroke = null;
    pointerID = -1;

    stage.removeAllEventListeners("stagemousemove");
    stage.removeAllEventListeners("stagemouseup");

}

function DrawLine(fromPoint, toPoint) {
    var distOffset = brushConfig.dist; //4;

    var dist = distanceBetween(fromPoint, toPoint) / distOffset;
    var angle = angleBetween(fromPoint, toPoint);

    for (var i = 0; i < dist; i++) {
        var distVal = i * distOffset;
        var dx = fromPoint.x + (Math.sin(angle) * distVal);
        var dy = fromPoint.y + (Math.cos(angle) * distVal);

        drawBrush(dx, dy);
    }
}

function drawBrush(tx, ty) {
    mcCanvas.shape.graphics
        .beginStroke(brushConfig.color)
        .setStrokeStyle(
            isEraserMode ? brushConfig.eraserSize : brushConfig.strokeSize,
            brushConfig.strokeCaps
        )
        .lt(tx, ty);

    mcCanvas.updateCache(isEraserMode ? "destination-out" : "source-over");
    mcCanvas.shape.graphics.clear();
}

function GetPositionX(e) {
    return e.stageX / stage.scaleX - canvasOffsetX;
}

function GetPositionY(e) {
    return e.stageY / stage.scaleY - canvasOffsetY;
}

function GetPosition(e) {
    return {
        x: GetPositionX(e),
        y: GetPositionY(e)
    };
}

function CheckPointerID(e) {
    var pid = e.pointerID;
    return pointerID == pid;
}

function distanceBetween(point1, point2) {
    return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
}

function angleBetween(point1, point2) {
    return Math.atan2(point2.x - point1.x, point2.y - point1.y);
}

root.InitCanvas();