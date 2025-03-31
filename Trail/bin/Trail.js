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
		let root = this;
		
		root.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ehj/A+gMAAAh8/MDH/AAAMAAAB8/g");
	this.shape.setTransform(640,400);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.canvas, new cjs.Rectangle(0,0,1280,800), null);


// stage content:
(lib.Trail = function(mode,startPosition,loop,reversed) {
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
		    points.push({ x: event.stageX, y: event.stageY });
		
		    // drawStrokeOnTick();
		}
		
		let hue = 0;
		
		/** @param {createjs.MouseEvent} event */
		function updateTrail(event) {
		    hue = (hue + 1) % 360;
		
		    points.push({
		        x: event.stageX,
		        y: event.stageY,
		        color: hsvToRgb(hue, 1, 1)
		    });
		
		    if (points.length > 40) {
		        points.shift();
		    }
		
		
		    graphics.clear();
		
		    for (let i = 1; i < points.length; i++) {
		        var rgb = points[i].color;
		
		        graphics
		            .setStrokeStyle(10, 0, 0)
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
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_2
	this.instance = new lib.canvas();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(640,400,640,400);
// library properties:
lib.properties = {
	id: '784D03A6AFC86B4EB7641285A1D4A60B',
	width: 1280,
	height: 800,
	fps: 60,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [],
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
an.compositions['784D03A6AFC86B4EB7641285A1D4A60B'] = {
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