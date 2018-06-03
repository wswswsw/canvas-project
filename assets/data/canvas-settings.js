let strokeColor = "#000";
$("#colorStroke").change(e => {
    strokeColor = "#" + e.target.value;
});

let bgColor = "ivory";
$("#backgroundColor").change(e => {
    $("#canvas-background").css({
        backgroundColor: (backgroundColor = "#" + e.target.value)
    });
});





var undoObject = {
    actionCount: 0,
    states: [],
    savePoint: 0,
    undoAction: function () {
        if (undoObject.actionCount > 1) {
            undoObject.actionCount--;
            undoObject.savePoint = undoObject.actionCount;
            // contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
            contextReal.drawImage(undoObject.states[undoObject.actionCount - 1], 0, 0);
        }
    },

    redoAction: function () {
        if (undoObject.actionCount == undoObject.savePoint && undoObject.actionCount < undoObject.states.length) {
            undoObject.actionCount++;
            undoObject.savePoint++;
            // contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
            contextReal.drawImage(undoObject.states[undoObject.actionCount - 1], 0, 0);
        }
        else if (undoObject.actionCount != undoObject.savePoint) {
            undoObject.states.splice(undoObject.actionCount);
            undoObject.savePoint = undoObject.actionCount;
        }
    }
}