let x = [];
let y = [];
let speedx = [];
let speedy = [];
for (var i = 0; i < 10000; i += 1){
  x.push(Math.random()*50+5);
  y.push(Math.random()*50+5);
  speedx.push(Math.random()*100+5);
  speedy.push(Math.random()*100+5);
}
let box = document.getElementById("box");
setInterval(characterMove, 16);

let ctx = box.getContext("2d");
characterMove();
ctx.fillStyle = "green";

function characterMove() {
  // delete the box after it moves
  ctx.clearRect(0, 0, 2000, 2000);

  for (let i = 0; i < 10000; i += 1) {
    //change x and y by 30 constintly
    x[i] = x[i] + speedx[i];

    y[i] = y[i] + speedy[i];
    //redraw the box after x and y is added
    ctx.fillRect(x[i], y[i], 70, 70);
    //make the box change direction after hit edge of screen
    if (x[i] >= 1825) {
      ctx.fillStyle = "white";
      speedx[i] = -speedx[i];
    }
    if (y[i] >= 800) {
      ctx.fillStyle = "gray";
      speedy[i] = -speedy[i];
    }
    if (y[i] <= 0) {
      ctx.fillStyle = "white";
      speedy[i] = -speedy[i];
    }
    if (x[i] <= 0) {
      ctx.fillStyle = "gray";
      speedx[i] = -speedx[i];
    }
  }
}
