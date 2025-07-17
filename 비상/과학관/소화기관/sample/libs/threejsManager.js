/**
 * Three.js를 사용한 3D 모델 뷰어 매니저
 * 3D 모델 로딩, 렌더링, 애니메이션 제어를 담당하는 클래스
 */

import * as THREE from 'three';
import { OrbitControls } from 'three/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/jsm/environments/RoomEnvironment.js';
import { GLTFLoader } from 'three/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/jsm/loaders/DRACOLoader.js';
import { MeshoptDecoder } from 'three/jsm/libs/meshopt_decoder.module.js';

///*** register handlers include onClick(), onHover(), onHoverOut() ***/
class InputManager {
	constructor(camera, scene, renderer) {
		if (InputManager.instance) {
			return InputManager.instance;
		}

		this.camera = camera;
		this.scene = scene;
		this.renderer = renderer;
		this.raycaster = new THREE.Raycaster();
		this.mouse = new THREE.Vector2();
		this.objects = [];
		this.handlers = new Map();

		this.lastHoverObj = null;
		this.isDragging = false;
		this.preX = 0;
		this.preY = 0;

		InputManager.instance = this;

		renderer.domElement.addEventListener("mousedown", this.handleMouseDown.bind(this));
		renderer.domElement.addEventListener("mouseup", this.handleMouseUp.bind(this));
		renderer.domElement.addEventListener("mousemove", this.handleMouveMove.bind(this));
	}

	register(object, handlers) {
		if (this.handlers.has(object)) {
			console.log("button is Already Regist");
			return;
		}

		this.objects.push(object);
		this.handlers.set(object, handlers);

	}

	unregister(object) {
		if (!this.handlers.has(object)) {
			console.log("button is Already UnRegist");
			return;
		}

		this.objects = this.objects.filter(o => o !== object);
		this.handlers.delete(object);
	}

	unregisterAll() {
		this.handlers.clear();
		this.objects = [];
	}

	updateMousePos(event) {
		const rect = this.renderer.domElement.getBoundingClientRect();
		this.mouse.x = ((event.clientX - rect.left) / rect.innerWidth) * 2 - 1;
		this.mouse.y = -((event.clientY - rect.top) / rect.innerHeight) * 2 + 1;
	}

	handleMouseDown(event) {
		console.log("handlerDown");
		this.updateMousePos(event);
		this.raycaster.setFromCamera(this.mouse, this.camera);
		const intersects = this.raycaster.intersectObjects(this.objects, true);
		if (intersects.length > 0) {
			const obj = intersects[0].object;
			const handler = this.handlers.get(obj);
			handler?.onClick?.();
			event.stopPropagation();
		}
		else {
			this.isDragging = true;
			this.preX = event.clientX;
			this.preY = event.clientY;
		}
	}

	handleMouseUp(event) {
		this.isDragging = false;
	}

	handleMouveMove(event) {
		console.log("handlerMove");
		this.updateMousePos(event);
		this.raycaster.setFromCamera(this.mouse, this.camera);
		const intersects = this.raycaster.intersectObjects(this.objects, true);
		const hoverObj = intersects.length > 0 ? intersects[0].object : null;

		if (hoverObj !== this.lastHoverObj) {
			if (this.lastHoverObj) {
				const prevHandler = this.handlers.get(this.lastHoverObj);
				prevHandler?.onHoverOut?.();
			}
			if (hoverObj) {
				const handler = this.handlers.get(hoverObj);
				handler?.onHover?.();
			}
			this.lastHoverObj = hoverObj
		}


	}
}

const WindowWdith = 1920;
const WindowHeight = 1080;
let mixer;
let isView = true;
let CrntLoader = null;
let CrntAbortController = null;
let OnAnimFunc = null;
let CrntLoadID = null;
const container = document.getElementById('webgl-container');
var canvas = document.getElementById('canvas');
var controlDom = document.getElementById("dom_overlay_container");
var anim_container = document.getElementById("animation_container");

let CrntModel = null;
const clock = new THREE.Clock();
anim_container.insertBefore(container, anim_container.firstChild);
const renderer = new THREE.WebGLRenderer({ canvas: container, antialias: true, alpha: true });
renderer.setPixelRatio(1);
renderer.setSize(WindowWdith, WindowHeight, false);
//container.appendChild(renderer.domElement);
const scene = new THREE.Scene();
scene.background = null;
const camera = new THREE.PerspectiveCamera(60, WindowWdith / WindowHeight, 0.1, 1000);
const controls = new OrbitControls(camera, canvas);
controls.enableZoom = true;
controls.enablePan = false;
controls.enableDamping = true;
controls.mindistance = 0.1;
controls.maxdistance = 0.2;
camera.position.set(0, 0, 1);
controls.update();
const textureLoader = new THREE.TextureLoader();
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

