var s;
var imgArray = [];
var numRows = 8;

function preload() {
  myIcon1 = loadImage("Assets/Digital_Tiles/2 Sports.png");
  myIcon2 = loadImage("Assets/Digital_Tiles/Age.png");
  myIcon3 = loadImage("Assets/Digital_Tiles/Baltimore.png");
  myIcon4 = loadImage("Assets/Digital_Tiles/Basketball.png");
  myIcon5 = loadImage("Assets/Digital_Tiles/Birthyear.png");
  myIcon6 = loadImage("Assets/Digital_Tiles/CAISL.png");
  myIcon7 = loadImage("Assets/Digital_Tiles/Cascais.png");
  myIcon8 = loadImage("Assets/Digital_Tiles/College Grad Year 2021.png");
  myIcon9 = loadImage("Assets/Digital_Tiles/College Student.png");
  myIcon10 = loadImage("Assets/DigitalTiles/Democrat.png");
  myIcon11 = loadImage("Assets/DigitalTiles/Dependent (transitioning).png");
  myIcon12 = loadImage("Assets/DigitalTiles/Eighth Grade Grad Year 2013.png");
  //   myIcon13 = loadImage("Assets/Final/13.png");
  //   myIcon14 = loadImage("Assets/Final/14.png");
  //   myIcon15 = loadImage("Assets/Final/15.png");
  //   myIcon16 = loadImage("Assets/Final/16.png");
  //   myIcon17 = loadImage("Assets/Final/17.png");
  //   myIcon18 = loadImage("Assets/Final/18.png");
  //   myIcon19 = loadImage("Assets/Final/19.png");
  //   myIcon20 = loadImage("Assets/Final/20.png");
  //   myIcon21 = loadImage("Assets/Final/21.png");
  //   myIcon22 = loadImage("Assets/Final/22.png");
  //   myIcon23 = loadImage("Assets/Final/23.png");
  //   myIcon24 = loadImage("Assets/Final/24.png");
  //   myIcon25 = loadImage("Assets/Final/25.png");
  //   myIcon26 = loadImage("Assets/Final/26.png");
  //   myIcon27 = loadImage("Assets/Final/27.png");
  //   myIcon28 = loadImage("Assets/Final/28.png");
  //   myIcon29 = loadImage("Assets/Final/29.png");
  //   myIcon30 = loadImage("Assets/Final/30.png");
  //   myIcon31 = loadImage("Assets/Final/31.png");
  //   myIcon32 = loadImage("Assets/Final/32.png");
  //   myIcon33 = loadImage("Assets/Final/33.png");
  //   myIcon34 = loadImage("Assets/Final/34.png");
  //   myIcon35 = loadImage("Assets/Final/35.png");
  //   myIcon36 = loadImage("Assets/Final/36.png");
  //   myIcon37 = loadImage("Assets/Final/37.png");
  //   myIcon38 = loadImage("Assets/Final/38.png");
  //   myIcon39 = loadImage("Assets/Final/39.png");
  //   myIcon40 = loadImage("Assets/Final/40.png");
  //   myIcon41 = loadImage("Assets/Final/41.png");
  //   myIcon42 = loadImage("Assets/Final/42.png");
}

function setup() {
  createCanvas(800, 500);
  background(255);
  frameRate(1);

  s = width / numRows;
  imgArray = [
    myIcon1,
    myIcon2,
    myIcon3,
    myIcon4,
    myIcon5,
    myIcon6,
    myIcon7,
    myIcon8,
    myIcon9,
    myIcon10,
    myIcon11,
    myIcon12,
  ];
}

function draw() {
  background(255);
  for (let x = 0; x < imgArray.length; x++) {
    for (let y = 0; y < imgArray.length; y++) {
      let chosenIcon = random(imgArray);
      image(chosenIcon, x * s, y * s, s, s);
    }
  }
}
