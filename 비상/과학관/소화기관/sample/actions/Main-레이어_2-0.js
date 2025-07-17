var root = this;
var JsonData = null;
var SceneContainer = stage;//root.sceneContainer;
var BGMPath = "audio/bgm/bgm_ar.mp3";
PopupParentTarget = SceneContainer;
var isLobby = false;
function SetWindowEvent(targetWindow){
	targetWindow.addEventListener('focus', function() {
		console.log('focus',isLobby);
		if(isLobby)ResumeBGM();
		Howler.volume(1);
	}, false);
	targetWindow.addEventListener('blur', function() {
		console.log('blur',isLobby);
		if(isLobby)PauseBGM();
		Howler.volume(0);
	}, false);
}

function SetTitle() {
	var sceneTitle = new lib["mc_scene_title"]();
	sceneTitle.gotoAndStop(0);
	sceneTitle.Init(JsonData);
	SceneContainer.addChild(sceneTitle);
	sceneTitle.addEventListener(EVENT_START, function (e) {
		SceneContainer.removeChild(sceneTitle);
		sceneTitle = null;
		SetLearnPage(-1);
	});


    OnEvent(sceneTitle,EVENT_START)
}

function GetGroupID(id) {
	var datas = JsonData.arData;
	var	idx = parseInt(id);	
	for (var i = 0; i < datas.length; ++i) {
		var elems = datas[i];
		idx -= elems.length;
		if(idx < 0)return i;
	}
	
}

function SetLearnPage(pageID){
	//window.OnSkyBox("images/box");
	//window.OnButton("images/_preloader.png",{x: 0, y: 0, z: 5}, null, "images/R0011520.jpg");
	

	window.OnGLTFLoad("model/sample.glb");
/*SetBgm(BGMPath);
	var sceneLobby = new lib["mc_scene_lobby_2"]();
	sceneLobby.gotoAndStop(0);
	isLobby = true;
	var selectFunc = function (id) {
		isLobby = false;
		var gid = GetGroupID(id);		
		JsonData.arBgData = JsonData.arBgDatas[gid];		
		sceneLobby.visible = false;		
		PauseBGM();
		var popup = SetPopupCloseEvent("mc_learn_popup_0", function () {
			isLobby = true;
			ResumeBGM();
			sceneLobby.visible = true;
			sceneLobby.Reset();
			popup = null;
		});
		popup.Init(id, JsonData);
	};
	sceneLobby.Init(JsonData,function (dataElem) {
		selectFunc(dataElem.id);
	});
	SceneContainer.addChild(sceneLobby);
	
	if(pageID != -1){
		selectFunc(pageID);		
	}
	else{
		SetPopupCloseEvent("scene2_2_ui_popup_goal", function () {
			SFXCommonButton();
		});
	}*/
}

// SetOrbitControlVisible(true);


function StartApp() {
	//SetDetailPopup(JsonData);
	//SetLobby2();
	//SetTitle();
	//SetLobby();
	//SetGame();
	/*
	var arDataArr = JsonData.arData;
	for(var i = 0; i<arDataArr.length; ++i){
		var rDataArr = arDataArr[i];
		for(var j = 0; j<rDataArr.length; ++j){
			var elem = rDataArr[j];
			console.log(elem.id,elem.name);
		}
	}
	*/
	var pTag = GetPageIndex();
	if(pTag == -1){
		SetTitle();
		//SetLearnPage(-1);		
	}else{
		SetLearnPage(pTag);		
	}
	stage.on("mousedown",function(e){
		window.focus();
	});
	SetWindowEvent(window);
	window.focus();
}

function SetDetailPopup(jsonData) {
	var popup = SetPopupCloseEvent("mc_learn_popup_0", function () {
		//sceneLobby.visible = true;
		popup = null;
	});
	popup.Init(0, jsonData);
}

function GetPageIndex() {
	const urlStr = window.location;
	const url = new URL(urlStr);
	const urlParams = url.searchParams;
	const tag = urlParams.get('id');
	if(tag == null){
		return -1;
	}else{
		return parseInt(tag);
	}
}
/*

.then(async	function ([ar,aa,bb,cc]) {
		JsonData = await aa.json();
		var modelData = await ar.json();
		var stIdx = JsonData.DataIndex.start;
		var mNum = JsonData.DataIndex.num;
		JsonData.Datas = GetModelData(modelData.Datas,stIdx,mNum);
		var arBGIndex = JsonData.arBgDataIndex;
		JsonData.arBgData = modelData.arBgDatas[arBGIndex];
		document.fonts.add(font0);
		document.fonts.add(font1);
		StartApp();
	});
function GetModelData(modelData,startIdx,modelNum){
	var arr = [];
	for(var i = startIdx; i<startIdx+modelNum;++i ){
		console.log(modelData[i]);
		arr.push(modelData[i]);
	}
	return arr;
}
*/

StartApp();