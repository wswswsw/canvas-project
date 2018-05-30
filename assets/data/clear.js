class Clear extends PaintFunction {
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft; 
        this.contextReal.clearRect(0,0,canvasReal.width,canvasReal.height);
        this.contextReal.clearRect(0,0,canvasReal.width,canvasReal.height);
    
    };
}
