class Stroke extends PaintFunction {
  constructor(contextReal, contextDraft, width) {
    super();
    this.context = contextReal;
    this.contextDraft = contextDraft;
    this.lineWidth = width;
  }

  onMouseDown(coord, event) {
    this.context.strokeStyle = "#000";
    this.context.lineJoin = "round";
    this.context.lineWidth = this.lineWidth;
    this.context.beginPath();
    this.context.moveTo(coord[0], coord[1]);
    this.draw(coord[0], coord[1]);
  }

  onDragging(coord, event) {
    this.draw(coord[0], coord[1]);
  }

  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}

  draw(x, y) {
    this.context.lineTo(x, y);
    this.context.moveTo(x, y);
    this.context.closePath();
    this.context.stroke();
  }
}
