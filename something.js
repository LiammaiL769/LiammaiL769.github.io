let x = 0;
let y = 0;

let box = document.getElementById("box");
setInterval(characterMove, 16);
let ctx = box.getContext("2d");
characterMove();
ctx.fillStyle = "green";

function characterMove() {
  // delete the box after it moves
  ctx.clearRect(0, 0, 2000, 2000);

  for (i = 0; i < 11; i += 1) {
    ctx.fillRect(x , y + i * 50, 70, 70);
  }
  x += 8;
  y += 5;
}
