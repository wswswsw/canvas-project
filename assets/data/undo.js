$('.undo').on('click', function(){
    undoObject.undoAction();
});

$('.redo').on("click", function(){
    undoObject.redoAction();
});