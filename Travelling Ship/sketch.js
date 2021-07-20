var sea
var seaImage
var ship 
var shipImage
function preload(){
 shipImage=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
 seaImage=loadAnimation("sea.png")
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(0,0,20,20)
  sea.addAnimation("sea",seaImage)
  ship=createSprite(150,310,20,20)
  ship.addAnimation("ship",shipImage)
 ship.scale=0.1
 sea.scale=2
sea.velocityX=-5
}

function draw() {
  background("blue");
if(sea.x<0)
{
 sea.x=sea.width/2
}
 drawSprites()
 text(mouseX+","+mouseY,mouseX,mouseY)
}
 