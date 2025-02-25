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