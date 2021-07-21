var ship,
var sea,
function preload(){
ship.loadAnimation("ship-1.png,ship-2.png,ship-3.png,ship-4.png");
sea.loadImage("sea.png");

}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,200,20,20);
  sea.loadImage("sea.png");
  
   ship=createSprite(100,350,20,20);
  ship.loadAnimation("ship-1.png,ship-2.png,ship-3.png,ship-4.png");
}

function draw() {
  background("blue");

if(sea.x < 0) {
  sea.x = sea.width/2;
}


 drawSprite();
}