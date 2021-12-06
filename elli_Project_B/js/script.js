let answers = [false, false, false];
let stage = 0;

let stageBox;
let txtTitle;
let txtScript;
let doors = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  let rndIndex = floor( random(3) ); // 33.3%
  console.log(rndIndex);
  answers[rndIndex] = true;

  stageBox = document.getElementById('stage-box');
  txtTitle = document.getElementById('text-title');
  txtScript = document.getElementById('text-script');

  doors[0] = document.getElementById('door1');
  doors[1] = document.getElementById('door2');
  doors[2] = document.getElementById('door3');
}

function draw() {
  stroke(255, 80);
  noFill();
  strokeWeight(random(0.1, 0.5));
  line(random(width), random(height), random(width), random(height));
}

function openDoor(index) {
  if (stage == 0) {
    if (answers[index]) {
      choseGoodDoor(index);
    } else {
      choseBadDoor(index);
    }
  }
  else if (stage == 1) {
    if (answers[index]) {
      //console.log("good");
      window.open("good.html", "_self");
    } else {
      window.open("bad.html", "_self");
    }
  }
  stage++;
}

function choseGoodDoor(index) {
  let numbers = [0, 1, 2];
  numbers.splice(index, 1);

  let i = random(numbers);
  doors[i].innerHTML = "DEATH";
  doors[i].setAttribute("onclick", "");

  let num = index + 1
  txtTitle.innerHTML = "You Chose Door " + num;
  txtScript.innerHTML = "Are you sure that was a good idea? <br> Well it's not an instant death... <br> Let's give you another chance..<br> Do you want to stay with Door " + num + " or try your luck?";
}

function choseBadDoor(index) {
  for (let i=0; i<doors.length; i++) {
    if (answers[i] != true && i != index) {
      doors[i].innerHTML = "DEATH";
      doors[i].setAttribute("onclick", "");
    }
  }
  let num = index + 1
  txtTitle.innerHTML = "You Chose Door " + num;
  txtScript.innerHTML = "Are you sure that was a good idea? <br> Well it's not an instant death... <br> Let's give you another chance..<br> Do you want to stay with Door " + num + " or try your luck?";
}
