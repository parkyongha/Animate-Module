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
import { InputManager } from './inputManager.js'
import { Label3D } from './Label3D.js';
import { LineStyle } from './LineStyle.js';

const WindowWidth = 1920;
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


/** @type {GLTFLoader} */
const loader = new GLTFLoader();

let CrntModel = null;
const clock = new THREE.Clock();
anim_container.insertBefore(container, anim_container.firstChild);

// renderer
const renderer = new THREE.WebGLRenderer({ canvas: container, antialias: true, alpha: true });
renderer.setPixelRatio(1);
renderer.setSize(WindowWidth, WindowHeight, false);

//container.appendChild(renderer.domElement);
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1b2c36);

// camera
const camera = new THREE.PerspectiveCamera(50, WindowWidth / WindowHeight, 1, 1000);
camera.position.set(0, 10, 4);

// orbit controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

controls.target.set(0, 0, -10);
controls.update();

// ray
const raycaster = new THREE.Raycaster();

// light
const ambientLight = new THREE.AmbientLight(0xfff33f, 5); // 색상, 강도
scene.add(ambientLight);

const textureLoader = new THREE.TextureLoader();
const inputManager = new InputManager(camera, scene);
let skySphereBox;
let buttonArray = []

var CrntModelIndex = 0;

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

window.GetInputManager = function () {
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

let uniforms = null;
let isChange = false;

window.OnSkyBox = async function (texturePath) {
	const skyGeometry = new THREE.BoxGeometry(1000, 1000, 1000);

	const skyMaterialArray = [];

	const textureOrder = ['left', 'right', 'top', 'bottom', 'front', 'back'];

	for (var i = 0; i < 6; ++i) {

		/** @type {THREE.Texture} */
		const texture = await new Promise((resolve) => {
			textureLoader.load(`${texturePath}/${textureOrder[i]}.jpg`, (texture) => {
				texture.wrapS = THREE.RepeatWrapping;
				texture.wrapT = THREE.RepeatWrapping;
				texture.repeat.x = -1; // 좌우 반전

				texture.minFilter = THREE.LinearFilter;

				skyMaterialArray.push(
					new THREE.MeshBasicMaterial({
						map: texture,
						side: THREE.BackSide,
						depthWrite: false
					})
				);

				resolve(texture);
			});
		});

	}

	skySphereBox = new THREE.Mesh(skyGeometry, skyMaterialArray);
	scene.add(skySphereBox);

	// const loader = new THREE.CubeTextureLoader();
	// const texture = loader.load([
	// 	`${texturePath}/right.jpg`,  // +X
	// 	`${texturePath}/left.jpg`,   // -X
	// 	`${texturePath}/top.jpg`,    // +Y
	// 	`${texturePath}/bottom.jpg`, // -Y
	// 	`${texturePath}/front.jpg`,  // +Z
	// 	`${texturePath}/back.jpg`    // -Z
	// ]);

	// scene.background = texture;

	inputManager.setSkySphere(skySphereBox);
	skyRendering();
}

window.OnButton = function (textureUrl, position, onClickEvent = null, skyBoxTextureUrl = null, ClickTextureUrl = null) {
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
				onClick: onClickEvent != null ? () => onClickEvent() : () => changeSkyTexture(skyBoxTextureUrl),
				onHover: () => buttonMesh.scale.set(1.3, 1.3, 1),
				onHoverOut: () => buttonMesh.scale.set(1, 1, 1)
			})
		}

		scene.add(buttonMesh);
		buttonArray.push(buttonMesh);
	});
}

let labels = [];

window.OnGLTFLoad = function (path, pos, func) {
	
	loader.load(path, async function (gltf) {
		const model = gltf.scene;
		
		model.position.set(0, 0, -10);
		
		await renderer.compileAsync(model, camera, scene);
		
		scene.add(model);
		
		console.log("Model loaded:", path);
		
		func && func();
		
		
		renderer.render(scene, camera);
	});
	
	animate();
	setLabels();
}

function setLabels() {
	const lineStyle = new LineStyle();

	const dashedLineStyle = new LineStyle({
		color: 0xffd64f,
		dashed: true,
		dashSize: 0.2,
		gapSize: 0.1,
		lineWidth: 10
	});

	const liverLabel = new Label3D('입',
		new THREE.Vector3(0, 2, -10),
		new THREE.Vector3(4, 5, 0),
		lineStyle);

	scene.add(liverLabel.group);
	labels.push(liverLabel);

	const testLabel = new Label3D('식도',
		new THREE.Vector3(1, 1, -9),
		new THREE.Vector3(-4, 3, -2),
		dashedLineStyle);

	scene.add(testLabel.group);
	labels.push(testLabel);

	
}

window.HandleLabelDropEvent = function (text, callback) {

	const ndc = convertNDC(inputManager.mouse);

	raycaster.setFromCamera(ndc, camera);
	const intersects = raycaster.intersectObjects(labels.map(l => l.group), true);

	if (intersects.length > 0) {
		const hit = intersects[0].object;

		const hitLabel = labels.find(l => l.containsObject(hit));

		const correct = hitLabel.name === text; // 맞는 텍스트인지 비교

		if (correct) {
			console.log("정답:", hitLabel.name);
			hitLabel.showLabel();

			// Animate에 결과 전송
			callback(true);
		} else {
			callback(false);
		}
	}
}

function convertNDC(point) {
	const canvas = renderer.domElement;
	const rect = canvas.getBoundingClientRect();

	const x = point.x - rect.left;
	const y = point.y - rect.top;

	return new THREE.Vector2(
		(x / rect.width) * 2 - 1,
		-(y / rect.height) * 2 + 1
	);
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

function changeSkyTexture(skyBoxTextureUrl) {
	const vector = new THREE.Vector2(0, 0); // NDC 중심
	const raycaster = new THREE.Raycaster();
	raycaster.setFromCamera(vector, camera);
	const intersects = raycaster.intersectObject(skySphereBox);
	uniforms.center.value = intersects[0].uv;
	if (uniforms.texture2.value != null) {
		uniforms.feather.value = 0.05;
		isChange = true;
		return;
	}

	textureLoader.load(skyBoxTextureUrl, (texture) => {
		uniforms.texture2.value = texture;
		uniforms.feather.value = 0.05;
		isChange = true;
	})
}

function animateFade() {
	uniforms.progress.value += 0.015;
	uniforms.progress.value = Math.min(uniforms.progress.value, 1.0);

	if (uniforms.progress.value >= 1.0) {
		let tempTexture = uniforms.texture1.value;
		uniforms.texture1.value = uniforms.texture2.value;
		uniforms.texture2.value = tempTexture;
		uniforms.progress.value = 0.0;
		uniforms.feather.value = 0.0;
		isChange = false;
	}
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

	if (isChange)
		animateFade();

	controls.update();
	requestAnimationFrame(skyRendering);
}

function animate() {
	if (!isView) {
		renderer.render(scene, camera);
		return;
	}

	// if (!CrntModel || CrntLoader || CrntAbortController) {
	// 	return;
	// }
labels.forEach(l => l.update(camera));
	RenderScene();
	requestAnimationFrame(animate);
}
function RenderScene() {
	// const delta = clock.getDelta();
	// mixer.update(delta);
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

	// const dracoLoader = new DRACOLoader();
	// dracoLoader.setDecoderPath('draco/gltf/');
	// loader.setDRACOLoader(dracoLoader);



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