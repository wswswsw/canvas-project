class DrawingDotted extends PaintFunction{
    constructor(contextReal, contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }
    
    onMouseDown(coord,event){
        this.contextReal.strokeStyle = strokeColor;
        this.contextDraft.strokeStyle = strokeColor;
        this.contextReal.lineCap = "square";
        this.contextDraft.lineCap = "square";                
        this.origX = coord[0];
        this.origY = coord[1];
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.beginPath();
        this.contextReal.setLineDash([5,30]);
        this.contextDraft.setLineDash([5,30]);
        this.contextReal.moveTo(this.origX,this.origY);
    }
    onDragging(coord,event){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.beginPath(); 
        this.contextDraft.moveTo(this.origX,this.origY);
        this.contextDraft.lineTo(coord[0],coord[1]);
        this.contextDraft.stroke();
    }

  onMouseMove() {}
  onMouseUp(coord) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.lineTo(coord[0], coord[1]);
    this.contextReal.stroke();
  }


}  