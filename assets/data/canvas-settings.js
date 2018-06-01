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
