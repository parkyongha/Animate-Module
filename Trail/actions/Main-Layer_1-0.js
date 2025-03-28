let root = this;

root.stop();

(function init() {
    console.log(`init`);

    root.on('mousedown',
        /** @param {createjs.MouseEvent} event */
        (event) => {
            var shape = new createjs.Shape();
            root.addChild(shape);

            var g = shape.graphics;

            g.setStrokeStyle(1).beginStroke('#000000').moveTo(event.localX, event.localY);

            console.log(`mouse down`);
            
            root.on('mousemove', function (e) {
                console.log(`mouse move`);
                g.lineTo(e.localX, e.localY);
            });

            root.on('mouseup', function (e) {
                root.removeAllEventListeners('mousemove');
            }, null, true);
        });
})();
