let x = 870;
let y = 350;
let speedx = 500;
let speedy = 200;
let box = document.getElementById("box");
setInterval(characterMove, 16);
let ctx = box.getContext("2d");
characterMove();
ctx.fillStyle = "green";

function characterMove() {
  // delete the box after it moves
  ctx.clearRect(0, 0, 2000, 2000);
  //change x and y by 30 constintly
  x = x + speedx;

  y = y + speedy;

  //redraw the box after x and y is added

  ctx.fillRect(x, y, 70, 70);

  //make the box change direction after hit edge of screen
  if (x >= 1825) {
    ctx.fillStyle = "white";
    speedx = -speedx;
  }
  if (y >= 800) {
    ctx.fillStyle = "gray";
    speedy = -speedy;
  }
  if (y <= 0) {
    ctx.fillStyle = "white";
    speedy = -speedy;
  }
  if (x <= 0) {
    ctx.fillStyle = "gray";
    speedx = -speedx;
  }
}
