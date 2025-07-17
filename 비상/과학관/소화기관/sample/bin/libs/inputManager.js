import * as THREE from 'three';
import GUI from 'https://cdn.jsdelivr.net/npm/lil-gui@0.20/+esm';


class Scene {
	constructor(sceneKey, skytextureURL, buttonList = null) {
		this.sceneKey = sceneKey;
		this.skytextureURL = skytextureURL;
		this.buttonList = [];

		if (buttonList?.length > 0) {
			buttonList.forEach(button => {
				this.buttonList.push(button);
			});
		}
	}

	pushButton(button) {
		if (this.buttonList === null)
			this.buttonList = [];

		this.buttonList.push(button);
	}
}

class Button {
	constructor(position, textureURL, targetSceneKey) {
		this.position = position;
		this.textureURL = textureURL;
		this.targetSceneKey = targetSceneKey;
	}
}

// const gui = new GUI();
// gui.domElement.style.maxHeight = '400px';
// gui.domElement.style.overflow = 'auto';

let currentScene = new Scene(0, null, null);
let sceneMap = new Map();
let buttonMap = new Map();

let folderMap = new Map();
let buttonFolderMap = new Map();
let dumySphere = null;

const jsonUrl = "./Data.json";
const jsonData = null;

const loader = new THREE.TextureLoader();

function LoadJson() {
	fetch(jsonUrl)
		.then(response => {
			if (!response.ok) throw new Error('Network connect fail');
			return response.json();
		})
		.then(data => {
			data.forEach(scene => {
				var loadButtonList = [];
				if (scene.buttonList?.length > 0) {
					scene.buttonList.forEach(button => {
						const loadButton = new Button(button.position, button.textureURL, button.targetSceneKey)
						loadButtonList.push(loadButton);
					})
				}
				const loadScene = new Scene(scene.sceneKey, scene.skytextureURL, loadButtonList);
				sceneMap.set(loadScene.sceneKey, loadScene);
			});

			currentScene = sceneMap.get(0);
			for (var button in sceneMap.get(0).buttonList) {
				buttonMap.set(button.uuid, button);
			}
			InputManager.skySphere.material.uniforms.texture1.value = sceneMap.get(0).skytextureURL;
		})
		.catch(error => {
			console.log('Json Load Fail : ', error);
		})
}

function SaveJson() {
	if (sceneMap.length === 0) return;

	let sceneList = [];
	for (const [key, sceneInstance] of sceneMap) {
		sceneList.push(sceneInstance);
	}

	const dataStr = JSON.stringify(sceneList, null, 2);
	const blob = new Blob([dataStr], { type: 'application/json' });
	const url = URL.createObjectURL(blob);

	const a = document.createElement('a');
	a.href = url;
	a.download = "Data.json";
	document.body.appendChild(a);
	a.click();

	document.body.removeChild(a);
	URL.revokeObjectURL(url);
}

///*** register handlers include onClick(), onHover(), onHoverOut() ***/
export class InputManager {
	constructor(camera, scene) {
		if (InputManager.instance) {
			return InputManager.instance;
		}

		/// DEBUG-START ///
		this.smapleObjects = [];
		this.isPushAlt = false;
		this.skySphere = null;
		this.key = 0;
		/// DEBUG-END ////
		camera.rotation.order = 'YXZ';
		this.camera = camera;
		this.scene = scene;
		this.raycaster = new THREE.Raycaster();
		this.mouse = new THREE.Vector2();
		this.objects = [];
		this.handlers = new Map();
		
		this.lastHoverObj = null;
		this.isDragging = false;
		this.preX = 0;
		this.preY = 0;
		this.yaw = 0;
		this.pitch = 0;
		this.PITCH_LIMIT = Math.PI / 2 - 0.1;

		this.lastPinchDist = null;
		this.MIN_FOV = 30;
		this.MAX_FOV = 60;

		this.character = null;

		InputManager.instance = this;

		window.addEventListener("mousedown", this.handleMouseDown.bind(this));
		window.addEventListener("mouseup", this.handleMouseUp.bind(this));
		window.addEventListener("mousemove", this.handleMouveMove.bind(this));
		window.addEventListener("wheel", this.handleZoom.bind(this), { passive: false });

		window.addEventListener("keydown", this.onKeyDown.bind(this));
		window.addEventListener("keyup", this.onKeyUp.bind(this));

		window.addEventListener("touchstart", this.handleMouseDown.bind(this));
		window.addEventListener("touchend", this.handleMouseUp.bind(this));
		window.addEventListener("touchmove", this.handleMouveMove.bind(this), { passive: false });
		window.addEventListener("touchMove", this.handleTouchZoom.bind(this), { passive: false });

		// this.sceneController = gui.add(currentScene, 'sceneKey')
		// 	.name("CurrentScene")
		// 	.onFinishChange((value) => {
		// 		if (!sceneMap.has(value)) {
		// 			this.addScene(value);
		// 		}
		// 		else if (currentScene.sceneKey !== value) {
		// 			currentScene = sceneMap.get(value);
		// 		}

		// 		this.updateFolderStates();
		// 	});

		this.addScene(0);
	}

