(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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



(lib.sticker_0 = function() {
	this.initialize(img.sticker_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,149,142);


(lib.sticker_1 = function() {
	this.initialize(img.sticker_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,149,129);


(lib.sticker_2 = function() {
	this.initialize(img.sticker_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,149,145);


(lib.sticker_3 = function() {
	this.initialize(img.sticker_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,149,149);


(lib.sticker_canvas = function() {
	this.initialize(img.sticker_canvas);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,712,628);


(lib.sticker_tab_bg = function() {
	this.initialize(img.sticker_tab_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,675,771);


(lib.undo_btn = function() {
	this.initialize(img.undo_btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,183,188);// helper functions:

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


(lib.sticker_canvas_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.sticker_canvas();

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,211,0,0)").ss(1,1,1).p("EgkFgxDMBILAAAMAAABiHMhILAAAg");
	this.shape.setTransform(231,313.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sticker_canvas_1, new cjs.Rectangle(-1,-1,713,630), null);


(lib.btn_back = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.undo_btn();
	this.instance.setTransform(-91.5,-68.95,1,0.9999);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.9001,scaleY:0.9,x:-82.3,y:-61.8},0).wait(1).to({scaleX:1,scaleY:0.9999,x:-91.5,y:-68.95},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.5,-68.9,183,188);


(lib.stickers_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00F2FF").s().p("ArtLuIAA3bIXbAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-75,150,150);


(lib.sticker_3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.instance = new lib.sticker_3();
	this.instance.setTransform(-74.5,-74.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sticker_3_1, new cjs.Rectangle(-74.5,-74.5,149,149), null);


(lib.sticker_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.instance = new lib.sticker_2();
	this.instance.setTransform(-74.45,-72.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sticker_2_1, new cjs.Rectangle(-74.4,-72.6,149,145), null);


(lib.sticker_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.instance = new lib.sticker_1();
	this.instance.setTransform(-74.5,-64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sticker_1_1, new cjs.Rectangle(-74.5,-64.5,149,129), null);


(lib.sticker_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.instance = new lib.sticker_0();
	this.instance.setTransform(-74.5,-71);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sticker_0_1, new cjs.Rectangle(-74.5,-71,149,142), null);


(lib.sticker_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_2
	this.instance = new lib.stickers_btn();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-75,150,150);


(lib.stickers_ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.Ani = new lib.sticker_0_1();
	this.Ani.name = "Ani";

	this.instance = new lib.sticker_1_1();

	this.instance_1 = new lib.sticker_2_1();

	this.instance_2 = new lib.sticker_3_1();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Ani}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// btn
	this.instance_3 = new lib.sticker_btn();
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.sticker_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-75,150,150);


(lib.sticker_All = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.instance = new lib.sticker_0();
	this.instance.setTransform(-74.5,-71);

	this.instance_1 = new lib.sticker_1();
	this.instance_1.setTransform(-74.5,-64.5);

	this.instance_2 = new lib.sticker_2();
	this.instance_2.setTransform(-74.5,-72.5);

	this.instance_3 = new lib.sticker_3();
	this.instance_3.setTransform(-74.5,-74.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// btn
	this.instance_4 = new lib.sticker_btn();
	this.instance_4.setTransform(75.1,75,1,1,0,0,0,75.1,75);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.sticker_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-75,150,150.1);


(lib.stickers_ani = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 레이어_1
	this.Image = new lib.stickers_();
	this.Image.name = "Image";

	this.timeline.addTween(cjs.Tween.get(this.Image).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stickers_ani, new cjs.Rectangle(-74.5,-71,149,142), null);


(lib.stickerOBJ_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_2
	this.instance = new lib.sticker_All("single",3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stickerOBJ_3, new cjs.Rectangle(-75,-74.9,150,150), null);


(lib.stickerOBJ_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_2
	this.instance = new lib.sticker_All("single",2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stickerOBJ_2, new cjs.Rectangle(-75,-74.9,150,150), null);


(lib.stickerOBJ_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_2
	this.instance = new lib.sticker_All("single",1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stickerOBJ_1, new cjs.Rectangle(-75,-74.9,150,150), null);


(lib.stickerOBJ_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// eye
	this.instance = new lib.sticker_All("single",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stickerOBJ_0, new cjs.Rectangle(-75,-74.9,150,150), null);


(lib.palette = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// obj_palette
	this.sticker_3 = new lib.stickers_ani();
	this.sticker_3.name = "sticker_3";
	this.sticker_3.setTransform(388.2,510.35,1.257,1.25);

	this.sticker_0 = new lib.stickers_ani();
	this.sticker_0.name = "sticker_0";
	this.sticker_0.setTransform(137.9,260.6,1.25,1.25);

	this.sticker_1 = new lib.stickers_ani();
	this.sticker_1.name = "sticker_1";
	this.sticker_1.setTransform(388.2,260.6,1.257,1.25);

	this.sticker_2 = new lib.stickers_ani();
	this.sticker_2.name = "sticker_2";
	this.sticker_2.setTransform(137.35,510.35,1.257,1.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sticker_2},{t:this.sticker_1},{t:this.sticker_0},{t:this.sticker_3}]}).wait(1));

	// bg
	this.instance = new lib.sticker_tab_bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.palette, new cjs.Rectangle(0,0,675,771), null);


// stage content:
(lib.Sticker_Module = function(mode,startPosition,loop,reversed) {
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
		var root = this;
		
		var canvas = root.canvas;
		var canvasBound = canvas.nominalBounds;
		
		var canvasScaleX = canvas.scaleX;
		var canvasScaleY = canvas.scaleY;
		
		var palette = root.palette;
		
		var stickers = palette.GetChildsByName("sticker_");
		
		root.stickerStack = [];
		
		root.stickersCountArr = [];
		
		var isDraging = false;
		
		var maxDragX = canvasBound.width;
		var maxDragY = canvasBound.height;
		
		{
			root.btn_back.visible = true;
		
			stickers.forEach((stickerObj, Idx) => {
				// 기본으로 1번째 이미지에 있는데 1번째 이미지의 피벗 위치를 저장해둠
				var originReg = {
					x: stickerObj.Image.getChildAt(1).regX,
					y: stickerObj.Image.getChildAt(1).regY
				};
		
				// 이미지를 각 Index에 맞도록 변경
				stickerObj.Image.gotoAndStop(Idx);
		
				// 바뀐 이미지의 피벗 위치를 받아옴
				var regX = stickerObj.Image.getChildAt(1).regX;
				var regY = stickerObj.Image.getChildAt(1).regY;
		
				// pivot을 이용하여 정렬
				stickerObj.x += originReg.x - regX;
				stickerObj.y += originReg.y - regY;
		
				root.stickersCountArr.push(0);
			});
		
			Init();
		}
		
		// ================ 튜토리얼 끝나고 Init
		function Init() {
		
			// 스티커들에 이벤트 추가
			stickers.forEach((stickerObj, Idx) => {
				stickerObj.cIdx = Idx;
		
				stickerObj.on("mousedown", function (e) {
		
					// 스티커 갯수 제한은 여기서
					if (root.stickersCountArr[Idx] >= 20) {
						return;
					}
		
					CreateSticker(stickerObj);
				});
			});
		
			root.btn_back.addEventListener("click", function (e) {
				if (root.stickerStack.length == 0)
					return;
		
				// 스택에서 지우기
				var sticker = root.stickerStack.pop();
				sticker.parent.removeChild(sticker);
		
				root.stickersCountArr[sticker.Idx]--;
			});
		}
		
		// 스티커 생성하는 함수
		function CreateSticker(obj) {
			// link된 심볼 생성
			var cloneSticker = new lib["stickerOBJ_" + obj.cIdx]();
			canvas.addChild(cloneSticker);
		
			root.stickersCountArr[obj.cIdx]++;
		
			// 애니메이션있는지 확인
			cloneSticker.Idx = obj.cIdx;
		
			// x : 0, y : 0, scaleX : 1 / panelScaleX, scaleY : 1 / panelScaleY
			cloneSticker.setTransform(0, 0, 1 / canvasScaleX, 1 / canvasScaleY);
		
			// 포지션 설정
			SetBoundPostion(cloneSticker, Math.random() * maxDragX, Math.random() * maxDragY);
		
			// 스티커 스택에 넣기
			root.stickerStack.push(cloneSticker);
		
			// 드래그 앤 드랍 가능하도록 설정
			SetDragDrop(cloneSticker);
		}
		
		// 생성한 스티커 드래그 가능하게 만들기
		function SetDragDrop(obj) {
			obj.mouseDownHandler = function (e) {
				if (isDraging) {
					return;
				}
		
				isDraging = true;
		
				// 마우스 이벤트 기준으로 좌표와 드래그하려는 obj와 거리 계산
				obj.offsetX = (e.stageX / stage.scaleX) / canvasScaleX - obj.x;
				obj.offsetY = (e.stageY / stage.scaleY) / canvasScaleY - obj.y;
		
				// stage에 mousemove와 mouseup 이벤트 추가
				stage.addEventListener("stagemousemove", obj.stageMouseMoveHandler);
				stage.addEventListener("stagemouseup", obj.stageMouseUpHandler);
		
				// 선택한 스티커가 제일 위로 올라오도록 설정
				canvas.setChildIndex(obj, canvas.numChildren - 1);
			};
		
			obj.stageMouseMoveHandler = function (e) {
				// 마우스 이벤트 기준으로 좌표 계산
				var tx = (e.stageX / stage.scaleX) / canvasScaleX - obj.offsetX;
				var ty = (e.stageY / stage.scaleY) / canvasScaleY - obj.offsetY;
		
				// 계산한 좌표를 다시 계산
				SetBoundPostion(obj, tx, ty);
			};
		
			obj.stageMouseUpHandler = function (e) {
		
				isDraging = false;
		
				// 이벤트 제거
				stage.removeAllEventListeners("stagemousemove");
				stage.removeAllEventListeners("stagemouseup");
			}
		
			// obj에 mousedown 이벤트 추가
			obj.addEventListener("mousedown", obj.mouseDownHandler);
		}
		
		// 스티커 포지션 설정 (canvas 밖으로 나가지 못하게)
		function SetBoundPostion(obj, tx, ty) {
			var bound = obj.nominalBounds;
		
			// obj가 중앙 기준으로 정렬 되어 있어서 min은 obj width의 반으로 설정해둠
			var minX = bound.width / 2;
			var minY = bound.height / 2;
		
			// max 값도 마찬가지로 width의 반을 빼줌
			var maxX = maxDragX - bound.width / 2;
			var maxY = maxDragY - bound.height / 2;
		
			var tx = Math.clamp(tx, minX, maxX);
			var ty = Math.clamp(ty, minY, maxY);
		
			// obj 좌표 재설정
			obj.x = tx;
			obj.y = ty;
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// palette
	this.palette = new lib.palette();
	this.palette.name = "palette";
	this.palette.setTransform(1453.85,92.05);

	this.timeline.addTween(cjs.Tween.get(this.palette).wait(1));

	// canvas
	this.canvas = new lib.sticker_canvas_1();
	this.canvas.name = "canvas";
	this.canvas.setTransform(430.55,305.65);

	this.timeline.addTween(cjs.Tween.get(this.canvas).wait(1));

	// btn_delete
	this.btn_back = new lib.btn_back();
	this.btn_back.name = "btn_back";
	this.btn_back.setTransform(1683.65,1002.6);
	new cjs.ButtonHelper(this.btn_back, 0, 1, 2, false, new lib.btn_back(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_back).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(1430.1,692.1,698.8000000000002,429.6);
// library properties:
lib.properties = {
	id: '009311227A46CA4AA9E28196AA60BD12',
	width: 2000,
	height: 1200,
	fps: 30,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [
		{src:"images/sticker_0.png?1740476107201", id:"sticker_0"},
		{src:"images/sticker_1.png?1740476107201", id:"sticker_1"},
		{src:"images/sticker_2.png?1740476107201", id:"sticker_2"},
		{src:"images/sticker_3.png?1740476107201", id:"sticker_3"},
		{src:"images/sticker_canvas.png?1740476107201", id:"sticker_canvas"},
		{src:"images/sticker_tab_bg.png?1740476107201", id:"sticker_tab_bg"},
		{src:"images/undo_btn.png?1740476107201", id:"undo_btn"},
		{src:"sounds/sfx_btn_tab.mp3?1740476107201", id:"sfx_btn_tab"}
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
an.compositions['009311227A46CA4AA9E28196AA60BD12'] = {
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