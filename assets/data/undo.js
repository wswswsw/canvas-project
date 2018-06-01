$('.undo').on('click', function(){
    canvasSettings.undoObject.undoAction();
});

$('.redo').on("click", function(){
    canvasSettings.undoObject.redoAction();
});