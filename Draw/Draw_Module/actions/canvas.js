var root = this;

root.IsClear = false;

// ===================== 심볼 관리
var palette = root.palette;

var drawImages = root.drawImages;
drawImages.stop();

// ===================== 캔버스
var bgSize = drawImages.nominalBounds;
var lastPoint;
var strokes = [];
var currentStroke = null;

var canvasOffsetY = 0;
var canvasOffsetX = 0;
var btnComplete = root.btn_complete;
 
var clearColor = 0x00000000;

var Images = drawImages.GetChildsByName("Image_");

// ===================== 브러쉬 & 그리기
var paletteColors = [
    "#ff0a2a",
    "#ffc000",
    "#009ff1"
];

var pointerID = -1;

var brushConfig = {
    color: null,
    brushHSizeW: 16,
    brushHSizeH: 16,
    isRandom: false,
    dist: 4,
    drawRange: 1
};

var brushColorBitmaps;

var isDrawing = false;

// ===================== palette
var paletteDefaultY = palette.y;
var paletteHeight = palette.nominalBounds.height;

root.paletteEnabled = true;

var paletteColorObjs = palette.GetChildsByName("color_");

// =====================  사운드
var sfx_DrawSound = null;
var sfx_Draw_TimeoutID = null;

var drawSoundPaused = false;

// =====================  가이드
var guideIndex = 0;
var guideTimeout = null;
var currentGuideObj = null;

// ===================== 기타 변수
var canvasDepth = 0;

var canvasMidPos = null;

// 튜토리얼 나오기 전 초기화
{
    root.btn_complete.visible = false;

    paletteColorObjs.forEach(function (obj, Idx) {
        obj.Cover.gotoAndStop(Idx);
        obj.Cover.visible = false;
        obj.btn.gotoAndStop(Idx);
    });
}

root.InitCanvas = function () {
    console.log("Init");
    
    Images.forEach((drawImage) => {
    });
    var drawImage= Images[0];
    initializeBitmapLayer(drawImage);
    drawImage.on("mousedown", (e) => drawImageHandleMouseDown(drawImage, e));

    cacheAndClearBitmapLayers();

    // 기본은 첫번째
    mcCanvas = drawImages.Image_0;
    canvasOffsetX = mcCanvas.x;
    canvasOffsetY = mcCanvas.y;

    UpdateBitmapLayerCache();
    clearCanvas();
    brushColorBitmaps = [];

    Initpalette();
    InitEvents();
};

/**
 * drawImage에 대한 Bitmap 관련 기능 초기화
 * @param {MovieClip} drawImage 
 */
function initializeBitmapLayer(drawImage) {
    const bound = drawImage.getBounds();
    drawImage.canvasDepth = 0;
    drawImage.BitmapData = new createjs.BitmapData(null, bound.width, bound.height, clearColor);
    drawImage.Board = new createjs.Bitmap(drawImage.BitmapData.canvas);

    drawImage.BitmapLayer.addChild(drawImage.Board);
    drawImage.BitmapLayer.mouseChildren = false;
    drawImage.BitmapLayer.mouseEnabled = false;
    drawImage.BitmapLayer.cache(0, 0, bound.width, bound.height);
    drawImage.BitmapData.clearRect(0, 0, bound.width, bound.height);


    drawImage.BitmapLayer.compositeOperation = 'source-atop';
}

function drawImageHandleMouseDown(drawImage, event) {
    console.log(drawImage.name);
    mcCanvas = drawImage;

    canvasOffsetX = mcCanvas.x;
    canvasOffsetY = mcCanvas.y;

    OnDrawStart(event);

    root.btn_complete.visible = true;
}

function cacheAndClearBitmapLayers() {
    Images.forEach((drawImage) => {
        const bound = drawImage.getBounds();
        
        drawImage.BitmapLayer.cache(0, 0, bound.width, bound.height);
        drawImage.BitmapData.clearRect(0, 0, bound.width, bound.height);
    });
}

function Initpalette() {

    var bmpBrush = new lib["brush"];

    bmpBrush.cache(0, 0, 32, 32);
    var _source = createjs.BitmapData.getBitmapData(bmpBrush);

    brushColorBitmaps = GetBrushColorBitmaps(_source, paletteColors);
    brushConfig.brush = brushColorBitmaps[0];
    palette.color_0.Cover.visible = true;

    // 색 선택
    paletteColorObjs.forEach((obj, Idx) => {
        obj.on("click", (e) => {
            // PlaySFX("click_palette");

            paletteColorObjs.forEach(colorObj => colorObj.Cover.visible = false);
            obj.Cover.visible = true;

            ParticlePos = e;
            root.SetObjectAction("Effect_", (obj2) => {
                obj2.SetObjectAction("Color_", (obj3) => obj3.gotoAndStop(Idx));
            });

            SetParticleEffect(3);
            brushConfig.brush = brushColorBitmaps[Idx];
        });
    });
}