const inputManager = new InputManager(camera, scene, renderer);
let buttonArray = []

var CrntModelIndex = 0;
/*
const geometry = new THREE.BoxGeometry( 5, 5, 5 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xff0000} ); 
const cube = new THREE.Mesh( geometry, material ); 
scene.add( cube );
const axes = new THREE.AxesHelper(5);
scene.add(axes);
*/
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);

scene.add(ambientLight);
scene.add(directionalLight);

const dayColor = new THREE.Color(0x888866);
const nightColor = new THREE.Color(0x111122);

const planeGeometry = new THREE.SphereGeometry(80, 80, 80);
const groundMaterial = new THREE.MeshStandardMaterial({ color: dayColor, side: THREE.DoubleSide });
const ground = new THREE.Mesh(planeGeometry, groundMaterial);
ground.position.set(0, -80, 0);
scene.add(ground);

var progressLight = 0;
var changeValue = 0.005;

window.SetCameraZoom = function (value) {
	camera.fov = value;
	camera.updateProjectionMatrix();
}
window.CaptureModel = function (func) {
	renderer.render(scene, camera);
	var image = new Image();
	image.onload = function () {
		var myBitmap = new createjs.Bitmap(image);
		func(myBitmap);
	};
	image.src = renderer.domElement.toDataURL();
}

window.GetInputManager = function() {
	return inputManager;
}

window.AbortLoad = function () {
	OnAnimFunc = null;
	if (!CrntLoader || !CrntAbortController) return;
	CrntAbortController.abort();
	CrntLoader = null;
	CrntAbortController = null;
	disposeCurrent(true);
	console.log("abort");
}

window.ControlEnable = function (value) {
	controls.enabled = value;
}

window.OnViewModel = function (dataElem, value, func, soundFunc) {
	isView = value;
	disposeCurrent(true);
	container.style.display = "none";
	if (isView) {
		if (!CrntModel || CrntModelIndex != 0) {
			CrntModelIndex = 0;
			StartLoad(dataElem, function () {
				container.style.display = "block";
				scene.add(CrntModel.scene);
				RenderScene();
				//requestAnimationFrame(animate);
				func();
			}, soundFunc);
		} else {
			container.style.display = "block";
			scene.add(CrntModel.scene);
			RenderScene();
			//requestAnimationFrame(animate);
			func();
		}
	} else {

		func();
	}
}

const skyVertexShader = `
varying vec3 vWorldPosition;

void main() {
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPosition.xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const skyFragmentShader = `
uniform float uProgress; // 낮 0 → 밤 1

varying vec3 vWorldPosition;

