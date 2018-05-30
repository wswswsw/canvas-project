let strokeColor = '#000';
$('#colorStroke').change((e) => {
    strokeColor = '#' + e.target.value;
})


// let bgColor = 
// $("#canvas-real").css({
//     "backgroundColor": "black"
// });

let bgColor = "ivory";
$('#backgroundColor').change((e) => {
    $("#canvas-real").css({
        "backgroundColor": backgroundColor = '#' + e.target.value
    }); 
})