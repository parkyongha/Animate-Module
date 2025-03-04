(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[337,418,32,32],[337,0,313,416],[0,0,335,464]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.brush = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.word_a = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.word_G = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.word_G_Image = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.instance = new lib.word_G();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.word_G_Image, new cjs.Rectangle(0,0,335,464), null);


(lib.word_a_Image = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.word_a();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.word_a_Image, new cjs.Rectangle(0,0,313,416), null);


(lib.Test = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0033CC").s().p("AlTFUQiOiMAAjIQAAjHCOiMQCMiODHAAQDIAACMCOQCOCMgBDHQABDIiOCMQiMCOjIgBQjHABiMiOg");
	this.shape.setTransform(-0.9,-0.9,0.4154,0.4154);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Test, new cjs.Rectangle(-20.9,-20.9,40,40), null);


(lib.result = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.word_G_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {path_0:0,path_1:58};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.point = new lib.Test();
	this.point.name = "point";
	this.point.setTransform(257.95,124.85,0.2876,0.2876);

	this.timeline.addTween(cjs.Tween.get(this.point).to({regX:0.1,regY:0.1,guide:{path:[258,124.9,244.8,98.7,216,86.6,171.8,73.1,143.3,78.2,94,96.1,79.5,121.7,61.3,147.7,55.2,184.3,45.6,242.7,63.6,280.4,73.3,305,94.9,322.6,125.1,346.1,166.4,347.5,210.2,348,236.8,321.3,250.2,302.1,263.7,282.9]}},57).to({x:188.8,y:219.5},1).to({regX:0,regY:0,guide:{path:[188.9,219.5,233.2,219.4,277.7,219.2,278,284,278.5,348.8]}},21).wait(1));

	// BitmapLayer
	this.BitmapLayer = new lib.result();
	this.BitmapLayer.name = "BitmapLayer";

	this.timeline.addTween(cjs.Tween.get(this.BitmapLayer).wait(80));

	// Layer_1
	this.Image = new lib.word_G_Image();
	this.Image.name = "Image";
	this.Image.setTransform(144.1,208,1,1,0,0,0,144.1,208);

	this.timeline.addTween(cjs.Tween.get(this.Image).wait(80));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,335,464);