function InitEvents() {
    // 한번만 실행됨
    root.btn_complete.on("click", function (e) {

        palette.visible = false;
        // PlaySFX("common_success");

        mcCanvas.removeAllEventListeners("mousedown", OnDrawStart);

        root.Wait(100).call(() => {
            var results = [];

            // 그린 이미지들 저장
            Images.forEach((drawImage) => {
                var bound = drawImage.nominalBounds;

                // ReDrawEnablePixels(drawImage.BitmapLayer, drawImage.Image, function () {
                //     drawImage.BitmapLayer.cache(0, 0, bound.width, bound.height);
                //     var bitmap = new createjs.Bitmap(drawImage.BitmapLayer.cacheCanvas);

                //     results.push(bitmap);
                // }, 1);
            });
        });

    }, null, true);
}

function OnDrawStart(e) {

    if (pointerID != -1 && !CheckPointerID(e))
        return;

    lastPoint = GetPosition(e);

    // 그리기 영역이 팔레트랑 겹칠 때 팔레트 숨김
    if (root.paletteEnabled && lastPoint.y > palette.y - canvasOffsetY - 50) {
        root.paletteEnabled = false;

        palette.RemoveTweens();
        palette.Wait(100).to({
            y: paletteHeight + palette.y
        }, 300, createjs.Ease.backIn);
    }

    // 그리기 효과음
    // sfx_DrawSound = playSound("sfx_draw_0", -1);
    // sfx_DrawSound.volume = 0;

    DrawSoundTimeout(110);

    pointerID = e.pointerID;
    mcCanvas.Board.name = "Board";

    mcCanvas.BitmapLayer.uncache();
    mcCanvas.BitmapLayer.addChild(mcCanvas.Board);

    currentStroke = {
        x: [],
        y: []
    };

    drawBrush(lastPoint.x, lastPoint.y);
    AddStroke(lastPoint.x, lastPoint.y);

    stage.addEventListener("stagemousemove", OnDrawBrush);
    stage.addEventListener("stagemouseup", OnDrawEnd);

    ParticlePos = e;
    IsParticleActive = true;
    ParticleActive();

    isDrawing = true;
}

function OnDrawBrush(e) {
    if (!CheckPointerID(e))
        return;

    var currentPoint = GetPosition(e);

    // 그리기 영역이 팔레트랑 겹칠 때 팔레트 숨김
    if (root.paletteEnabled && currentPoint.y > palette.y - canvasOffsetY - 50) {
        root.paletteEnabled = false;

        palette.RemoveTweens();
        palette.Wait(100).to({
            y: paletteHeight + palette.y
        }, 300, createjs.Ease.backIn);
    }

    DrawLine(lastPoint, currentPoint);
    AddStroke(currentPoint.x, currentPoint.y);

    lastPoint = currentPoint;

    ParticlePos = e;
    DrawSoundTimeout(100);
}

function calculateMinMax(stroke, canvasWidth, canvasHeight) {
    var minX = Math.min(...stroke.x);
    var minY = Math.min(...stroke.y);
    var maxX = Math.max(...stroke.x);
    var maxY = Math.max(...stroke.y);

    return {
        minX: Math.min(canvasWidth, minX),
        minY: Math.min(canvasHeight, minY),
        maxX: Math.max(0, maxX),
        maxY: Math.max(0, maxY)
    };
}

function calculateCanvasRect(minMax, brushHSizeW, brushHSizeH) {
    const cx = Math.max(0, minMax.minX - brushHSizeW);
    const cy = Math.max(0, minMax.minY - brushHSizeH);
    const cw = Math.min(mcCanvas.nominalBounds.width, minMax.maxX + brushHSizeW);
    const ch = Math.min(mcCanvas.nominalBounds.height, minMax.maxY + brushHSizeH);

    return new createjs.Rectangle(cx, cy, cw - cx, ch - cy);
}

