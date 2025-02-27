(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Draw_Module_atlas_1", frames: [[1996,201,32,32],[699,518,166,108],[534,518,163,163],[1415,402,51,51],[1468,402,51,51],[1521,402,51,51],[1574,402,51,51],[1627,402,51,51],[0,0,507,503],[993,0,420,453],[509,0,482,516],[0,505,176,176],[1817,201,177,176],[178,505,176,176],[1817,379,177,176],[356,518,176,176],[993,455,699,237],[1415,0,199,199],[1616,0,199,199],[1817,0,199,199],[1415,201,199,199],[1616,201,199,199]]}
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
	this.initialize(ss["Draw_Module_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.canvas_bg = function() {
	this.initialize(ss["Draw_Module_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.canvas_btn_complete = function() {
	this.initialize(ss["Draw_Module_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Effect_Color_0 = function() {
	this.initialize(ss["Draw_Module_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Effect_Color_2 = function() {
	this.initialize(ss["Draw_Module_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Effect_Color_3 = function() {
	this.initialize(ss["Draw_Module_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Effect_Color_4 = function() {
	this.initialize(ss["Draw_Module_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Effect_Color_5 = function() {
	this.initialize(ss["Draw_Module_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Image_0 = function() {
	this.initialize(ss["Draw_Module_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Image_1 = function() {
	this.initialize(ss["Draw_Module_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Image_2 = function() {
	this.initialize(ss["Draw_Module_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.palette_color_bg_0 = function() {
	this.initialize(ss["Draw_Module_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.palette_color_bg_2 = function() {
	this.initialize(ss["Draw_Module_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.palette_color_bg_3 = function() {
	this.initialize(ss["Draw_Module_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.palette_color_bg_4 = function() {
	this.initialize(ss["Draw_Module_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.palette_color_bg_5 = function() {
	this.initialize(ss["Draw_Module_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.pallete = function() {
	this.initialize(ss["Draw_Module_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.pallette_color_base_0 = function() {
	this.initialize(ss["Draw_Module_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.pallette_color_base_2 = function() {
	this.initialize(ss["Draw_Module_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.pallette_color_base_3 = function() {
	this.initialize(ss["Draw_Module_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.pallette_color_base_4 = function() {
	this.initialize(ss["Draw_Module_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.pallette_color_base_5 = function() {
	this.initialize(ss["Draw_Module_atlas_1"]);
	this.gotoAndStop(21);
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


(lib.bgbgb = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.canvas_bg();
	this.instance.setTransform(0,0,12.0482,12.0464);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bgbgb, new cjs.Rectangle(0,0,2000,1301), null);


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


(lib.image_2_graphic = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Image_2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_2_graphic, new cjs.Rectangle(0,0,482,516), null);


(lib.image_1_graphic = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Image_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_1_graphic, new cjs.Rectangle(0,0,420,453), null);


(lib.image_0_graphic = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Image_0();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_0_graphic, new cjs.Rectangle(0,0,507,503), null);


(lib.EffectColor = function(mode,startPosition,loop,reversed) {
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
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11));

	// Layer_1
	this.instance = new lib.Effect_Color_0();
	this.instance.setTransform(-25.6,-25.35);

	this.instance_1 = new lib.Effect_Color_2();
	this.instance_1.setTransform(-25.6,-25.35);

	this.instance_2 = new lib.Effect_Color_4();
	this.instance_2.setTransform(-25.6,-25.35);

	this.instance_3 = new lib.Effect_Color_3();
	this.instance_3.setTransform(-25.6,-25.35);

	this.instance_4 = new lib.Effect_Color_5();
	this.instance_4.setTransform(-25.6,-25.35);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("Ai0CzQhLhKAAhpQAAhoBLhLQBLhKBpAAQBrAABKBKQBLBLAABoQAABphLBKQhKBLhrAAQhpAAhLhLg");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF99FF").s().p("Ai0CzQhLhKAAhpQAAhoBLhLQBLhKBpAAQBrAABKBKQBLBLAABoQAABphLBKQhKBLhrAAQhpAAhLhLg");
	this.shape_1.setTransform(0,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9900FF").s().p("Ai0CzQhLhKAAhpQAAhoBLhLQBLhKBpAAQBrAABKBKQBLBLAABoQAABphLBKQhKBLhrAAQhpAAhLhLg");
	this.shape_2.setTransform(0,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663300").s().p("Ai0CzQhLhKAAhpQAAhoBLhLQBLhKBpAAQBrAABKBKQBLBLAABoQAABphLBKQhKBLhrAAQhpAAhLhLg");
	this.shape_3.setTransform(0,0.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ai0CzQhLhKAAhpQAAhoBLhLQBLhKBpAAQBrAABKBKQBLBLAABoQAABphLBKQhKBLhrAAQhpAAhLhLg");
	this.shape_4.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.6,-25.3,51.2,51);


(lib.btn_ccomplete = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.canvas_btn_complete();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.8,scaleY:0.8,x:16.3,y:16.3},0).wait(1).to({scaleX:1,scaleY:1,x:0,y:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,163,163);


(lib.ColorCoverImage = function(mode,startPosition,loop,reversed) {
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
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// Layer_1
	this.instance = new lib.palette_color_bg_0();
	this.instance.setTransform(-88,-88);

	this.instance_1 = new lib.palette_color_bg_2();
	this.instance_1.setTransform(-88.5,-88);

	this.instance_2 = new lib.palette_color_bg_4();
	this.instance_2.setTransform(-88.5,-88);

	this.instance_3 = new lib.palette_color_bg_3();
	this.instance_3.setTransform(-88,-88);

	this.instance_4 = new lib.palette_color_bg_5();
	this.instance_4.setTransform(-88,-88);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.5,-88,177,176);


(lib.color_Image = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.pallette_color_base_0();
	this.instance.setTransform(-99.5,-99.5);

	this.instance_1 = new lib.pallette_color_base_2();
	this.instance_1.setTransform(-99.5,-99.5);

	this.instance_2 = new lib.pallette_color_base_4();
	this.instance_2.setTransform(-99.5,-99.5);

	this.instance_3 = new lib.pallette_color_base_3();
	this.instance_3.setTransform(-99.5,-99.5);

	this.instance_4 = new lib.pallette_color_base_5();
	this.instance_4.setTransform(-99.5,-99.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.5,-99.5,199,199);


(lib.Image_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// BitmapLayer
	this.BitmapLayer = new lib.result();
	this.BitmapLayer.name = "BitmapLayer";

	this.timeline.addTween(cjs.Tween.get(this.BitmapLayer).wait(1));

	// 레이어_1
	this.Image = new lib.image_2_graphic();
	this.Image.name = "Image";

	this.timeline.addTween(cjs.Tween.get(this.Image).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Image_2_1, new cjs.Rectangle(0,0,482,516), null);


(lib.Image_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// BitmapLayer
	this.BitmapLayer = new lib.result();
	this.BitmapLayer.name = "BitmapLayer";

	this.timeline.addTween(cjs.Tween.get(this.BitmapLayer).wait(1));

	// 레이어_1
	this.Image = new lib.image_1_graphic();
	this.Image.name = "Image";

	this.timeline.addTween(cjs.Tween.get(this.Image).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Image_1_1, new cjs.Rectangle(0,0,420,453), null);


(lib.Image_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// BitmapLayer
	this.BitmapLayer__1 = new lib.result();
	this.BitmapLayer__1.name = "BitmapLayer__1";

	this.timeline.addTween(cjs.Tween.get(this.BitmapLayer__1).wait(1));

	// BitmapLayer
	this.BitmapLayer = new lib.result();
	this.BitmapLayer.name = "BitmapLayer";

	this.timeline.addTween(cjs.Tween.get(this.BitmapLayer).wait(1));

	// 레이어_1
	this.Image = new lib.image_0_graphic();
	this.Image.name = "Image";

	this.timeline.addTween(cjs.Tween.get(this.Image).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Image_0_1, new cjs.Rectangle(0,0,507,503), null);


(lib.Effect_4 = function(mode,startPosition,loop,reversed) {
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
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21));

	// Layer_1_copy
	this.Color_0 = new lib.EffectColor();
	this.Color_0.name = "Color_0";
	this.Color_0.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.Color_0).wait(1).to({scaleX:0.5404,scaleY:0.5404},0).wait(1).to({regY:0.1,y:0.05},0).wait(1).to({regY:0,y:0},0).wait(1).to({regY:0.1,scaleX:0.743,scaleY:0.743,x:4.25,y:-22.55,alpha:0.5878},0).wait(1).to({regY:0,scaleX:0.8851,scaleY:0.8851,x:7.25,y:-38.5,alpha:1},0).wait(1).to({regY:0.1,scaleX:0.9679,scaleY:0.9679,x:10.1,y:-47.65},0).wait(1).to({regY:0,scaleX:1,scaleY:1,x:11.25,y:-51.35},0).to({regX:0.1,regY:-0.1,scaleX:0.92,scaleY:0.92,x:17.35,y:-49.85},3).to({scaleX:0.6499,scaleY:0.6499,x:23.55,y:-29.9,alpha:0.5},3,cjs.Ease.none).to({regX:0,regY:0,scaleX:0.3798,scaleY:0.3798,x:25.75,y:-10.1,alpha:0},3).wait(5));

	// Layer_1_copy
	this.Color_1 = new lib.EffectColor();
	this.Color_1.name = "Color_1";
	this.Color_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.Color_1).wait(2).to({regY:0.1,scaleX:0.9538,scaleY:0.9538,x:-5.15,y:-18.75,alpha:0.1824},0).wait(1).to({scaleX:0.9104,scaleY:0.9104,x:-10,y:-36.5,alpha:0.3536},0).wait(1).to({scaleX:0.8747,scaleY:0.8747,x:-14,y:-51.1,alpha:0.4947},0).wait(1).to({regY:0,scaleX:0.8476,scaleY:0.8476,x:-17.05,y:-62.3,alpha:0.6016},0).wait(1).to({regY:0.1,scaleX:0.8259,scaleY:0.8259,x:-21.05,y:-71.05,alpha:0.7724},0).wait(1).to({scaleX:0.811,scaleY:0.811,x:-23.75,y:-77.1,alpha:0.8886},0).wait(1).to({scaleX:0.8018,scaleY:0.8018,x:-25.45,y:-80.9,alpha:0.9615},0).wait(1).to({regY:0,scaleX:0.7968,scaleY:0.7968,x:-26.4,y:-83.05,alpha:1},0).to({x:-30.95,y:-81.1},2).to({scaleX:0.6063,scaleY:0.6063,x:-50.3,y:-42.25,alpha:0.4609},3).to({scaleX:0.3524,scaleY:0.3524,x:-63.1,y:9.6,alpha:0},4).wait(3));

	// Layer_1_copy
	this.Color_2 = new lib.EffectColor();
	this.Color_2.name = "Color_2";
	this.Color_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.Color_2).wait(1).to({scaleX:0.6292,scaleY:0.6292},0).wait(1).to({regY:0.1,scaleX:0.7927,scaleY:0.7927,x:-1.05,y:-7.65,alpha:0.5878},0).wait(1).to({regY:0,scaleX:0.9073,scaleY:0.9073,x:-1.8,y:-13.2,alpha:1},0).wait(1).to({regY:0.1,scaleX:0.9741,scaleY:0.9741,x:-5.65,y:-17.65},0).wait(1).to({regY:0,scaleX:1,scaleY:1,x:-7.15,y:-19.55},0).to({x:-11.7,y:-23.45},2).to({x:-15.6,y:-19.55},2).to({scaleX:0.8114,scaleY:0.8114,x:-22.75,y:-5.4,alpha:0.6016},2).to({regY:0.1,scaleX:0.5286,scaleY:0.5286,x:-29.25,y:15.8,alpha:0},3).wait(7));

	// Layer_1
	this.Color_3 = new lib.EffectColor();
	this.Color_3.name = "Color_3";
	this.Color_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.Color_3).wait(1).to({scaleX:0.3346,scaleY:0.3346},0).wait(1).to({regY:0.1,scaleX:0.4659,scaleY:0.4659,x:4.65,y:-38.5,alpha:0.5552},0).wait(1).to({regY:0,scaleX:0.5711,scaleY:0.5711,x:8.45,y:-69.45,alpha:1},0).wait(1).to({regY:0.1,scaleX:0.6455,scaleY:0.6455,x:13.9,y:-91.25},0).wait(1).to({scaleX:0.6864,scaleY:0.6864,x:16.9,y:-103.25},0).wait(1).to({regY:0,scaleX:0.7041,scaleY:0.7041,x:18.2,y:-108.55},0).to({regX:0.1,regY:-0.1,x:19.35,y:-110.55},1).to({regX:0,regY:0,x:21.45,y:-108.55},2).wait(1).to({regY:0.1,scaleX:0.6955,scaleY:0.6955,x:21.65,y:-106.05,alpha:0.9818},0).wait(1).to({scaleX:0.6733,scaleY:0.6733,x:22.3,y:-99.75,alpha:0.9349},0).wait(1).to({scaleX:0.635,scaleY:0.635,x:23.4,y:-88.9,alpha:0.8539},0).wait(1).to({scaleX:0.5794,scaleY:0.5794,x:25,y:-73.15,alpha:0.7364},0).wait(1).to({regX:0.1,regY:0,scaleX:0.5099,scaleY:0.5099,x:27.05,y:-53.55,alpha:0.5898},0).wait(1).to({regX:0,regY:0.1,scaleX:0.4305,scaleY:0.4305,x:27.9,y:-31,alpha:0.4199},0).wait(1).to({scaleX:0.3595,scaleY:0.3595,x:28.7,y:-10.85,alpha:0.268},0).wait(1).to({scaleX:0.3044,scaleY:0.3044,x:29.35,y:4.7,alpha:0.1501},0).wait(1).to({scaleX:0.2665,scaleY:0.2665,x:29.8,y:15.45,alpha:0.069},0).wait(1).to({scaleX:0.2439,scaleY:0.2439,x:30.05,y:21.8,alpha:0.0208},0).wait(1).to({regY:0,scaleX:0.2342,scaleY:0.2342,x:30.2,y:24.55,alpha:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.1,-128.3,112.69999999999999,158.9);


(lib.Effect_3 = function(mode,startPosition,loop,reversed) {
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
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21));

	// Layer_1
	this.Color_0 = new lib.EffectColor();
	this.Color_0.name = "Color_0";
	this.Color_0.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.Color_0).wait(1).to({alpha:1},0).wait(1).to({regY:0.1,scaleX:0.9947,scaleY:0.9947,x:0.95,y:0.6,alpha:0.9939},0).wait(1).to({regY:0,scaleX:0.9831,scaleY:0.9831,x:3.05,y:1.7,alpha:0.9805},0).wait(1).to({regY:0.1,scaleX:0.9644,scaleY:0.9644,x:4.65,y:5.4,alpha:0.9523},0).wait(1).to({scaleX:0.9377,scaleY:0.9377,x:6.95,y:10.55,alpha:0.9123},0).wait(1).to({regY:0,scaleX:0.9025,scaleY:0.9025,x:10.05,y:17.25,alpha:0.8594},0).wait(1).to({regY:0.1,scaleX:0.8583,scaleY:0.8583,x:9.65,y:25.75,alpha:0.7952},0).wait(1).to({regY:0,scaleX:0.8057,scaleY:0.8057,x:9.25,y:35.7,alpha:0.7188},0).wait(1).to({regY:0.1,scaleX:0.746,scaleY:0.746,x:6.3,y:45.85,alpha:0.6334},0).wait(1).to({scaleX:0.682,scaleY:0.682,x:3.15,y:56.7,alpha:0.5418},0).wait(1).to({regY:0,scaleX:0.6173,scaleY:0.6173,x:0,y:67.65,alpha:0.4492},0).wait(1).to({regY:0.1,scaleX:0.5527,scaleY:0.5527,x:-4.55,y:78.05,alpha:0.3549},0).wait(1).to({regY:0,scaleX:0.4941,scaleY:0.4941,x:-8.7,y:87.45,alpha:0.2695},0).wait(1).to({regY:0.1,scaleX:0.4435,scaleY:0.4435,x:-11.75,y:97.2,alpha:0.1975},0).wait(1).to({scaleX:0.4015,scaleY:0.4015,x:-14.3,y:105.3,alpha:0.1376},0).wait(1).to({regY:0,scaleX:0.3679,scaleY:0.3679,x:-16.35,y:111.75,alpha:0.0898},0).wait(1).to({regY:0.1,scaleX:0.3422,scaleY:0.3422,x:-10.75,y:117.45,alpha:0.0557},0).wait(1).to({regX:-0.1,regY:0,scaleX:0.3238,scaleY:0.3238,x:-6.75,y:121.5,alpha:0.0313},0).wait(1).to({regX:0,regY:0.1,scaleX:0.3119,scaleY:0.3119,x:-2.2,y:122.35,alpha:0.0106},0).wait(1).to({regY:0,scaleX:0.3057,scaleY:0.3057,x:0,y:122.75,alpha:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.7,-25.3,58.7,155.9);


(lib.Effect_2 = function(mode,startPosition,loop,reversed) {
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
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21));

	// Layer_1
	this.Color_0 = new lib.EffectColor();
	this.Color_0.name = "Color_0";
	this.Color_0.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.Color_0).wait(1).to({scaleX:1.1552,scaleY:1.1552,alpha:1},0).wait(1).to({regY:0.1,scaleX:1.1494,scaleY:1.1494,y:0.95},0).wait(1).to({scaleX:1.1366,scaleY:1.1366,y:2.9},0).wait(1).to({scaleX:1.1161,scaleY:1.1161,y:6},0).wait(1).to({scaleX:1.0869,scaleY:1.0869,y:10.45},0).wait(1).to({scaleX:1.0483,scaleY:1.0483,y:16.35},0).wait(1).to({regY:0,scaleX:1,scaleY:1,y:23.6},0).wait(1).to({regY:0.1,scaleX:0.9434,scaleY:0.9434,y:32.95,alpha:0.9024},0).wait(1).to({scaleX:0.8792,scaleY:0.8792,y:43.45,alpha:0.7917},0).wait(1).to({scaleX:0.8104,scaleY:0.8104,y:54.7,alpha:0.673},0).wait(1).to({scaleX:0.7408,scaleY:0.7408,y:66.05,alpha:0.5529},0).wait(1).to({scaleX:0.6743,scaleY:0.6743,y:76.9,alpha:0.4383},0).wait(1).to({scaleX:0.6141,scaleY:0.6141,y:86.8,alpha:0.3344},0).wait(1).to({scaleX:0.562,scaleY:0.562,y:95.3,alpha:0.2445},0).wait(1).to({scaleX:0.5187,scaleY:0.5187,y:102.4,alpha:0.1699},0).wait(1).to({scaleX:0.4842,scaleY:0.4842,y:108.05,alpha:0.1103},0).wait(1).to({scaleX:0.4578,scaleY:0.4578,y:112.35,alpha:0.0648},0).wait(1).to({scaleX:0.4388,scaleY:0.4388,y:115.45,alpha:0.0321},0).wait(1).to({scaleX:0.4266,scaleY:0.4266,y:117.45,alpha:0.0109},0).wait(1).to({regY:0,scaleX:0.4202,scaleY:0.4202,y:118.5,alpha:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.5,-29.3,58.9,158.60000000000002);


(lib.Effect = function(mode,startPosition,loop,reversed) {
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
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21));

	// Layer_1_copy
	this.Color_0 = new lib.EffectColor();
	this.Color_0.name = "Color_0";
	this.Color_0.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.Color_0).wait(1).to({alpha:1},0).wait(1).to({regY:0.1,x:0.8,y:1.35,alpha:0.9924},0).wait(1).to({x:2.55,y:4.15,alpha:0.9756},0).wait(1).to({x:5.4,y:8.7,alpha:0.9486},0).wait(1).to({regY:0,x:9.45,y:15.05,alpha:0.9102},0).wait(1).to({regY:0.1,scaleX:0.9675,scaleY:0.9675,x:13.05,y:23.95,alpha:0.8584},0).wait(1).to({scaleX:0.9267,scaleY:0.9267,x:17.6,y:35,alpha:0.7937},0).wait(1).to({scaleX:0.8781,scaleY:0.8781,x:23.05,y:48.15,alpha:0.7165},0).wait(1).to({regY:0,scaleX:0.823,scaleY:0.823,x:29.2,y:62.95,alpha:0.6289},0).wait(1).to({regY:0.1,scaleX:0.7639,scaleY:0.7639,x:32.4,y:79,alpha:0.5358},0).wait(1).to({scaleX:0.7041,scaleY:0.7041,x:35.7,y:95.15,alpha:0.4415},0).wait(1).to({regY:0,scaleX:0.6469,scaleY:0.6469,x:38.9,y:110.6,alpha:0.3516},0).wait(1).to({regY:0.1,scaleX:0.6007,scaleY:0.6007,x:40.1,y:124.65,alpha:0.2682},0).wait(1).to({scaleX:0.5606,scaleY:0.5606,x:41.15,y:136.75,alpha:0.1962},0).wait(1).to({scaleX:0.5274,scaleY:0.5274,x:42.05,y:146.8,alpha:0.1363},0).wait(1).to({scaleX:0.5008,scaleY:0.5008,x:42.75,y:154.85,alpha:0.0885},0).wait(1).to({scaleX:0.4805,scaleY:0.4805,x:43.25,y:161,alpha:0.052},0).wait(1).to({scaleX:0.466,scaleY:0.466,x:43.65,y:165.4,alpha:0.0257},0).wait(1).to({scaleX:0.4565,scaleY:0.4565,x:43.9,y:168.25,alpha:0.0088},0).wait(1).to({regY:0,scaleX:0.4517,scaleY:0.4517,x:44.05,y:169.7,alpha:0},0).wait(1));

	// Layer_1
	this.Color_1 = new lib.EffectColor();
	this.Color_1.name = "Color_1";
	this.Color_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.Color_1).wait(1).to({x:-8,alpha:1},0).wait(1).to({regY:0.1,scaleX:0.9957,scaleY:0.9957,x:-8.55,y:1,alpha:0.9925},0).wait(1).to({scaleX:0.9861,scaleY:0.9861,x:-9.85,y:3,alpha:0.9759},0).wait(1).to({regY:0,scaleX:0.9707,scaleY:0.9707,x:-11.95,y:6.15,alpha:0.9492},0).wait(1).to({regY:0.1,scaleX:0.9489,scaleY:0.9489,x:-13.75,y:10.85,alpha:0.9125},0).wait(1).to({scaleX:0.9199,scaleY:0.9199,x:-16.15,y:16.95,alpha:0.8639},0).wait(1).to({scaleX:0.8837,scaleY:0.8837,x:-19.15,y:24.6,alpha:0.803},0).wait(1).to({regY:0,scaleX:0.8405,scaleY:0.8405,x:-22.75,y:33.65,alpha:0.7305},0).wait(1).to({regY:0.1,scaleX:0.7879,scaleY:0.7879,x:-25.5,y:44.8,alpha:0.6414},0).wait(1).to({scaleX:0.7316,scaleY:0.7316,x:-28.5,y:56.65,alpha:0.5458},0).wait(1).to({scaleX:0.6746,scaleY:0.6746,x:-31.5,y:68.7,alpha:0.4491},0).wait(1).to({scaleX:0.6202,scaleY:0.6202,x:-34.4,y:80.2,alpha:0.3567},0).wait(1).to({scaleX:0.5709,scaleY:0.5709,x:-37,y:90.6,alpha:0.2731},0).wait(1).to({scaleX:0.5283,scaleY:0.5283,x:-39.25,y:99.6,alpha:0.2007},0).wait(1).to({regX:-0.1,scaleX:0.4928,scaleY:0.4928,x:-41.15,y:107.05,alpha:0.1406},0).wait(1).to({regX:0,scaleX:0.4646,scaleY:0.4646,x:-42.2,y:113,alpha:0.0913},0).wait(1).to({scaleX:0.443,scaleY:0.443,x:-43.05,y:117.5,alpha:0.0536},0).wait(1).to({scaleX:0.4275,scaleY:0.4275,x:-43.7,y:120.8,alpha:0.0266},0).wait(1).to({scaleX:0.4174,scaleY:0.4174,x:-44.1,y:122.9,alpha:0.009},0).wait(1).to({regY:0,scaleX:0.4122,scaleY:0.4122,x:-44.35,y:124,alpha:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.9,-25.3,110.4,206.60000000000002);


(lib.btn_comp = function(mode,startPosition,loop,reversed) {
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
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(47));

	// Layer_1
	this.instance = new lib.btn_ccomplete();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btn_ccomplete(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:81.5,regY:81.5,x:81.5,y:81.5},0).wait(1).to({scaleX:1.0008,scaleY:1.0008},0).wait(1).to({scaleX:1.0027,scaleY:1.0027},0).wait(1).to({scaleX:1.0056,scaleY:1.0056},0).wait(1).to({scaleX:1.0098,scaleY:1.0098,x:81.55,y:81.55},0).wait(1).to({scaleX:1.0153,scaleY:1.0153},0).wait(1).to({scaleX:1.0221,scaleY:1.0222},0).wait(1).to({scaleX:1.0304,scaleY:1.0304,x:81.5},0).wait(1).to({scaleX:1.0398,scaleY:1.0398,x:81.55},0).wait(1).to({scaleX:1.0499,scaleY:1.05,x:81.45,y:81.45},0).wait(1).to({scaleX:1.0402,scaleY:1.0402,y:81.5},0).wait(1).to({scaleX:1.0309,scaleY:1.0309,y:81.45},0).wait(1).to({scaleX:1.0226,scaleY:1.0226,x:81.5,y:81.5},0).wait(1).to({scaleX:1.0156,scaleY:1.0156,x:81.45,y:81.45},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.0058,scaleY:1.0058},0).wait(1).to({scaleX:1.0028,scaleY:1.0028,x:81.5,y:81.5},0).wait(1).to({scaleX:1.0009,scaleY:1.0009,x:81.45,y:81.45},0).wait(1).to({scaleX:0.9999,scaleY:1,x:81.5,y:81.5},0).wait(1).to({scaleX:1.0008,scaleY:1.0009},0).wait(1).to({scaleX:1.0027,scaleY:1.0028,y:81.55},0).wait(1).to({scaleX:1.0056,scaleY:1.0057,y:81.5},0).wait(1).to({scaleX:1.0097,scaleY:1.0098,x:81.55,y:81.55},0).wait(1).to({scaleX:1.0151,scaleY:1.0151},0).wait(1).to({scaleX:1.0218,scaleY:1.0218,x:81.5},0).wait(1).to({scaleX:1.0298,scaleY:1.0299,x:81.55},0).wait(1).to({scaleX:1.0392,scaleY:1.0393},0).wait(1).to({scaleX:1.0499,scaleY:1.05,x:81.45,y:81.45},0).wait(1).to({scaleX:1.0402,scaleY:1.0402,x:81.5,y:81.5},0).wait(1).to({scaleX:1.0309,scaleY:1.0309,x:81.45,y:81.45},0).wait(1).to({scaleX:1.0226,scaleY:1.0226,x:81.5,y:81.5},0).wait(1).to({scaleX:1.0156,scaleY:1.0156,x:81.45,y:81.45},0).wait(1).to({scaleX:1.0101,scaleY:1.0101},0).wait(1).to({scaleX:1.0058,scaleY:1.0058,x:81.5,y:81.5},0).wait(1).to({scaleX:1.0028,scaleY:1.0028},0).wait(1).to({scaleX:1.0009,scaleY:1.0009},0).wait(1).to({scaleX:1,scaleY:1},0).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.1,-4.1,171.2,171.2);


(lib.bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Image
	this.Image_0 = new lib.Image_0_1();
	this.Image_0.name = "Image_0";
	this.Image_0.setTransform(35.75,17.7,1,1,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.Image_0).wait(1));

	// Image_2
	this.Image_2 = new lib.Image_2_1();
	this.Image_2.name = "Image_2";
	this.Image_2.setTransform(1268.35,0);

	this.timeline.addTween(cjs.Tween.get(this.Image_2).wait(1));

	// Image_1
	this.Image_1 = new lib.Image_1_1();
	this.Image_1.name = "Image_1";
	this.Image_1.setTransform(700.4,17.6);

	this.timeline.addTween(cjs.Tween.get(this.Image_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(35.7,0,1714.7,520.6), null);


(lib.color = function(mode,startPosition,loop,reversed) {
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
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(47));

	// Layer_3
	this.Cover = new lib.ColorCoverImage();
	this.Cover.name = "Cover";

	this.timeline.addTween(cjs.Tween.get(this.Cover).wait(1).to({scaleX:1.05,scaleY:1.05},9).to({scaleX:1,scaleY:1},9).to({scaleX:1.05,scaleY:1.05},9).to({scaleX:1,scaleY:1},9).wait(10));

	// Layer_1
	this.btn = new lib.color_Image();
	this.btn.name = "btn";
	this.btn.setTransform(0,8.5);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1).to({scaleX:1.05,scaleY:1.05},9).to({scaleX:1,scaleY:1},9).to({scaleX:1.05,scaleY:1.05},9).to({scaleX:1,scaleY:1},9).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.4,-95.9,208.9,208.9);


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

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_31 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(31).call(this.frame_31).wait(1));

	// Layer_4
	this.color_2 = new lib.color();
	this.color_2.name = "color_2";
	this.color_2.setTransform(808.25,126.5);

	this.color_1 = new lib.color();
	this.color_1.name = "color_1";
	this.color_1.setTransform(619.55,127.1);

	this.color_0 = new lib.color();
	this.color_0.name = "color_0";
	this.color_0.setTransform(430.05,126.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.color_0},{t:this.color_1},{t:this.color_2}]}).wait(32));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EEEFF3").s().p("EhgEADbIAAm1MDAJAAAIAAG1g");
	this.shape.setTransform(619.8257,251.3658,0.5447,1.001);

	this.instance = new lib.pallete();
	this.instance.setTransform(274.95,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(32));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(275,6,699,267.3);


(lib.canvas = function(mode,startPosition,loop,reversed) {
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
		var isDrawable = true;
		
		var canvasOffsetY = 0;
		var canvasOffsetX = 0;
		var canvasRect;
		var btnComplete = root.btn_complete;
		 
		var canvasBoard;
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
		var BitmapLayers;
		var imageLayers;
		
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
		        initializeBitmapLayer(drawImage);
		        drawImage.on("mousedown", (e) => drawImageHandleMouseDown(drawImage, e));
		    });
		
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
		
		    drawImage.BitmapData = new createjs.BitmapData(null, bound.width, bound.height, clearColor);
		    drawImage.Board = new createjs.Bitmap(drawImage.BitmapData.canvas);
		
		    drawImage.BitmapLayer.addChild(drawImage.Board);
		    drawImage.BitmapLayer.mouseChildren = false;
		    drawImage.BitmapLayer.mouseEnabled = false;
		    drawImage.BitmapLayer.cache(0, 0, bound.width, bound.height);
		    drawImage.BitmapData.clearRect(0, 0, bound.width, bound.height);
		
		    drawImage.Image.cache(0, 0, bound.width, bound.height);
		
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
		
		    root.btn_complete.visible = true;
		}
		
		function cacheAndClearBitmapLayers() {
		    Images.forEach((drawImage) => {
		        const bound = drawImage.getBounds();
		        
		        drawImage.BitmapLayer.updateCache();
		        drawImage.BitmapData.clearRect(0, 0, bound.width, bound.height);
		    });
		}
		
		function Initpalette() {
		
		    // 기존 bitmap에서 심볼로 변경 예정
		    var bmpBrush = new lib["brush"];
		
		    bmpBrush.cache(0, 0, 32, 32);
		    var _source = createjs.BitmapData.getBitmapData(bmpBrush);
		
		    brushColorBitmaps = GetBrushColorBitmaps(_source, paletteColors);
		    brushConfig.brush = brushColorBitmaps[0];
		    palette.color_0.Cover.visible = true;
		
		    console.log("palette : " + palette.y);
		
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
		
		    if (!isDrawable)
		        return;
		
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
		
		    mcCanvas.BitmapLayer.updateCache();
		}
		
		function GetPositionX(e) {
		    return e.stageX / stage.scaleX - canvasOffsetX - drawImages.x;
		}
		
		function GetPositionY(e) {
		    return e.stageY / stage.scaleY - canvasOffsetY - drawImages.y;
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
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// draw_effect
	this.Effect_3 = new lib.Effect_4();
	this.Effect_3.name = "Effect_3";
	this.Effect_3.setTransform(428.65,-124.45);

	this.Effect_2 = new lib.Effect_3();
	this.Effect_2.name = "Effect_2";
	this.Effect_2.setTransform(599.75,-148);

	this.Effect_1 = new lib.Effect_2();
	this.Effect_1.name = "Effect_1";
	this.Effect_1.setTransform(984.55,-25.4);

	this.Effect_0 = new lib.Effect();
	this.Effect_0.name = "Effect_0";
	this.Effect_0.setTransform(1331,-77.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Effect_0},{t:this.Effect_1},{t:this.Effect_2},{t:this.Effect_3}]}).wait(1));

	// mc_pallet
	this.palette = new lib.palette();
	this.palette.name = "palette";
	this.palette.setTransform(376.2,964);

	this.timeline.addTween(cjs.Tween.get(this.palette).wait(1));

	// btn_complete
	this.btn_complete = new lib.btn_comp();
	this.btn_complete.name = "btn_complete";
	this.btn_complete.setTransform(1759.5,1004);

	this.timeline.addTween(cjs.Tween.get(this.btn_complete).wait(1));

	// bg
	this.drawImages = new lib.bg();
	this.drawImages.name = "drawImages";
	this.drawImages.setTransform(102.75,203.1);

	this.timeline.addTween(cjs.Tween.get(this.drawImages).wait(1));

	// 레이어_3
	this.instance = new lib.bgbgb();
	this.instance.setTransform(999.85,650.4,1,1,0,0,0,1000,650.5);
	var instanceFilter_1 = new cjs.ColorFilter(0.78125,0.828125,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-2,-2,2004,1305);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.canvas, new cjs.Rectangle(-0.1,-173.3,2000,1474.2), null);


// stage content:
(lib.Draw_Module = function(mode,startPosition,loop,reversed) {
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

	// Draw
	this.canvas = new lib.canvas();
	this.canvas.name = "canvas";

	this.timeline.addTween(cjs.Tween.get(this.canvas).wait(1));
	this.canvas.addEventListener("tick", AdobeAn.handleFilterCache);

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(999.9,426.7,1000.0000000000001,874.3);
// library properties:
lib.properties = {
	id: 'FBD3D8ADDC0B6B47818C31F2C7857D3B',
	width: 2000,
	height: 1200,
	fps: 30,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [
		{src:"images/Draw_Module_atlas_1.png?1740634800484", id:"Draw_Module_atlas_1"}
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
an.compositions['FBD3D8ADDC0B6B47818C31F2C7857D3B'] = {
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