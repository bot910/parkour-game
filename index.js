function play() {
  var audio = new Audio("indianfinal.mp3");
  for (let step = 0; step < 5; step++) {
    // Runs 5 times, with values of step 0 through 4.
    audio.play();
    setTimeout(1000)
  }
  audio.play();
}
