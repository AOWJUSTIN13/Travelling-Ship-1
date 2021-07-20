var ground
var groundImage

// creating an object or a sprite called trex
var trex 
// creating a variable to load the images of the trex
var trexImage


// loading the images 
function preload()
{
 trexImage=loadAnimation("trex1.png","trex3.png","trex4.png")
 groundImage=loadAnimation("ground2.png")
}

//create sprite,shapeColor,animation,scale,velocity
function setup()
{
 trex=createSprite(50,360,20,20)
 trex.addAnimation("trex",trexImage)
 ground=createSprite(60,350,10,10)
 ground.addAnimation("ground",groundImage)
 
}


function draw()
{
 background("white")



 drawSprites()
}



