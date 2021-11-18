let dia = 20;
let myColor = "Seagreen";
let diameterSlider;


function setup() {
  let canvas = createCanvas(800, 400);
  canvas.parent("myContainer");
  background("Aquamarine");

  diameterSlider = document.getElementById('dia');
}


function draw() {

//background fish
push();
fill("Beige");
ellipse(400, 150, 60, 30);
triangle(370, 150, 350, 130, 350, 170);
pop();

//mouse drawing mechanism
push();
currX = mouseX;
currY = mouseY;
if (mouseIsPressed) {
  strokeWeight(1);
  fill(myColor);
  ellipse(mouseX, mouseY, dia, dia);
} pop();


//diameter slider
push();
dia = int(diameterSlider.value);
pop();
}

//button to clear canvas/reset background
function clearCanvas() {
  clear();
  background("Aquamarine");
}

//buttons to change color

function changeColor1() {
  myColor = "PaleGoldenrod";
}

function changeColor2() {
  myColor = "PaleGreen";
}

function changeColor3() {
  myColor = "MediumSeaGreen";
}

function changeColor4() {
  myColor = "SeaGreen";
}

function changeColor5() {
  myColor = "DarkOliveGreen";
}
