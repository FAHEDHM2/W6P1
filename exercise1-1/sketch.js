let myfont

function preload(){
  myfont = loadFont("assets/Anton-Regular.ttf")

    
}
function setup(){
    createCanvas(600,600)
 
}
function draw(){
    background(0,0,170)
    fill(255)
    textFont(myfont)
    textSize(48)
    textAlign(RIGHT,BOTTOM)
    text("Lorem ipsum dolor sit amet",300,300,200,300)

}