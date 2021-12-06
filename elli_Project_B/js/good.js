let img;
let cam;


function setup() {
  let canvas = createCanvas(640, 480);
  canvas.parent("myContainerG");
  background(50);

    cam = createCapture(VIDEO);
    cam.hide();
    img = createImage(width, height);
}

function draw() {
  background(0);

  cam.loadPixels();
  img.loadPixels();

  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      let index = (x + y * img.width) * 4;

      let r = cam.pixels[index + 0];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2];

      img.pixels[index + 0] = 0; // R
      img.pixels[index + 1] = g; // G
      img.pixels[index + 2] = 0; // B
      img.pixels[index + 3] = 255; // A
    }
  }

  img.updatePixels();
  image(img, 0, 0);
}
