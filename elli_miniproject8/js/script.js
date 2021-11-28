let img;

function preload() {
  img = loadImage("assets/clouds.jpg");
}

function setup() {
  createCanvas(800, 400);
  background(0);
}

function draw() {
  //background(0);

  img.loadPixels();

  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      let index = (x + y * img.width) * 4;

      let r = img.pixels[index + 0];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];

      let avg = (r + g + b) / 3;
      let threshold = 0.55; //.3
      if (avg > 255 * threshold) {
        img.pixels[index + 0] = r// R
        img.pixels[index + 1] = 250; // G
        img.pixels[index + 2] = b; // B
        img.pixels[index + 3] = 255; // A
      }  else {
        img.pixels[index + 0] = 100; // R
        img.pixels[index + 1] = 200; // G
        img.pixels[index + 2] = 50; // B
        img.pixels[index + 3] = 150; // A
      }
    }
  }

  img.updatePixels();
  image(img, 0, 0, 800, 400);
}