void main() {
    vec3 dayColor = vec3(0.6, 0.8, 1.0);   // 하늘색
    vec3 nightColor = vec3(0.02, 0.02, 0.1); // 밤색

    // 높이에 따라 밝기 조절 (Y값 기반)
    float h = normalize(vWorldPosition).y * 0.5 + 0.5;
    vec3 skyColorDay = mix(vec3(0.9, 0.5, 0.3), dayColor, h); // 낮
    vec3 skyColorNight = mix(vec3(0.1, 0.05, 0.2), nightColor, h); // 밤

    vec3 color = mix(skyColorDay, skyColorNight, uProgress);

    gl_FragColor = vec4(color, 1.0);
}
`;
var uniforms = null;
var sun = null
window.OnSkyBox = function (textureURL) {
	textureLoader.load("images/TestGround.jpg", (texture) => {
		groundMaterial.map = texture;
	})

	const sunGeomety = new THREE.SphereGeometry(10, 10, 10);
	const sunMaterial = new THREE.MeshBasicMaterial({
		color: 0xFFFFFF,
		side: THREE.FrontSide
	});
	sun = new THREE.Mesh(sunGeomety, sunMaterial);
	scene.add(sun);


	textureLoader.load(textureURL, (texture) => {
		const skyGeometry = new THREE.SphereGeometry(100, 60, 60);
		//const skyMaterial = new THREE.MeshBasicMaterial({
		//	map: texture,
		//	side: THREE.BackSide
		//})
		const skyMaterial = new THREE.ShaderMaterial({
			vertexShader: skyVertexShader,
			fragmentShader: skyFragmentShader,
			uniforms: {
				uProgress: { value: 0.0 }
			},
			side: THREE.BackSide
		});
		const sphereBox = new THREE.Mesh(skyGeometry, skyMaterial);

		uniforms = skyMaterial.uniforms;
		scene.add(sphereBox);
		skyRendering();
	})
}

window.OnButton = function (textureUrl, position, onClickEvent, ClickTextureUrl = null) {
	textureLoader.load(textureUrl, (texture) => {
		const buttonGeometry = new THREE.BoxGeometry(1, 1, 0.01);
		const buttonMaterial = new THREE.MeshBasicMaterial({
			map: texture,
			side: THREE.FrontSide
		});
		const buttonMesh = new THREE.Mesh(buttonGeometry, buttonMaterial);

		buttonMesh.position.set(position.x, position.y, position.z);
		if (ClickTextureUrl != null) {
			textureLoader.load(ClickTextureUrl, (ClickTexture) => {
				inputManager.register(buttonMesh, {
					onClick: () => { onClickEvent(); buttonMesh.material.map = ClickTexture; },
					onHover: () => buttonMesh.scale.set(1.3, 1.3, 1),
					onHoverOut: () => buttonMesh.scale.set(1, 1, 1)
				})
			});
		}
		else {
			inputManager.register(buttonMesh, {
				onClick: () => onClickEvent(),
				onHover: () => buttonMesh.scale.set(1.3, 1.3, 1),
				onHoverOut: () => buttonMesh.scale.set(1, 1, 1)
			})
		}

		scene.add(buttonMesh);
		buttonArray.push(buttonMesh);
	});
	
}

window.UnRegistAllButton = function () {
	inputManager.unregisterAll();
}

function resizeRendererToDisplaySize(renderer) {

	const canvas = renderer.domElement;
	const width = canvas.clientWidth;
	const height = canvas.clientHeight;
	const needResize = canvas.width !== width || canvas.height !== height;
	if (needResize) {

		renderer.setSize(width, height, false);

	}

	return needResize;

}

function disposeCurrent(isTex) {
	console.log("dispose");
	OnAnimFunc = null;
	if (!CrntModel) return;
	var allMesh = [];
	scene.traverse(function (o) {
		allMesh.push(o);
	});
	for (let i = 0; i < allMesh.length; i++) {
		var o = allMesh[i];
		o.removeFromParent();
		if (o.geometry) {
			o.geometry.dispose();
		}
		if (isTex) {
			if (o.material) {
				if (o.material.length) {
					for (let i = 0; i < o.material.length; ++i) {
						o.material[i].dispose();
					}
				}
				else {
					o.material.dispose();
				}
				if (o.material.map && o.material.map.isTexture) {
					o.material.map.dispose();
				}
			}
		}
	}
	CrntModel.scene.removeFromParent();
	CrntModel = null;
	if (isTex) {
		renderer.renderLists.dispose();
	}
	allMesh = null;
}

function skyRendering() {
	if (resizeRendererToDisplaySize(renderer)) {

		const canvas = renderer.domElement;
		camera.aspect = canvas.clientWidth / canvas.clientHeight;
		camera.updateProjectionMatrix();

	}

	for (let button of buttonArray) {
		button.lookAt(camera.position);
	}

	renderer.render(scene, camera);
	if (progressLight >= 1) {
		progressLight = 1;
		changeValue *= -1;
	}
	else if (progressLight <= 0) {
		progressLight = 0;
		changeValue *= -1;
	}

	progressLight += changeValue;
	

	updateGround(progressLight);
	updateLight(progressLight);
	controls.update();
	requestAnimationFrame(skyRendering);
}

function updateGround(progress) {
	groundMaterial.color.copy(dayColor).lerp(nightColor, progress);
}

function updateLight(progress) {
	ambientLight.intensity = 1 - 0.7 * progress;
	directionalLight.intensity = 1 - progress;
	directionalLight.color.setHSL(0.1, 1, 0.95 - 0.5 * progress);
	uniforms.uProgress.value = progress;
	sun.position.set(100 * Math.sin(progress),50 + -150 * Math.sin(progress), -30);
}

function animate() {
	if (!isView) {
		renderer.render(scene, camera);
		return;
	}
	if (!CrntModel || CrntLoader || CrntAbortController) {
		return;
	}
	RenderScene();
	requestAnimationFrame(animate);
}
function RenderScene() {
	const delta = clock.getDelta();
	mixer.update(delta);
	if (OnAnimFunc) OnAnimFunc();
	renderer.render(scene, camera);
	controls.update();
}
function animateFunc(idx) {
	var func = function () {
		if (!isView) {
			renderer.render(scene, camera);
			return;
		}
		if (!CrntModel || CrntLoader || CrntAbortController) {
			return;
		}
		const delta = clock.getDelta();
		mixer.update(delta);
		if (OnAnimFunc) OnAnimFunc();
		renderer.render(scene, camera);
		requestAnimationFrame(func);
	};
	func();
}
var tempIndex = 0;
function StartLoad(dataElem, func, soundFunc) {
	//window.AbortLoad();
	//isView = false;
	OnAnimFunc = null;
	controls.reset();
	const dracoLoader = new DRACOLoader();
	dracoLoader.setDecoderPath('draco/gltf/');
	const loader = new GLTFLoader();
	loader.setDRACOLoader(dracoLoader);
	camera.position.set(0, 0, dataElem.cam);
	const controller = new AbortController();
	loader.setAbortSignal(controller.signal);
	CrntLoader = loader;
	CrntAbortController = controller;
	const loadId = crypto.randomUUID();
	CrntLoadID = loadId;
	loader.load(dataElem.path, function (gltf) {
		CrntLoader = null;
		CrntAbortController = null;
		if (CrntLoadID != loadId) {
			CrntModel = null;
			console.log("fail id");
			return;
		}
		if (!isView) {
			console.log("fail page");
			disposeCurrent(true);
			renderer.render(scene, camera);
			return;
		}
		CrntModel = gltf;
		const model = CrntModel.scene;
		var modelPos = dataElem.pos;
		var mx = modelPos[0];
		var my = modelPos[1];
		var mz = modelPos[2];
		model.position.set(mx, my, mz);
		if (dataElem.polarAngle) {
			controls.setPolarAngle(dataElem.polarAngle);
		}
		if (dataElem.rot) {
			var rotElem = dataElem.rot;
			var rx = degrees_to_radians(rotElem[0]);
			var ry = degrees_to_radians(rotElem[1]);
			var rz = degrees_to_radians(rotElem[2]);
			model.rotation.set(rx, ry, rz);
		}

		scene.add(model);
		mixer = new THREE.AnimationMixer(model);
		var anim = CrntModel.animations[0];
		var animAction = null;
		if (anim) {
			animAction = mixer.clipAction(anim).play();
		}
		if (soundFunc) {
			if (animAction) {
				OnAnimFunc = function () {
					let animTime = animAction.time;
					soundFunc(animTime);
				}
			} else {
				OnAnimFunc = null;
				soundFunc(-1);
			}
		} else {
			OnAnimFunc = null;
		}
		controls.update();
		dracoLoader.dispose();
		animate();
		//animateFunc(++tempIndex);
		func();
	}, function (e) {
		//console.log(e);
	}, function (e) {
		CrntLoader = null;
		CrntAbortController = null;
	});
}


const clampNumber = (num, a, b) =>
	Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));

function degrees_to_radians(degrees) {
	// Store the value of pi.
	var pi = Math.PI;
	// Multiply degrees by pi divided by 180 to convert to radians.
	return degrees * (pi / 180);
}

/*
function LoadModelAudio(data, comp) {
	if (!data) return;
	var audioArr = {};
	var loaded = 0;
	for (var i = 0; i < data.length; ++i) {
		var elem = data[i].path;
		if (audioArr[elem] != null) {
			loaded++;
			continue;
		}
		var audioPath = "./audio/model/" + elem;
		var audioObj = preloadAudio(audioPath);
		audioArr[elem] = audioObj;
	}
	function preloadAudio(url) {
		var audio = new Audio();
		audio.addEventListener('canplaythrough', loadedAudio, false);
		audio.src = url;
		return audio;
	}

	function loadedAudio() {
		loaded++;
		if (loaded == data.length) {
			var audioDatas = [];
			for (var i = 0; i < data.length; ++i) {
				var elem = data[i];
				var path = elem.path;
				var time = elem.time;
				audioDatas.push({
					audio: audioArr[path],
					playtime: time
				});
			}
			comp(audioDatas);
		}
	}

}
		AudioManager = null;
		LoadModelAudio(dataElem.audio, function (audioDatas) {
			if (!animAction) return;
			var audioIndex = 0;
			let tempTime = 0;
			let crntAudio = null;
			AudioManager = function () {
				let animTime = animAction.time;
				if (audioIndex >= audioDatas.length) {
					if (animTime - tempTime < 0) {
						audioIndex = 0;
					}
					tempTime = animTime;
					return;
				}
				let audioTime = audioDatas[audioIndex].playtime;
				if (animTime >= audioTime) {
					var modelAudio = audioDatas[audioIndex].audio;
					if (crntAudio) {
						crntAudio.currentTime = 0;
						if (crntAudio != modelAudio) crntAudio.pause();
					}
					modelAudio.currentTime = 0;
					modelAudio.play();
					crntAudio = modelAudio;
					audioIndex++;
				}
				tempTime = animTime;
			}
			let allAudios = audioDatas;
			StopAllSfx = function () {
				Object.keys(allAudios).forEach(element => {
					allAudios[element].audio.pause();
				});
				allAudios = null;
			}
			SetVolumeSfx = function () {
				if (!allAudios) return;
				var volValue = 1;
				if (IsMuted) {
					volValue = 0;
				}
				Object.keys(allAudios).forEach(element => {
					allAudios[element].audio.volume = volValue;
				});
			}
			SetVolumeSfx();
		});
		*/