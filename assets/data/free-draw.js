class FreeDraw extends PaintFunction {
    constructor(contextReal) {
        super();
        this.context = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown(coord, event) {
        this.context.strokeStyle = strokeColor;
        this.context.lineJoin = "round";
        this.context.lineWidth = 1;
        this.context.beginPath();
        this.context.moveTo(coord[0], coord[1]);
        this.draw(coord[0], coord[1]);
    }

    onDragging(coord, event) {
        this.draw(coord[0], coord[1]);
    }

    onMouseMove() { }
    onMouseUp() { }
    onMouseLeave() { }
    onMouseEnter() { }

    draw(x, y) {
        this.context.lineTo(x, y);
        this.context.moveTo(x, y);
        this.context.closePath();
        this.context.stroke();
    }
}