function OnDrawEnd(e) {
    if (!CheckPointerID(e))
        return;

    isDrawing = false;

    ClearDrawSoundTimeout();

    var sound = sfx_DrawSound;

    root.Wait(50).call(() => {
        if (sound != null) {
            sound.volume = 0;
            sound.stop();
        }
    });

    if (root.paletteEnabled == false) {
        root.paletteEnabled = true;

        palette.RemoveTweens();
        palette.Tween({
            y: paletteDefaultY
        }, 300, createjs.Ease.backOut);
    }

    const canvasBound = mcCanvas.nominalBounds;
    const brushHSizeW = brushConfig.brushHSizeW;
    const brushHSizeH = brushConfig.brushHSizeH;

    const minMax = calculateMinMax(currentStroke, canvasBound.width, canvasBound.height);
    const cRect = calculateCanvasRect(minMax, brushHSizeW, brushHSizeH);

    currentStroke.x = currentStroke.y = null;

    // 현재 그린 그림을 복사
    var cvs = CreateCanvas(mcCanvas.BitmapData.canvas, -cRect.x, -cRect.y, cRect.width, cRect.height);

    // 그린거 추가
    var strokeBmp = new createjs.Bitmap(cvs);

    strokeBmp.set({
        x: cRect.x,
        y: cRect.y,
        name: "bitmap_" + mcCanvas.numChildren
    })

    console.log(strokeBmp.name);

    mcCanvas.BitmapLayer.addChild(strokeBmp);
    canvasDepth++;

    clearCanvas();
    UpdateBitmapLayerCache();

    currentStroke = null;
    pointerID = -1;

    stage.removeAllEventListeners("stagemousemove");
    stage.removeAllEventListeners("stagemouseup");

    ParticlePos = null;
    ClearParticleEffect();
}

function CreateCanvas(source, x, y, width, height) {
    // CanvasElement 생성
    var cvs = document.createElement("canvas");

    // 생성한 canvas 크기 설정
    cvs.width = width;
    cvs.height = height;

    // context 가져와서 source 그려서 복사
    cvs.getContext("2d").drawImage(source, x, y);

    return cvs;
}

// _source type: bitmapData
function GetBrushColorBitmaps(_source, paletteColors) {

    var bWidth = _source.width;
    var bHeight = _source.height;
    var brushArr = [];

    for (var i = 0; i < paletteColors.length; ++i) {
        var rgb = hexToRgb(paletteColors[i]);

        var colorTransform = new createjs.ColorTransform(0, 0, 0, 1, rgb.r, rgb.g, rgb.b);
        var paletteBrush = new createjs.BitmapData(null, bWidth, bHeight, null);
        paletteBrush.clearRect(0, 0, bWidth, bHeight);
        paletteBrush.draw(_source, null, colorTransform, null, null, true);

        brushArr.push(paletteBrush);
    }

    return brushArr;
}

function AddStroke(tx, ty) {
    currentStroke.x.push(tx);
    currentStroke.y.push(ty);
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

    var matrix = new createjs.Matrix2D();
    matrix.translate(tx - brushConfig.brushHSizeW, ty - brushConfig.brushHSizeH);
    mcCanvas.BitmapData.draw(brushConfig.brush, matrix, null, null, null, true);
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

function GetRandomMinMax(min, max) {
    return Math.random() * (max - min) + min;
}

function clearCanvas() {
    mcCanvas.BitmapData.clearRect(0, 0, mcCanvas.nominalBounds.width, mcCanvas.nominalBounds.height);
}

function UpdateBitmapLayerCache() {
    mcCanvas.BitmapLayer.cache(0, 0, mcCanvas.nominalBounds.width, mcCanvas.nominalBounds.height);
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

function DrawSoundTimeout(time) {
    if (sfx_DrawSound != null) {
        sfx_DrawSound.volume = 1;

        ClearDrawSoundTimeout();

        sfx_Draw_TimeoutID = root.Wait(time).call(() => {
            sfx_DrawSound.volume = 0;
            sfx_Draw_TimeoutID = null;
        });
    }
}

function ClearDrawSoundTimeout() {
    if (sfx_Draw_TimeoutID) {
        createjs.Tween._register(sfx_Draw_TimeoutID, true);
    }
    sfx_Draw_TimeoutID = null;
}

var IsParticleActive = false;
var ParticleEvent = null;
var ParticlePos = null;
var ParticleCurrentPos = null;

var particleIdx = 0;

function ParticleActive() {
    if (IsParticleActive) {
        particleIdx = particleIdx % 4;
        SetParticleEffect(particleIdx++);

        ParticleEvent = root.Wait(300).call(() => {
            ParticleActive();
        });
    }
}

function SetParticleEffect(Idx) {
    if (ParticlePos != null) {

        var canvasPos = GetPosition(ParticlePos);

        if (mcCanvas.Image.getObjectUnderPoint(canvasPos.x, canvasPos.y) == null) {
            if (sfx_DrawSound != null) {
                sfx_DrawSound.stop();
                drawSoundPaused = true;
            }

            return;
        } else {
            if (drawSoundPaused && sfx_DrawSound != null) {

                sfx_DrawSound.play();
                drawSoundPaused = false;
            }
        }

        root["Effect_" + Idx].visible = true;

        root["Effect_" + Idx].x = ParticlePos.stageX / stage.scaleX;
        root["Effect_" + Idx].y = ParticlePos.stageY / stage.scaleY;

        root["Effect_" + Idx].gotoAndPlay(1);
    }

}

function ClearParticleEffect() {
    IsParticleActive = false;
}

root.InitCanvas();