	addScene(sceneKey) {
		currentScene = new Scene(sceneKey, null, null);
		sceneMap.set(sceneKey, currentScene);
		// const folder = gui.addFolder("Scene_" + sceneKey);
		// folder.add({
		// 	changeSkyTexture: () => {
		// 		this.changeSkyTexture(this.skySphere);
		// 	}
		// }, 'changeSkyTexture').name('ChangeSkyTexture');

		// folder.onOpenClose((changedGUI) => {
		// 	if (!changedGUI._closed) {
		// 		if (currentScene.sceneKey !== sceneKey) {
		// 			currentScene = sceneMap.get(sceneKey);
		// 			if (currentScene.skytextureURL != null) {
		// 				loader.load(currentScene.skytextureURL, texture => {
		// 					this.skySphere.material.uniforms.texture1.value = texture;
		// 					this.skySphere.material.needsUpdate = true;
		// 				});
		// 			}
		// 		}
		// 		this.sceneController.setValue(sceneKey);
				
		// 		this.updateFolderStates();
		// 	}
		// });

		// folderMap.set(sceneKey, folder);
	}

	updateFolderStates() {
		for (const [key, folder] of folderMap) {
			if (key === currentScene.sceneKey) {
				if(folder._closed) folder.open();
			} else {
				folder.close();
			}
		}
	}

	setSkySphere(object) {
		this.skySphere = object;
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
		DeleteMesh(object);
	}

	unregisterAll() {
		this.handlers.clear();
		for (let object in objects) {
			DeleteMesh(object);
		}
		this.objects = [];
	}

	onKeyDown(event) {
		switch (event.key) {
			case 'Alt':
				this.isPushAlt = true;
				break;
			case 'Tab':
				SaveJson();
				break;
		}
	}

	onKeyUp(event) {
		switch (event.key) {
			case 'Alt':
				this.isPushAlt = false;
				break;
		}
	}

	changeNDC(point) {
		return new THREE.Vector2((point.x / window.innerWidth) * 2 - 1, -(point.y / window.innerHeight) * 2 + 1);
	}

	updateMousePos(event) {
		if (event.type === 'touchstart' || event.type === 'touchmove') {
			if (event.touches.length !== 1) return false;
			this.mouse.x = event.touches[0].clientX;
			this.mouse.y = event.touches[0].clientY;
		} else {
			this.mouse.x = event.clientX;
			this.mouse.y = event.clientY;
		}
		return true;
	}

	handleMouseDown(event) {
		if (!this.updateMousePos(event)) return;

		this.raycaster.setFromCamera(this.changeNDC(this.mouse), this.camera);

		//// DEBUG_START ////
		const intersectObjs = this.raycaster.intersectObjects(this.smapleObjects);
		if (intersectObjs.length > 0) {
			if (event.ctrlKey) {

				buttonFolderMap.get(intersectObjs[0].object.uuid).destroy();
				buttonMap.delete(intersectObjs[0].object.uuid);
				buttonFolderMap.delete(intersectObjs[0].object.uuid);
				this.smapleObjects = this.smapleObjects.filter(item => item.uuid !== intersectObjs[0].object.uuid);

				this.DeleteMesh(intersectObjs[0].object);
			}
		}
		else if (this.isPushAlt) {
			if (dumySphere == null)
				dumySphere = new THREE.Sphere(new THREE.Vector3(0, 0, 0), this.skySphere.geometry.boundingSphere.radius - 1);

			const intersectPoint = new THREE.Vector3();
			this.raycaster.ray.intersectSphere(dumySphere, intersectPoint);

			this.CreateSampleButton(intersectPoint);

			return;
		}
		///// DEBUG_END ////

		const intersects = this.raycaster.intersectObjects(this.objects, true);
		if (intersects.length > 0) {
			const obj = intersects[0].object;
			const handler = this.handlers.get(obj);
			handler?.onClick?.();
			event.stopPropagation();
		}
		else {
			this.isDragging = true;
			this.preX = this.mouse.x;
			this.preY = this.mouse.y;

		}
	}