(lib.word_a_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// Layer_3
	this.point = new lib.Test();
	this.point.name = "point";
	this.point.setTransform(197,170.85,0.2876,0.2876);

	this.timeline.addTween(cjs.Tween.get(this.point).to({guide:{path:[197,170.8,192.2,166.3,187.4,162.7,164.2,144.7,140.7,148.2,120.9,153.5,107,162.7,90.9,173.2,82.3,189.1,79.9,197.4,78.3,205,70.4,241.4,79.1,262.9,93.5,304.8,118.3,310.5,163.6,328.8,201.2,296.3,221.4,274.9,225.1,242.2,226.1,226.8,227.4,211,229.3,187.1,230.5,167.6,231.7,148.2,236.6,138.1,240.7,150,239.8,168.4,238.9,186.9,238.2,211,237.7,227.9,236.2,244.7,238.5,287.2,237.3,328]}},59).wait(1));

	// BitmapLayer
	this.BitmapLayer = new lib.result();
	this.BitmapLayer.name = "BitmapLayer";

	this.timeline.addTween(cjs.Tween.get(this.BitmapLayer).wait(60));

	// Image
	this.Image = new lib.word_a_Image();
	this.Image.name = "Image";
	this.Image.setTransform(156.5,208,1,1,0,0,0,156.5,208);

	this.timeline.addTween(cjs.Tween.get(this.Image).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,313,416);


(lib.Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var root = this;
		
		// ===================== 단어 획 
		const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		
		let currentWords = [];
		
		// 단어별 획의 좌표 배열
		let wordsStrokePoints = [];
		
		let wordCompletionStatus = [];
		
		// 현재 체크할 좌표 인덱스
		let currentPointIndex = 0;
		
		// 사용자가 획을 그을 때 허용 오차(픽셀 단위)
		let tolerance = 45;
		
		// 다음으로 넘어가기 위한 범위
		let nextTargetRange = 40;
		
		// ===================== 캔버스
		var drawImage = null;
		var currentCanvas = null;
		
		var lastPoint;
		var strokes = [];
		var currentStroke = null;
		var isDrawable = true;
		
		var canvasOffsetY = 0;
		var canvasOffsetX = 0;
		
		var clearColor = 0x00000000;
		
		// ======= 브러쉬 & 그리기
		var pointerID = -1;
		
		var paletteColor = "#088fdd";
		
		const ORIGIN_BRUSH_SCALE = 2.5;
		const ENLARGED_BRUSH_SCALE = 3;
		var brushScale = ORIGIN_BRUSH_SCALE;
		
		var isBrushScaleOrigin;
		
		var brushConfig = {
		    color: null,
		    originBrushHSizeW: 16,
		    originBrushHSizeH: 16,
		    brushHSizeW: 16,
		    brushHSizeH: 16,
		    isRandom: false,
		    dist: 4,
		    drawRange: 1
		};
		
		var brushColorBitmaps = [];
		
		var isDrawing = false;
		
		(function init() {
		    // setWordStroke가 먼저 호출되어 작업들을 해줘야 함
		    setWordStroke();
		
		    setCanvasSetting();
		}());
		
		function setCanvasSetting() {
		
		    currentWords.forEach(ch => {
		        console.log(`%ccurrent word : ${ch}`, "color:#fe6ca4");
		
		        initializeBitmapLayer(root[`word_${ch}`]);
		    });
		
		    currentCanvas = root.word_a;
		
		    canvasOffsetX = currentCanvas.x;
		    canvasOffsetY = currentCanvas.y;
		
		    UpdateBitmapLayerCache();
		    clearCanvas();
		
		    Initpalette();
		}
		
		/**
		 * drawImage에 대한 Bitmap 관련 기능 초기화
		 * @param {MovieClip} drawImage 
		 */
		function initializeBitmapLayer(drawImage) {
		    const bound = drawImage.getBounds();
		
		    drawImage.BitmapData = new createjs.BitmapData(null, bound.width, bound.height, clearColor);
		    drawImage.Board = new createjs.Bitmap(drawImage.BitmapData.canvas);
		
		    drawImage.Image.cache(0, 0, bound.width, bound.height);
		
		    drawImage.BitmapLayer.addChild(drawImage.Board);
		    drawImage.BitmapLayer.mouseChildren = false;
		    drawImage.BitmapLayer.mouseEnabled = false;
		    drawImage.BitmapLayer.cache(0, 0, bound.width, bound.height);
		    drawImage.BitmapData.clearRect(0, 0, bound.width, bound.height);
		
		    // 그리기 영역만 보여주기 위해 AlphaMaskFilter 적용
		    drawImage.BitmapLayer.filters = [new createjs.AlphaMaskFilter(drawImage.Image.cacheCanvas)];
		    drawImage.BitmapLayer.updateCache();
		}
		
		function drawImageHandleMouseDown(drawImage, event) {
		    canvasOffsetX = currentCanvas.x;
		    canvasOffsetY = currentCanvas.y;
		
		    OnDrawStart(event);
		}
		
		function cacheAndClearBitmapLayers() {
		    const bound = currentCanvas.getBounds();
		
		    currentCanvas.BitmapLayer.cache(0, 0, bound.width, bound.height);
		    currentCanvas.BitmapData.clearRect(0, 0, bound.width, bound.height);
		}
		
		function Initpalette() {
		
		    var bmpBrush = new lib["brush"];
		
		    bmpBrush.cache(0, 0, 32, 32, brushScale);
		
		    brushConfig.brushHSizeW = brushConfig.originBrushHSizeW * brushScale;
		    brushConfig.brushHSizeH = brushConfig.originBrushHSizeH * brushScale;
		
		    var _source = createjs.BitmapData.getBitmapData(bmpBrush);
		
		    brushColorBitmaps = GetBrushColorBitmaps(_source, paletteColor);
		    brushConfig.brush = brushColorBitmaps[0];
		}
		
		function OnDrawStart(e) {
		
		    if (pointerID != -1 && !CheckPointerID(e))
		        return;
		
		    brushScale = ORIGIN_BRUSH_SCALE;
		
		    brushConfig.brushHSizeW = brushConfig.originBrushHSizeW * brushScale;
		    brushConfig.brushHSizeH = brushConfig.originBrushHSizeH * brushScale;
		
		    lastPoint = wordsStrokePoints[currentCanvas.ch][currentCanvas.currentPointIndex];
		
		    pointerID = e.pointerID;
		    currentCanvas.Board.name = "Board";
		
		    currentCanvas.BitmapLayer.updateCache();
		    currentCanvas.BitmapLayer.addChild(currentCanvas.Board);
		
		    currentStroke = {
		        x: [],
		        y: []
		    };
		
		    drawBrush(lastPoint.x, lastPoint.y);
		    AddStroke(lastPoint.x, lastPoint.y);
		
		    isDrawing = true;
		}
		
		function OnDrawBrush(e) {
		    if (!CheckPointerID(e))
		        return;
		
		    if (currentStroke == null) {
		        return;
		    }
		
		    // console.log("OnDrawBrush");
		
		    var currentPoint = wordsStrokePoints[currentCanvas.ch][currentCanvas.currentPointIndex + 1];;
		
		    DrawLine(lastPoint, currentPoint);
		    AddStroke(currentPoint.x, currentPoint.y);
		
		    lastPoint = currentPoint;
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
		    const cw = Math.min(currentCanvas.nominalBounds.width, minMax.maxX + brushHSizeW);
		    const ch = Math.min(currentCanvas.nominalBounds.height, minMax.maxY + brushHSizeH);
		
		    return new createjs.Rectangle(cx, cy, cw - cx, ch - cy);
		}
		
		function OnDrawEnd(e) {
		    if (!CheckPointerID(e))
		        return;
		
		    isDrawing = false;
		
		    const canvasBound = currentCanvas.nominalBounds;
		    const brushHSizeW = brushConfig.brushHSizeW;
		    const brushHSizeH = brushConfig.brushHSizeH;
		
		    const minMax = calculateMinMax(currentStroke, canvasBound.width, canvasBound.height);
		    const cRect = calculateCanvasRect(minMax, brushHSizeW, brushHSizeH);
		
		    // 현재 그린 그림을 복사
		    var cvs = CreateCanvas(currentCanvas.BitmapData.canvas, -cRect.x, -cRect.y, cRect.width, cRect.height);
		
		    // 그린거 추가
		    var strokeBmp = new createjs.Bitmap(cvs);
		
		    strokeBmp.set({
		        x: cRect.x,
		        y: cRect.y,
		        name: "bitmap_" + currentCanvas.numChildren
		    });
		
		    currentCanvas.BitmapLayer.addChild(strokeBmp);
		
		    resetCanvasState();
		}
		
		/**
		 * Canvas 상태 초기화
		 */
		function resetCanvasState() {
		    // console.log("resetCanvasState");
		
		    pointerID = -1;
		    currentStroke = null;
		
		    clearCanvas();
		    UpdateBitmapLayerCache();
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
		function GetBrushColorBitmaps(_source, paletteColor) {
		
		    var bWidth = _source.width;
		    var bHeight = _source.height;
		    var brushArr = [];
		
		    var rgb = hexToRgb(paletteColor);
		
		    var colorTransform = new createjs.ColorTransform(0, 0, 0, 1, rgb.r, rgb.g, rgb.b);
		    var paletteBrush = new createjs.BitmapData(null, bWidth, bHeight, null);
		    paletteBrush.clearRect(0, 0, bWidth, bHeight);
		    paletteBrush.draw(_source, null, colorTransform, null, null, true);
		
		    brushArr.push(paletteBrush);
		
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
		
		    matrix.translate(
		        tx - (brushConfig.brushHSizeW),
		        ty - (brushConfig.brushHSizeH)
		    );
		
		    currentCanvas.BitmapData.draw(brushConfig.brush, matrix, null, null, null, true);
		    currentCanvas.BitmapLayer.updateCache();
		}
		
		function GetPosition(e) {
		    return {
		        x: e.stageX / stage.scaleX - canvasOffsetX,
		        y: e.stageY / stage.scaleY - canvasOffsetY
		    };
		}
		
		function GetRandomMinMax(min, max) {
		    return Math.random() * (max - min) + min;
		}
		
		function clearCanvas() {
		    currentCanvas.BitmapData.clearRect(0, 0, currentCanvas.nominalBounds.width, currentCanvas.nominalBounds.height);
		}
		
		function UpdateBitmapLayerCache() {
		    currentCanvas.BitmapLayer.updateCache();
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
		
		/**
		 * 단어 획 그리기 세팅
		 */
		function setWordStroke() {
		
		    wordsStrokePoints = getWordsStrokePathPoints();
		
		    console.log(wordsStrokePoints);
		
		    currentWords.forEach(_ch => {
		        const ch = _ch;
		
		        const word = root[`word_${ch}`];
		        word.ch = ch;
		
		        word.hasMultipleStrokes = word.labels.length != 0;
		        word.currentLabelIndex = 0;
		        word.currentPointIndex = 0;
		
		        wordCompletionStatus[ch] = false;
		
		        word.on("mousedown", (event) => {
		            let pt = { x: event.localX, y: event.localY };
		
		            if (currentCanvas != word) {
		                currentCanvas = word;
		                currentCanvas.currentPointIndex = 0;
		            }
		
		            console.log(`%c여기요~`, "color:#ebbcce")
		
		            // 시작 위치의 근처일 때
		            if (checkIfNearPoint(word.ch, pt, currentCanvas.currentPointIndex)) {
		                handleNearPoint(word.ch, event);
		            } else {
		                console.log("시작 위치가 잘못됨");
		            }
		        });
		    });
		}
		
		/**
		 * 시작 위치에서 제대로 시작했을 때
		 */
		function handleNearPoint(ch, event) {
		    drawImageHandleMouseDown(currentCanvas, event);
		
		    const word = root[`word_${ch}`];
		
		    word.on("pressmove", (event) => {
		        let pt = { x: event.localX, y: event.localY };
		
		        // console.log(`%c stageX : ${event.stageX} stageY : ${event.stageY}`, "color:#9fdba9");
		
		        if (checkIfNearPoint(ch, pt, currentCanvas.currentPointIndex)) {
		
		            OnDrawBrush(event);
		
		            const threshold = getNextThreshold(word, wordsStrokePoints, ch);
		
		            // 현재 포인트가 threshold 근처에 도달했는지 확인
		            if (currentCanvas.currentPointIndex >= threshold - 2) {
		                // word가 여러 획인 경우 && 아직 마지막 획이 아니라면
		                if (word.hasMultipleStrokes && word.currentLabelIndex < word.labels.length - 1) {
		                    word.currentLabelIndex++;
		                    currentCanvas.currentPointIndex = threshold;
		
		                    if (isDrawing) {
		                        OnDrawEnd(event);
		                    }
		
		                    word.removeAllEventListeners("pressmove");
		                    word.removeAllEventListeners("pressup");
		                } else {
		                    // 단일 획이거나, 여러 획인 경우 마지막 획인 경우
		                    console.log("성공");
		                    word.removeAllEventListeners("mousedown");
		                    word.removeAllEventListeners("pressmove");
		                    completeStrokeAnimation(ch, event);
		                }
		            }
		        } else {
		            if (isDrawing) {
		                OnDrawEnd(event);
		            }
		
		            word.removeAllEventListeners("pressmove");
		            word.removeAllEventListeners("pressup");
		
		            resetCanvasState();
		        }
		    });
		
		    word.on("pressup", (event) => {
		        console.log("pressup : " + word.name);
		        if (isDrawing) {
		            OnDrawEnd(event);
		        }
		
		        word.removeAllEventListeners("pressmove");
		    }, null, true);
		}
		
		/**
		 * 다음 경계(다음 label의 position 또는 전체 길이)를 반환하는 함수
		 */
		function getNextThreshold(word, wordsStrokePoints, ch) {
		    if (word.hasMultipleStrokes && word.labels.length > 0) {
		        // 마지막 label이 아니라면 다음 label의 position을 반환,
		        // 마지막 label이면 전체 stroke의 길이를 반환
		        return word.currentLabelIndex < word.labels.length - 1 ?
		            word.labels[word.currentLabelIndex + 1].position :
		            wordsStrokePoints[ch].length;
		    }
		
		    return wordsStrokePoints[ch].length;
		}
		
		/**
		 * 단어별 획의 좌표 배열 가져오는 함수
		 */
		function getWordsStrokePathPoints() {
		    let wordsStrokePoints = [];
		
		    for (let ch of characters) {
		        if (root[`word_${ch}`] === undefined) continue;
		
		        currentWords.push(ch);
		
		        let framePositions = getObjectFramePositions(root[`word_${ch}`]);
		        wordsStrokePoints[ch] = framePositions;
		    }
		
		
		
		    return wordsStrokePoints;
		}
		
		/**
		 *프레임별 포지션 가져오는 함수
		*/
		function getObjectFramePositions(object) {
		    var freamPositions = [];
		
		    const frameCount = object.totalFrames;
		
		    for (var i = 0; i < frameCount; i++) {
		        object.gotoAndStop(i);
		
		        let pathPoints = { x: object.point.x, y: object.point.y };
		        freamPositions.push(pathPoints);
		    }
		
		    object.point.visible = false;
		
		    return freamPositions;
		}
		
		/** 
		 * 사용자의 좌표가 목표 좌표와 가까운지 확인하는 함수
		 * @param {}
		 */
		function checkIfNearPoint(wordChar, userPoint, targetPointIndex) {
		
		    let pathPoints = wordsStrokePoints[wordChar];
		
		    if (pathPoints && !pathPoints[targetPointIndex]) {
		        console.log("%c없어 돌아가", "color:red");
		
		        return false;
		    }
		
		    const curTargetPoints = pathPoints[targetPointIndex];
		    const nextTargetPoints = pathPoints[targetPointIndex + 1];
		
		    // 마지막이 아닐 때
		    if (pathPoints[targetPointIndex + 1]) {
		
		        const curDistance = getPointDistance(userPoint, curTargetPoints);
		        const nextDistance = getPointDistance(userPoint, nextTargetPoints);
		
		        // console.log(`%c현재 좌표: ${curDistance},\n%c다음 좌표: ${nextDistance}`, "color:#8cb4f5", "color:#dc8cf5"); 
		
		        // 다음 좌표가 더 가까우면
		        if (curDistance > nextDistance && nextDistance <= nextTargetRange) {
		
		            currentCanvas.currentPointIndex++;
		
		            console.log("다음 좌표로 이동");
		            console.log("currentPointIndex : " + currentCanvas.currentPointIndex);
		        } else if (curDistance < nextDistance && curDistance >= tolerance) {
		            // 이전 좌표가 가까워진 경우
		            // 나중에 이전 좌표가 가까워졌을 때의 예외처리도 필요
		            console.log("이전 좌표로 이동");
		            return false;
		        } else if (curDistance >= tolerance) {
		
		            //console.log("%c허용 오차 범위 밖임", "color:red");
		            //console.log(`%c현재 좌표 : ${curDistance},\n%c다음 좌표 : ${nextDistance}`, "color:#8cb4f5", "color:#dc8cf5");
		            return false;
		        }
		
		    } else { // 마지막일 때
		        let curDistance = getPointDistance(userPoint, curTargetPoints);
		
		        if (curDistance <= nextTargetRange) {
		            currentCanvas.currentPointIndex++;
		            console.log("마지막임!!\ncurrentPointIndex : " + currentCanvas.currentPointIndex);
		        }
		    }
		
		
		    return true;
		}
		
		/**
		 * Point간의 거리를 가져오는 함수
		 * @param {Point} curPoint 기준
		 * @param {*} destPoint 목표
		 * @returns 
		 */
		function getPointDistance(curPoint, destPoint) {
		
		    return Math.sqrt(
		        Math.pow(curPoint.x - destPoint.x, 2) +
		        Math.pow(curPoint.y - destPoint.y, 2)
		    );
		}
		
		/**
		 * 획 완료 후 실행되는 함수
		 */
		function completeStrokeAnimation(ch, event) {
		    if (isDrawing == false)
		        return;
		
		    wordCompletionStatus[ch] = true;
		
		    console.log("completeStrokeAnimation");
		
		    OnDrawEnd(event);
		    createCompletionCanvas();
		}
		
		/**
		 * 획 완료했을 때 획의 색을 채워주는 함수
		 */
		function createCompletionCanvas() {
		    let rgb = hexToRgb(paletteColor);
		
		    console.log("여기임둥");
		
		    const bound = currentCanvas.nominalBounds;
		
		    currentCanvas.filters = [
		        new createjs.ColorFilter(0, 0, 0, 1, rgb.r, rgb.g, rgb.b, 0)
		    ];
		
		    currentCanvas.cache(0, 0, bound.width, bound.height);
		    console.log(new createjs.Bitmap(currentCanvas.cacheCanvas.toDataURL()));
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// word_a
	this.word_a = new lib.word_a_1();
	this.word_a.name = "word_a";
	this.word_a.setTransform(187.05,164.95);

	this.timeline.addTween(cjs.Tween.get(this.word_a).wait(1));

	// word_G
	this.word_G = new lib.word_G_1();
	this.word_G.name = "word_G";
	this.word_G.setTransform(707.2,216.2);

	this.timeline.addTween(cjs.Tween.get(this.word_G).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2AABDB").s().p("AqQJ6IAAzzIUhAAIAATzg");
	this.shape.setTransform(-0.5,0.1,9.734,6.3068,0,0,0,-65.8,-63.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Canvas, new cjs.Rectangle(0,0,1280.1,800), null);


// stage content:
(lib.Word_Draw_Module = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		createjs.Touch.enable(stage);
		stage.mouseMoveOutside = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Canvas
	this.canvas = new lib.Canvas();
	this.canvas.name = "canvas";
	this.canvas.setTransform(640,400,1,1,0,0,0,640,400);

	this.timeline.addTween(cjs.Tween.get(this.canvas).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(640,400,640.0999999999999,400);
// library properties:
lib.properties = {
	id: '60E10D79E35D2143B913EC6054E4F5BC',
	width: 1280,
	height: 800,
	fps: 30,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png?1741065289599", id:"index_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['60E10D79E35D2143B913EC6054E4F5BC'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;