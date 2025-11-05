let font1
let font2

function preload(){
   font1 = loadFont("assets/PermanentMarker-Regular.ttf")
   font2 = loadFont("assets/PressStart2P-Regular.ttf")
}

function setup(){
    createCanvas(600,600);
}
function draw(){
    background(0);
    fill(255,0,255);
    stroke(0,255,0)
    strokeWeight(10)
    textSize(40);
    textAlign(CENTER,CENTER);
    text("yehor the goat",300,300);
    if (keyIsPressed){
    textFont(font1);
    } else {
    textFont(font2);
    }
}