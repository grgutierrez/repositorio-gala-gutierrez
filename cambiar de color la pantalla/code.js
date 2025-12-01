onEvent("button1", "click", function( ) {
  timedLoop(100, function() {
    setProperty("screen1", "background-color", rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255), 0.5));
  });
});
onEvent("music", "click", function( ) {
  playSound("Wham!---Last-Christmas-(Lyrics)-(1).mp3", false);
});
onEvent("text_input1", "input", function( ) {
  setProperty("screen1", "image", "https://i.pinimg.com/736x/7c/72/02/7c7202af09e3e31280f8ac17a64c867b.jpg");
});
