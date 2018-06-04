var uploader = new CanvasImageUploader({
  jpegQuality: 0.7
});

var maxSize = 1000;

$("#uploadImage").bind("change", function onImageChanged(e) {
  var files = e.target.files || e.dataTransfer.files;
  if (files) {
    file = files[0];
    var $canvas = $("<canvas>");
    uploader.readImageToCanvas(file, $canvas, function () {
      // uploader.saveCanvasToImageData($canvas[0]);

      var canvas = $canvas[0];
      // Render the preview from your original canvas...
      uploader.copyToCanvas(canvas, $("#preview-canvas"), maxSize);
      uploader.saveCanvasToImageData(canvas);
    });
  }
});

// // Upload the file data
// function onFormSubmit() {
//   $.ajax({
//     type: "POST",
//     url: "http://...",
//     data: uploader.getImageData(),
//     beforeSend: function(request) {
//       request.setRequestHeader("Content-Type", ".jpg");
//     },
//     processData: false,
//     success: function(result) {},
//     error: function(error) {}
//   });
// }

// uploader.readImageToCanvas(file, $canvas, function() {
//   var canvas = $canvas[0];
//   // Render the preview from your original canvas...
//   uploader.copyToCanvas(canvas, $("#preview-canvas"), MAX_PREVIEW_SIZE);
//   uploader.saveCanvasToImageData(canvas);
// });
