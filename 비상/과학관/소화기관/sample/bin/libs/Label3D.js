import * as THREE from 'three';
import { LineStyle } from './LineStyle.js';

// 한 기관에 대한 오브젝트 구조 예시
export class Label3D {
    constructor(name, targetPosition, labelOffset, lineStyle = new LineStyle()) {

        this.name = name;

        // 기관 내부의 위치 (ex: 간 중심 좌표)
        this.targetPosition = targetPosition;

        // 텍스트 위치 (기관 위치에서 살짝 띄운 곳)
        this.labelPosition = targetPosition.clone().add(labelOffset);

        // 텍스트
        this.label = this.createLabelMesh(name, lineStyle.color);

        // 빈 박스(placeholder)
        this.placeholder = this.createPlaceholder(lineStyle);

        // 지시선 (기관 → 텍스트)
        this.line = this.createLine(this.targetPosition, this.labelPosition, lineStyle);

        // 부모 Object3D로 묶기
        this.group = new THREE.Group();
        this.group.add(this.placeholder, this.label, this.line);

        this.showPlaceholder();
    }

    createLabelMesh(name, color = "#ffffff") {
        const canvas = document.createElement('canvas');
        const size = 512; // 해상도
        canvas.width = size;
        canvas.height = size;

        const context = canvas.getContext('2d');

        // 배경을 투명으로 초기화
        context.clearRect(0, 0, size, size);

        // 텍스트 스타일 지정
        context.font = '100px SBAggroM';

        const hexColor = '#' + color.toString(16).padStart(6, '0');
        // 예: 0xffd64f → "#ffd64f"
        context.fillStyle = hexColor;
        context.textAlign = 'center';
        context.textBaseline = 'middle';

        // 텍스트 그리기
        context.fillText(name, size / 2, size / 2);

        // 텍스처로 변환
        const texture = new THREE.CanvasTexture(canvas);
        texture.encoding = THREE.sRGBEncoding; // 색상 왜곡 방지

        // 스프라이트로 만들기
        const material = new THREE.SpriteMaterial({ map: texture, transparent: true });
        const sprite = new THREE.Sprite(material);
        sprite.scale.set(3, 3, 3); // 크기 조정 가능
        sprite.position.copy(this.labelPosition);
        return sprite;
    }

    createPlaceholder(lineStyle) {
        const w = 1.0, h = 0.4;  // 너비/높이, 필요에 따라 조절
        const box = new THREE.Group();

        // 1) 투명한 배경 plane
        const planeGeo = new THREE.PlaneGeometry(w, h);
        const planeMat = new THREE.MeshBasicMaterial({
            color: 0xffffff, opacity: 0.01, transparent: true
        });
        const bg = new THREE.Mesh(planeGeo, planeMat);
        box.add(bg);

        // 2) dashed border
        const shape = new THREE.Shape();
        shape.moveTo(-w / 2, -h / 2);
        shape.lineTo(w / 2, -h / 2);
        shape.lineTo(w / 2, h / 2);
        shape.lineTo(-w / 2, h / 2);
        shape.lineTo(-w / 2, -h / 2);

        const points = shape.getPoints();
        const borderGeo = new THREE.BufferGeometry().setFromPoints(points);

        let borderMat;

        if (lineStyle.dashed) {
            borderMat = new THREE.LineDashedMaterial({
                color: 0xffff00, dashSize: 0.05, gapSize: 0.03
            });
        }

        const border = new THREE.Line(borderGeo, borderMat);
        border.computeLineDistances();
        box.add(border);

        // 위치
        box.position.copy(this.labelPosition);
        return box;
    }

    createLine(start, end, lineStyle) {

        const geometry = new THREE.BufferGeometry().setFromPoints([start, end]);

        let line = null;

        let material;
        if (lineStyle.dashed) {
            material = new THREE.LineDashedMaterial({
                color: lineStyle.color,
                dashSize: lineStyle.dashSize,
                gapSize: lineStyle.gapSize,
                linewidth: lineStyle.lineWidth
            });

            line = new THREE.Line(geometry, material);
            line.computeLineDistances(); // 점선에서는 필수!
        } else {
            material = new THREE.LineBasicMaterial({
                color: lineStyle.color,
                linewidth: lineStyle.lineWidth
            });

            line = new THREE.Line(geometry, material);
        }

        return line;
    }

    containsObject(object) {
        let obj = object;
        while (obj) {
            if (obj === this.group) return true;
            obj = obj.parent;
        }
        return false;
    }

    update(camera) {
        this.label.lookAt(camera.position); // 텍스트가 항상 카메라를 보게
        this.placeholder.lookAt(camera.position);
    }

    showPlaceholder() {
        this.placeholder.visible = true;
        this.label.visible = false;
        this.line.visible = true;
    }

    // 정답 배치 후엔 텍스트만
    showLabel() {
        this.placeholder.visible = false;
        this.label.visible = true;
        this.line.visible = true;
    }
}
