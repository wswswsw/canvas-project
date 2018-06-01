var button = document.getElementById('download');
button.addEventListener('click', function () {
    var dataURL = canvasReal.toDataURL('image/jpeg');
    button.href = dataURL;
    console.log(fuckyou)
});