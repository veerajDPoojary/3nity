var constraints = {video: true};

function successCallback(stream) {
  window.stream = stream; // stream available to console
  var video = document.querySelector("video");
  video.src = window.URL.createObjectURL(stream);
  //video.play();
  console.log("video should show up");
}

function errorCallback(error){
  console.log("getUserMedia error: ", error);
}

getUserMedia(constraints, successCallback, errorCallback);