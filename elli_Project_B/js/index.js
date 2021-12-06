let bloodDrops = [];
let i;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 1500; i++) {
    bloodDrops[i] = new Blood(random(0, width), -height);
  }
}

function draw() {
  background(0);

  for (let i = 0; i < bloodDrops.length; i++) {
    bloodDrops[i].move();
    bloodDrops[i].display();
  }
}

class Blood {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dia = random(5, 20);
    this.ySpd = random(5, 35);
  }
  move() {
    this.y += this.ySpd;
  }
  display() {
      noStroke();
      fill(150, 0, 0, 200);
      ellipse(this.x, this.y, this.dia, this.dia);
  }
}
