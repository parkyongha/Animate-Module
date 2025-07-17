let root = this;

/** @type {Object[]} */
const digestive_system = root.right_menu.GetChildsByName("digestive_system_");

let playingPuzzle = false;

root.Init = function (data) {
    initializeRightMenu();
    initializeButtons();

    root.canvas.visible = false;
}

function initializeButtons() {
    const observation_mode = root.observation_mode;

    observation_mode.btn_puzzle.on("click", function (event) {
        root.right_menu.visible = true;
        root.canvas.visible = false;
    });

    observation_mode.btn_draw.on("click", function (event) {
        // draw mode로 전환

        root.right_menu.visible = false;
        root.canvas.visible = true;
    });
}

function initializeRightMenu() {
    const digestiveSystemList = ["입", "식도", "위", "작은창자", "큰창자", "항문", "간", "쓸개", "이자"];

    digestive_system.forEach((obj, index) => {
        obj.gotoAndStop(index);

        obj.blank.visible = false;

        // 드래그앤드롭 세팅
        SetDragDrop(obj, root.right_menu, function (event) {
            if (!playingPuzzle) return;
            
            window.ControlEnable(false);
            obj.blank.visible = true;
            
        }, function (event) {
            if (!playingPuzzle) return;

            window.ControlEnable(true);
            obj.blank.visible = false;

            obj.x = obj.startPosition.x;
            obj.y = obj.startPosition.y;

            function handleDropResult(isSuccessful) {
                obj.visible = !isSuccessful;

                // 정오답 여부에 따른 효과음 추가
                if (isSuccessful) {
                    if (digestive_system.every(obj => !obj.visible)) {
                        ClearPuzzle();
                    }
                } else {
                    // 오답시 튕겨나오는 효과
                }

                console.log("드롭 결과:", isSuccessful ? "성공" : "실패");
            }

            window.HandleLabelDropEvent(digestiveSystemList[index], handleDropResult);
        });

        obj.canDragging = false;

        obj.on("click", function (event) {
            // 각 소화기관에 맞게 visible 상태 변경
            // threejsManager로 호출
        });
    });
}

function ClearPuzzle() {

}

root.Init();