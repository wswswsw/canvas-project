//incomplete


class ClearCanvas extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }


    clearCanvas() {
        this.context.clearRect(0, 0, canvasWidth, canvasHeight);
    }