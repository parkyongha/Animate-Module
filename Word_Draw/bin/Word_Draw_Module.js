(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Word_Draw_Module_atlas_1", frames: [[337,418,32,32],[337,0,313,416],[0,0,335,464]]}
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
	this.initialize(ss["Word_Draw_Module_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.word_a = function() {
	this.initialize(ss["Word_Draw_Module_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.word_G = function() {
	this.initialize(ss["Word_Draw_Module_atlas_1"]);
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
	this.shape.setTransform(0,0,0.4341,0.4341);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Test, new cjs.Rectangle(-20.9,-20.9,41.8,41.8), null);


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
	props.labels = {path_0:0,path_1:38};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.point = new lib.Test();
	this.point.name = "point";
	this.point.setTransform(251.8,111.8,0.2876,0.2876);

	this.timeline.addTween(cjs.Tween.get(this.point).wait(1).to({regX:0.1,regY:0.1,x:238.05,y:101.7},0).wait(1).to({x:223.15,y:93.8},0).wait(1).to({x:207.25,y:87.75},0).wait(1).to({x:190.8,y:83.6},0).wait(1).to({x:174.05,y:81.3},0).wait(1).to({x:157.1,y:80.9},0).wait(1).to({x:140.25,y:82.5},0).wait(1).to({x:123.7,y:86.15},0).wait(1).to({x:107.95,y:92},0).wait(1).to({x:93.55,y:100.9},0).wait(1).to({x:81.25,y:112.6},0).wait(1).to({x:71.55,y:126.45},0).wait(1).to({x:64.75,y:142},0).wait(1).to({x:59.9,y:158.55},0).wait(1).to({x:55.7,y:174.55},0).wait(1).to({x:54,y:191.6},0).wait(1).to({x:52.05,y:209.55},0).wait(1).to({x:49.8,y:226.85},0).wait(1).to({x:48.6,y:243.55},0).wait(1).to({x:49.9,y:260.3},0).wait(1).to({x:54.35,y:276.75},0).wait(1).to({x:61.05,y:292.65},0).wait(1).to({x:68.65,y:308.15},0).wait(1).to({x:77.1,y:322.5},0).wait(1).to({x:89.65,y:333.8},0).wait(1).to({x:105.25,y:340.55},0).wait(1).to({x:122,y:343.55},0).wait(1).to({x:139.55,y:344.4},0).wait(1).to({x:156.65,y:344.65},0).wait(1).to({x:173,y:344.55},0).wait(1).to({x:189.65,y:342.6},0).wait(1).to({x:205.75,y:337.3},0).wait(1).to({x:220.75,y:329.05},0).wait(1).to({x:234.55,y:318.75},0).wait(1).to({x:247.6,y:307.3},0).wait(1).to({x:260,y:295.6},0).wait(1).to({x:272.25,y:283.85},0).wait(1).to({regX:0.4,regY:0.4,x:197.75,y:217.25},0).wait(1).to({regX:0.5,regY:0.5,x:207.9,y:217.8},0).wait(1).to({x:217.85,y:218.25},0).wait(1).to({x:227.7,y:218.7},0).wait(1).to({x:237.65,y:219.05},0).wait(1).to({x:247.7,y:219.2},0).wait(1).to({regX:0.4,regY:0.4,x:257.7,y:219.15},0).wait(1).to({x:267.75,y:218.9},0).wait(1).to({x:276.05,y:220.3},0).wait(1).to({x:276.4,y:230.45},0).wait(1).to({x:276.6,y:240.6},0).wait(1).to({x:276.75,y:250.75},0).wait(1).to({y:260.9},0).wait(1).to({x:276.7,y:271.05},0).wait(1).to({x:276.65,y:279.6},0).wait(1).to({x:276.25,y:289.7},0).wait(1).to({x:275.9,y:299.85},0).wait(1).to({x:275.45,y:309.9},0).wait(1).to({x:275.05,y:319.8},0).wait(1).to({x:275,y:329.65},0).wait(1).to({x:275.65,y:339.7},0).wait(1).to({regX:0,regY:0,x:277.4,y:349.6},0).wait(1));

	// Layer_1
	this.Image = new lib.word_G_Image();
	this.Image.name = "Image";
	this.Image.setTransform(144.1,208,1,1,0,0,0,144.1,208);

	this.timeline.addTween(cjs.Tween.get(this.Image).wait(60));

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

	// NEAR_TEST
	this.instance = new lib.Test();
	this.instance.setTransform(190.6,167.65,0.7173,0.7173);
	this.instance.alpha = 0.8203;
	var instanceFilter_1 = new cjs.ColorFilter(1,0.71875,1,1,254,99,-29,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-23,-23,46,46);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9588,scaleY:0.9588,x:233.15,y:313.15},59).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(60));

	// Layer_3
	this.point = new lib.Test();
	this.point.name = "point";
	this.point.setTransform(190.6,167.7,0.2876,0.2876);

	this.timeline.addTween(cjs.Tween.get(this.point).to({guide:{path:[190.6,167.7,191.5,164.3,188.3,161.4,177.9,152,164.1,149.3,133.6,143.3,109,159.5,90.8,171.5,82.3,191.4,74.3,209.9,72.6,230.2,71.2,248.1,76.4,265,80.2,277.2,90,285.3,121.2,311.6,162.5,310.6,178.4,310.3,192.4,302.8,212.9,291.8,220.9,269.7,226.3,254.8,230.3,239.6,229.7,239.2,229.3,238.6,228.6,237.5,228.6,234.9,228.7,232.9,228.7,230.9,228.7,228.7,229.1,227.8,229.8,226.5,231.2,226.1,232.1,225.8,232.8,225.9,233.9,221.4,234.1,213.1,234.5,205.2,234.8,197.3,236,167.8,237.4,153.2,237.6,151.4,238.2,150.7,236.6,182.3,235,213.9,234.7,221.6,233.8,226.3,233.8,226.3,233.8,226.3,235.2,227.2,235.5,229.5,235.6,230.2,235.6,231.4,235.6,232.3,235.5,233.3,235.5,234.3,235.6,236.3,235.4,238.1,234.5,239.1,233.8,239.9,232.8,240.1,235.6,276.6,233.1,313.2]}},59).wait(1));

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
		let tolerance = 40;
		
		// 다음으로 넘어가기 위한 범위
		let nextTargetRange = 20;
		
		// ===================== 캔버스
		var drawImage = null;
		var mcCanvas = null;
		
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
		
		const ORIGIN_BRUSH_SCALE = 2.3;
		const ENLARGED_BRUSH_SCALE = 3;
		var brushScale = ORIGIN_BRUSH_SCALE;
		
		var isBrushScaleOrigin;
		
		var brushConfig = {
		    color: null,
		    brushHSizeW: 16,
		    brushHSizeH: 16,
		    isRandom: false,
		    dist: 4,
		    drawRange: 1
		};
		
		var brushColorBitmaps = [];
		
		var isDrawing = false;
		
		(function init() {
		    setCanvasSetting();
		    setWordStroke();
		}());
		
		function setCanvasSetting() {
		    mcCanvas = root.word_a;
		
		    initializeBitmapLayer(mcCanvas);
		
		    canvasOffsetX = mcCanvas.x;
		    canvasOffsetY = mcCanvas.y;
		
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
		    console.log(drawImage.name);
		    mcCanvas = drawImage;
		
		    canvasOffsetX = mcCanvas.x;
		    canvasOffsetY = mcCanvas.y;
		
		    OnDrawStart(event);
		}
		
		function cacheAndClearBitmapLayers() {
		    const bound = mcCanvas.getBounds();
		
		    mcCanvas.BitmapLayer.cache(0, 0, bound.width, bound.height);
		    mcCanvas.BitmapData.clearRect(0, 0, bound.width, bound.height);
		}
		
		function Initpalette() {
		
		    var bmpBrush = new lib["brush"];
		
		    bmpBrush.cache(0, 0, 32, 32, brushScale);
		
		    brushConfig.brushHSizeW *= brushScale;
		    brushConfig.brushHSizeH *= brushScale;
		
		    var _source = createjs.BitmapData.getBitmapData(bmpBrush);
		
		    brushColorBitmaps = GetBrushColorBitmaps(_source, paletteColor);
		    brushConfig.brush = brushColorBitmaps[0];
		}
		
		function OnDrawStart(e) {
		
		    if (pointerID != -1 && !CheckPointerID(e))
		        return;
		
		    brushScale = ORIGIN_BRUSH_SCALE;
		
		    lastPoint = wordsStrokePoints[mcCanvas.ch][currentPointIndex];
		
		    pointerID = e.pointerID;
		    mcCanvas.Board.name = "Board";
		
		    mcCanvas.BitmapLayer.updateCache();
		    mcCanvas.BitmapLayer.addChild(mcCanvas.Board);
		
		    currentStroke = {
		        x: [],
		        y: []
		    };
		
		    drawBrush(lastPoint.x, lastPoint.y);
		    AddStroke(lastPoint.x, lastPoint.y);
		
		    stage.addEventListener("stagemousemove", OnDrawBrush);
		    stage.addEventListener("stagemouseup", OnDrawEnd);
		
		    isDrawing = true;
		}
		
		function OnDrawBrush(e) {
		    if (!CheckPointerID(e))
		        return;
		
		    var currentPoint = wordsStrokePoints[mcCanvas.ch][currentPointIndex + 1];;
		
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
		    const cw = Math.min(mcCanvas.nominalBounds.width, minMax.maxX + brushHSizeW);
		    const ch = Math.min(mcCanvas.nominalBounds.height, minMax.maxY + brushHSizeH);
		
		    return new createjs.Rectangle(cx, cy, cw - cx, ch - cy);
		}
		
		function OnDrawEnd(e) {
		    if (!CheckPointerID(e))
		        return;
		
		    isDrawing = false;
		
		    if (wordCompletionStatus[mcCanvas.ch]) {
		        
		        const canvasBound = mcCanvas.nominalBounds;
		        const brushHSizeW = brushConfig.brushHSizeW;
		        const brushHSizeH = brushConfig.brushHSizeH;
		        
		        const minMax = calculateMinMax(currentStroke, canvasBound.width, canvasBound.height);
		        const cRect = calculateCanvasRect(minMax, brushHSizeW, brushHSizeH);
		        
		        // 현재 그린 그림을 복사
		        var cvs = CreateCanvas(mcCanvas.BitmapData.canvas, -cRect.x, -cRect.y, cRect.width, cRect.height);
		        
		        // 그린거 추가
		        var strokeBmp = new createjs.Bitmap(cvs);
		        
		        strokeBmp.set({
		            x: cRect.x,
		            y: cRect.y,
		            name: "bitmap_" + mcCanvas.numChildren
		        });
		    }
		
		    mcCanvas.BitmapLayer.addChild(strokeBmp);
		
		    resetCanvasState();
		}
		
		/**
		 * Canvas 상태 초기화
		 */
		function resetCanvasState() {
		    console.log("resetCanvasState");
		
		    pointerID = -1;
		    currentStroke = null;
		
		    clearCanvas();
		    UpdateBitmapLayerCache();
		
		    stage.removeAllEventListeners("stagemousemove");
		    stage.removeAllEventListeners("stagemouseup");
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
		
		    var scaleFactor = brushScale / ORIGIN_BRUSH_SCALE;
		    
		    matrix.scale(scaleFactor, scaleFactor);
		    
		    matrix.translate(
		        tx - (brushConfig.brushHSizeW),
		        ty - (brushConfig.brushHSizeH)
		    );    
		    mcCanvas.BitmapData.draw(brushConfig.brush, matrix, null, null, null, true);
		    
		    mcCanvas.BitmapLayer.updateCache();
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
		    mcCanvas.BitmapData.clearRect(0, 0, mcCanvas.nominalBounds.width, mcCanvas.nominalBounds.height);
		}
		
		function UpdateBitmapLayerCache() {
		    mcCanvas.BitmapLayer.updateCache();
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
		
		        wordCompletionStatus[ch] = false;
		
		        word.on("mousedown", (event) => {
		            let pt = { x: event.localX, y: event.localY };
		
		            currentPointIndex = 0;
		
		            // 시작 위치의 근처일 때
		            if (checkIfNearPoint(ch, pt, currentPointIndex)) {
		                handleNearPoint(ch, event);
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
		    drawImageHandleMouseDown(mcCanvas, event);
		
		    const word = root[`word_${ch}`];
		
		    word.on("pressmove", (event) => {
		        let pt = { x: event.localX, y: event.localY };
		
		        // console.log(`%c stageX : ${event.stageX} stageY : ${event.stageY}`, "color:#9fdba9");
		
		        if (checkIfNearPoint(ch, pt, currentPointIndex)) {
		
		            if (currentPointIndex >= 10 && brushScale === ORIGIN_BRUSH_SCALE) {
		                console.log("브러쉬 키우긴 함");
		                brushScale = ENLARGED_BRUSH_SCALE;
		
		                brushConfig.brushHSizeW *= brushScale / ORIGIN_BRUSH_SCALE;
		                brushConfig.brushHSizeH *= brushScale / ORIGIN_BRUSH_SCALE;
		                //brushConfig.brush.context.scale(brushScale / ORIGIN_BRUSH_SCALE);
		            }
		
		
		            // 획이 여러 개일 때의 처리 필요
		            if (currentPointIndex >= wordsStrokePoints[ch].length - 2) {
		                console.log("성공");
		
		                word.removeAllEventListeners("mousedown");
		                word.removeAllEventListeners("pressmove");
		
		                completeStrokeAnimation(ch, event);
		
		                return;
		            }
		        } else {
		            resetCanvasState();
		        }
		    });
		
		    word.on("pressup", (event) => {
		        console.log("pressup : " + word.name);
		
		        word.removeAllEventListeners("pressmove");
		    }, null, true);
		}
		
		// 단어별 획의 좌표 배열 가져오는 함수
		function getWordsStrokePathPoints() {
		    let wordsStrokePoints = [];
		
		    for (let ch of characters) {
		        if (root[`word_${ch}`] === undefined) continue;
		
		        currentWords.push(ch);
		
		        let framePositions = getObjectFramePositions(root[`word_${ch}`]);
		        wordsStrokePoints[ch] = framePositions;
		    }
		
		    // 프레임별 포지션 가져오는 함수
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
		
		    return wordsStrokePoints;
		}
		
		
		
		/** 
		 * 사용자의 좌표가 목표 좌표와 가까운지 확인하는 함수
		 * 
		 * */
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
		
		        let curDistance = Math.sqrt(
		            Math.pow(userPoint.x - curTargetPoints.x, 2) +
		            Math.pow(userPoint.y - curTargetPoints.y, 2)
		        );
		
		        let nextDistance = Math.sqrt(
		            Math.pow(userPoint.x - nextTargetPoints.x, 2) +
		            Math.pow(userPoint.y - nextTargetPoints.y, 2)
		        );
		
		        // console.log(`%c현재 좌표: ${curDistance},\n%c다음 좌표: ${nextDistance}`, "color:#8cb4f5", "color:#dc8cf5"); 
		
		        // 다음 좌표가 더 가까우면
		        if (curDistance > nextDistance && nextDistance <= nextTargetRange) {
		            // 다음 좌표로 이동
		            currentPointIndex++;
		            console.log("다음 좌표로 이동");
		            console.log("currentPointIndex : " + currentPointIndex);
		        } else if (curDistance < nextDistance && curDistance >= tolerance) {
		            // 이전 좌표가 가까워진 경우
		            // 나중에 이전 좌표가 가까워졌을 때의 예외처리도 필요
		            console.log("이전 좌표로 이동");
		            return false;
		        } else if (curDistance >= tolerance) {
		            console.log("%c허용 오차 범위 밖임", "color:red");
		            console.log(`%c현재 좌표 : ${curDistance},\n%c다음 좌표 : ${nextDistance}`, "color:#8cb4f5", "color:#dc8cf5");
		            return false;
		        }
		
		    } else { // 마지막일 때
		        let curDistance = Math.sqrt(
		            Math.pow(userPoint.x - curTargetPoints.x, 2) +
		            Math.pow(userPoint.y - curTargetPoints.y, 2)
		        );
		
		        if (curDistance <= nextTargetRange) {
		            currentPointIndex++;
		            console.log("마지막임!!\ncurrentPointIndex : " + currentPointIndex);
		        }
		    }
		
		
		    return true;
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
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// word_a
	this.word_a = new lib.word_a_1();
	this.word_a.name = "word_a";
	this.word_a.setTransform(187.05,164.95);

	this.timeline.addTween(cjs.Tween.get(this.word_a).wait(1));
	this.word_a.addEventListener("tick", AdobeAn.handleFilterCache);

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
		{src:"images/Word_Draw_Module_atlas_1.png?1740650125854", id:"Word_Draw_Module_atlas_1"}
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