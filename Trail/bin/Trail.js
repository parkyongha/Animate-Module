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


(lib.followObject = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("rgba(51,153,51,0)").ss(1,1,1).p("AK8AAQAAEijNDNQjMDNkjAAQkhAAjNjNQjNjNAAkiQAAkiDNjNQDNjMEhAAQEjAADMDMQDNDNAAEig");
	this.shape.setTransform(0,0,0.6139,0.614);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC9933").s().p("AnuHuQjNjMAAkiQAAkhDNjOQDNjMEhAAQEjAADMDMQDNDOAAEhQAAEijNDMQjMDOkjAAQkhAAjNjOg");
	this.shape_1.setTransform(0,0,0.6139,0.614);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.followObject, new cjs.Rectangle(-44,-44,88,88), null);


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
	this.shape.graphics.f("#D2D2D2").s().p("Ehj/A+gMAAAh8/MDH/AAAMAAAB8/g");
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
		
		/** @type {createjs.MovieClip[]} */
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
		
		            followObject.Tween({
		                x: point.x,
		                y: point.y,
		            }, 300, createjs.Ease.quartOut).call(() => {
		                let idx = points.indexOf(point);
		
		                if (idx == -1)
		                    idx = points.length - 1;
		
		                followObject.followIdx = idx;
		                followObject.isTweening = false;
		            });
		
		
		        }, null, true);
		    });
		}
		
		function getFollowObjectPointIndex(index) {
		    // 앞에 있는 오브젝트와 비교해서 followObjectDistance보다 떨어져있는 pos를 선택해서 반환
		    // 마지막 오브젝트의 index는 tail로 저장해놓고 tail보다 많은 만큼만 points에서 제거
		
		
		    // index가 0이면 points의 top이랑 비교
		    // 0이 아니면 trailFollowObject[index - 1] 해서 앞에 있는 오브젝트의 위치를 가져온 후
		    // points에서 followObjectDistance보다 떨어져있는 pos를 선택해서 index로 반환
		    // 끄읏?
		    const prevPosIdx =  (index == 0) ? points.length - 1 : trailFollowObjects[index - 1].followIdx;
		
		    const prevPos = points[prevPosIdx];
		
		
		    if (index == 1)
		        console.log(`prevPosIdx: ${prevPosIdx}`);
		
		    if (prevPosIdx == -1) {
		        return -1;
		    }
		
		    let idx = prevPosIdx;
		
		    const objectDistance = (index == 0) ? followObjectStartDistance : followObjectDistance;
		
		    while (idx > 0) {
		
		        if (getPointDistance(prevPos, points[idx]) > objectDistance) {
		            break;
		        }
		
		        idx--;
		    }
		
		    if (idx <= trailFollowObjects[index].followIdx) idx = -1;
		
		    console.log(`idx: ${idx}`);
		
		    return idx;
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
		
		function updateFollowObjectsPos() {
		    for (let i = 0; i < trailFollowObjects.length; i++) {
		        let idx = getFollowObjectPointIndex(i);
		
		        if (idx == -1)
		            continue;
		
		        const followObject = trailFollowObjects[i];
		
		        if (followObject.isFollowing) {
		
		            followObject.followIdx = idx;
		
		            followObject.x = points[idx].x;
		            followObject.y = points[idx].y;
		
		        } else if (followObject.isTweening == false) {
		            followObject.x = points[followObject.followIdx].x;
		            followObject.y = points[followObject.followIdx].y;
		
		            followObject.followIdx--;
		
		            if (followObject.followIdx < idx || followObject.followIdx == idx) {
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
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// followObjects
	this.followObject_2 = new lib.followObject();
	this.followObject_2.name = "followObject_2";
	this.followObject_2.setTransform(972.35,260.3);
	var followObject_2Filter_1 = new cjs.ColorFilter(0.33,0.33,0.33,1,121.94,96.48,114.57,0);
	this.followObject_2.filters = [followObject_2Filter_1];
	this.followObject_2.cache(-46,-46,92,92);

	this.followObject_3 = new lib.followObject();
	this.followObject_3.name = "followObject_3";
	this.followObject_3.setTransform(325.5,582.35);
	var followObject_3Filter_2 = new cjs.ColorFilter(0.33,0.33,0.33,1,18.09,28.81,114.57,0);
	this.followObject_3.filters = [followObject_3Filter_2];
	this.followObject_3.cache(-46,-46,92,92);

	this.followObject_4 = new lib.followObject();
	this.followObject_4.name = "followObject_4";
	this.followObject_4.setTransform(837.95,632.4);
	var followObject_4Filter_3 = new cjs.ColorFilter(0.33,0.33,0.33,1,49.58,96.48,114.57,0);
	this.followObject_4.filters = [followObject_4Filter_3];
	this.followObject_4.cache(-46,-46,92,92);

	this.followObject_0 = new lib.followObject();
	this.followObject_0.name = "followObject_0";
	this.followObject_0.setTransform(629.75,150.75);
	var followObject_0Filter_4 = new cjs.ColorFilter(0.17,0.17,0.17,1,211.65,57.27,52.29,0);
	this.followObject_0.filters = [followObject_0Filter_4];
	this.followObject_0.cache(-46,-46,92,92);

	this.followObject_1 = new lib.followObject();
	this.followObject_1.name = "followObject_1";
	this.followObject_1.setTransform(234.5,333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.followObject_1},{t:this.followObject_0},{t:this.followObject_4},{t:this.followObject_3},{t:this.followObject_2}]}).wait(1));
	this.timeline.addTween(cjs.Tween.get(followObject_2Filter_1).wait(1));
	this.timeline.addTween(cjs.Tween.get(followObject_3Filter_2).wait(1));
	this.timeline.addTween(cjs.Tween.get(followObject_4Filter_3).wait(1));
	this.timeline.addTween(cjs.Tween.get(followObject_0Filter_4).wait(1));

	// bg
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
	fps: 30,
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