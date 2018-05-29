//incomplete

class DrawingQuadratic extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.actionCounter = 0;
  }

  onMouseDown(coord, event) {
    if (this.actionCounter === 0) {
      this.contextReal.strokeStyle = "#000";
      this.origX = coord[0];
      this.origY = coord[1];
      this.contextReal.beginPath();
      this.contextReal.moveTo(this.origX, this.origY);
    } else if (this.actionCounter === 1) {
    }
  }

  onDragging(coord, event) {
    if (this.actionCounter === 0) {
      this.endX = coord[0];
      this.endY = coord[1];
      this.contextDraft.closePath();
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(this.origX, this.origY);
      this.contextDraft.quadraticCurveTo(
        this.origX,
        this.origY,
        this.endX,
        this.endY
      );
      this.contextDraft.stroke();
    } else if (this.actionCounter === 1) {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(this.origX, this.origY);
      this.contextDraft.quadraticCurveTo(
        coord[0],
        coord[1],
        this.endX,
        this.endY
      );
      this.contextDraft.stroke();
    }
    var layer = new Konva.Layer();
    var dragLayer = new Konva.Layer();

    for (var n = 0; n < 30; n++) {
      addStar(layer, stage);
    }

    stage.add(layer, dragLayer);

    stage.on("dragstart", function(evt) {
      var shape = evt.target;
      // moving to another layer will improve dragging performance
      shape.moveTo(dragLayer);
      stage.draw();

      if (tween) {
        tween.pause();
      }
      shape.setAttrs({
        shadowOffset: {
          x: 15,
          y: 15
        },
        scale: {
          x: shape.getAttr("startScale") * 1.2,
          y: shape.getAttr("startScale") * 1.2
        }
      });
    });

    stage.on("dragend", function(evt) {
      var shape = evt.target;
      shape.moveTo(layer);
      stage.draw();
      shape.to({
        duration: 0.5,
        easing: Konva.Easings.ElasticEaseOut,
        scaleX: shape.getAttr("startScale"),
        scaleY: shape.getAttr("startScale"),
        shadowOffsetX: 5,
        shadowOffsetY: 5
      });
    });
  }

  onMouseMove() {}

  onMouseUp(coord, event) {
    if (this.actionCounter === 0) {
      this.actionCounter = 1;
    } else if (this.actionCounter === 1) {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextReal.quadraticCurveTo(
        coord[0],
        coord[1],
        this.endX,
        this.endY
      );
      this.contextReal.stroke();
      this.actionCounter = 0;
      this.onFinish();
    }
  }

  onMouseLeave() {}
  onMouseEnter() {}
}
