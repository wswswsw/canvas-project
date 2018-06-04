var button = document.getElementById("download");
button.addEventListener("click", function () {
    var dataURL = canvasReal.toDataURL("image/png");
    button.href = dataURL;
});


