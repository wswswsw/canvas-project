class DrawingStyle extends PaintFunction {
  constructor(contextReal, contextDraft, width) {
    super();
    this.context = contextReal;
    this.contextDraft = contextDraft;
    this.lineWidth = width;
    this.isDrawing = false;
    this.points = [];
    this.radius = 15;
  }

  onMouseDown(coord, event) {
    this.isDrawing = true;
    this.points.push({ x: event.clientX, y: event.clientY });
  }

  onMouseMove(coord, event) {
    if (!this.isDrawing) return;

    this.points.push({ x: event.clientX, y: event.clientY });

    this.context.clearRect(
      0,
      0,
      this.context.canvas.width,
      this.context.canvas.height
    );
    this.context.lineJoin = this.context.lineCap = "round";
    this.context.fillStyle = "#08CCF9";

    for (var i = 0; i < this.points.length; i++) {
      this.context.beginPath();
      this.context.arc(
        this.points[i].x,
        this.points[i].y,
        this.radius,
        false,
        Math.PI * 2,
        false
      );
      this.context.fill();
      this.context.stroke();
    }
  }

  onMouseUp(coord, event) {
    this.isDrawing = false;
    this.points.length = 0;
  }
  onMouseLeave() {}
  onMouseEnter() {}

  draw(x, y) {
    this.context.lineTo(x, y);
    this.context.moveTo(x, y);
    this.context.closePath();
    this.context.stroke();
  }
}
