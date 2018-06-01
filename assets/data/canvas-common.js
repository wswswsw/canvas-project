let canvasReal = document.getElementById("canvas-real");
let contextReal = canvasReal.getContext("2d");
let canvasDraft = document.getElementById("canvas-draft");
let contextDraft = canvasDraft.getContext("2d");

let currentFunction;
let dragging = false;

$("#canvas-draft").mousedown(function(e) {
  let mouseX = e.pageX - this.offsetLeft;
  let mouseY = e.pageY - this.offsetTop;
  if (currentFunction && currentFunction.onMouseDown) {
    currentFunction.onMouseDown([mouseX, mouseY], e);
  }

  dragging = true;
});

$("#canvas-draft").mousemove(function(e) {
  let mouseX = e.pageX - this.offsetLeft;
  let mouseY = e.pageY - this.offsetTop;
  if (dragging && currentFunction && currentFunction.onDragging) {
    currentFunction.onDragging([mouseX, mouseY], e);
  }

  if (currentFunction && currentFunction.onMouseMove) {
    currentFunction.onMouseMove([mouseX, mouseY], e);
  }
});

$("#canvas-draft").mouseup(function(e) {
  dragging = false;
  let mouseX = e.pageX - this.offsetLeft;
  let mouseY = e.pageY - this.offsetTop;
  if (currentFunction && currentFunction.onMouseUp) {
    currentFunction.onMouseUp([mouseX, mouseY], e);
  }
});

$("#canvas-draft").mouseleave(function(e) {
  dragging = false;
  let mouseX = e.pageX - this.offsetLeft;
  let mouseY = e.pageY - this.offsetTop;
  if (currentFunction && currentFunction.onMouseLeave) {
    currentFunction.onMouseLeave([mouseX, mouseY], e);
  }
});

$("#canvas-draft").mouseenter(function(e) {
  let mouseX = e.pageX - this.offsetLeft;
  let mouseY = e.pageY - this.offsetTop;
  if (currentFunction && currentFunction.onMouseEnter) {
    currentFunction.onMouseEnter([mouseX, mouseY], e);
  }
});

$('#canvas-draft').dblclick(function(e) {
  dragging = false;
  let mouseX = e.pageX - this.offsetLeft;
  let mouseY = e.pageY - this.offsetTop;
  currentFunction.onDblClick([mouseX, mouseY], e);
  });


class PaintFunction {
  constructor() {}
  onMouseDown() {}
  onDragging() {}
  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}
}