	handleMouseUp(event) {
		this.isDragging = false;
		if (this.lastHoverObj) {
			const prevHandler = this.handlers.get(this.lastHoverObj);
			prevHandler?.onHoverOut?.();
		}
	}

	handleMouveMove(event) {
		if (!this.updateMousePos(event)) return;

		if (this.isDragging && false) {
			
			const deltaX = this.mouse.x - this.preX;
			const deltaY = this.mouse.y - this.preY;
			this.preX = this.mouse.x;
			this.preY = this.mouse.y;

			this.yaw -= deltaX * 0.002;
			this.pitch -= deltaY * 0.002;
			this.pitch = Math.max(-this.PITCH_LIMIT, Math.min(this.PITCH_LIMIT, this.pitch));
			this.camera.rotation.y = this.yaw;
			this.camera.rotation.x = this.pitch;
		}

		this.raycaster.setFromCamera(this.changeNDC(this.mouse), this.camera);
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

	handleZoom(event) {
		event.preventDefault();

		const delta = event.deltaY * 0.05;
		this.camera.fov += delta;
		this.camera.fov = Math.max(this.MIN_FOV, Math.min(this.MAX_FOV, this.camera.fov));
		this.camera.updateProjectionMatrix();
	}

	handleTouchZoom(event) {
		if (event.touches.length === 2) {
			e.preventDefault();

			const dx = event.touches[0].clientX - event.touches[1].clientX;
			const dy = event.touches[0].clientY - event.touches[1].clientY;
			const dist = Math.sqrt(dx * dx + dy * dy);
			if (this.lastPinchDist !== null) {
				// 핀치 인/아웃에 따라 FOV 조절 (감도 0.1)
				this.camera.fov -= (dist - lastPinchDist) * 0.1;
				this.camera.fov = Math.max(this.MIN_FOV, Math.min(this.MAX_FOV, this.camera.fov));
				this.camera.updateProjectionMatrix();
			}
			this.lastPinchDist = dist;
		} else {
			this.lastPinchDist = null;
		}
	}

	//// DEBUG_START ////
	CreateSampleButton(position) {
		const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
		const boxMaterial = new THREE.MeshBasicMaterial({
			color : 0xFFFFFF
		});
		const SampleBox = new THREE.Mesh(boxGeometry, boxMaterial);
		SampleBox.position.set(position.x, position.y , position.z);

		this.scene.add(SampleBox);
		this.smapleObjects.push(SampleBox);
		buttonMap.set(SampleBox.uuid, new Button(position, null, 0))
		
		const curSceneFolder = folderMap.get(currentScene.sceneKey);

		const folder = curSceneFolder.addFolder(SampleBox.name || `Button_0`);
		folder.add({
			changeTexture: () => {
				this.changeTexture(SampleBox);
			}
		}, 'changeTexture').name('ChangeTexture');
		folder.add(buttonMap.get(SampleBox.uuid), 'targetSceneKey');
		currentScene.pushButton(buttonMap.get(SampleBox.uuid));

		buttonFolderMap.set(SampleBox.uuid, folder);
	}

	changeTexture(obj) {
		const input = document.createElement('input');
		input.type = 'file';
		input.accept = 'images/*';

		input.addEventListener('change', () => {
			const file = input.files[0];
			if (!file) return;

			const url = "images/" + file.name;
			buttonMap.get(obj.uuid).textureURL = url;
			loader.load(url, texture => {
				obj.material.map = texture;
				obj.material.needsUpdate = true;

				// 사용 후 메모리 해제
				URL.revokeObjectURL(url);
			});
		});

		input.click();
	}

	changeSkyTexture(obj) {
		const input = document.createElement('input');
		input.type = 'file';
		input.accept = 'images/*';

		input.addEventListener('change', () => {
			const file = input.files[0];
			if (!file) return;

			const url = "images/" + file.name;
			currentScene.skytextureURL = url;
			loader.load(url, texture => {
				obj.material.uniforms.texture1.value = texture;
				obj.material.needsUpdate = true;

				// 사용 후 메모리 해제
				URL.revokeObjectURL(url);
			});
		});

		input.click();
	}

	//// DEBUG_END ////

	DeleteMesh(mesh) {
		this.scene.remove(mesh);

		if (mesh.geometry) {
			mesh.geometry.dispose();
		}
		if (mesh.material) {
			// 배열 형태(Material이 MeshFaceMaterial 등으로 여러 개일 때)
			if (Array.isArray(mesh.material)) {
				mesh.material.forEach(mat => mat.dispose());
			} else {
				mesh.material.dispose();
			}
		}

		// 필요 시 텍스처도 해제
		if (mesh.material.map) {
			mesh.material.map.dispose();
		}
	}


}
LoadJson();