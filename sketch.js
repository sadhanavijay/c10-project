var ship, ship_moving, edges;
var seaImage, sea
function preload()
{
  ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,200,10,10)
  sea.addImage("sea",seaImage);
  sea.scale=0.3
  ship = createSprite(200,160,20,50);
  ship.addAnimation("moving", ship_moving);
  edges = createEdgeSprites()
  ship.scale = 0.25;
  ship.x = 100
}


function draw() {
  background("grey");
  sea.velocityX=-1 
  if(sea.x<0){
    sea.x=sea.width/8
  }   
  console.log(ship.x)
  drawSprites();
}
