
let img;
let lightImg;

function preload() {
  img = loadImage("asset/colorful_abstract.jpg")
  lightImg = loadImage("asset/sprite.png")

}


function setup() {
  createCanvas(400, 500);
  background(220);

}

function draw() {
  background(220);

  image(lightImg, 0, 0, 300, 300);


/*
  push();
  image(img, mouseX, mouseY, 300, 300);
  pop();
*/

}
