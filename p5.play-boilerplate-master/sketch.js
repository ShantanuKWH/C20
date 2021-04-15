var fixedRect, movingRect;

function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(200, 200, 50, 50);
  fixedRect.shapeColor  = "green";

  movingRect = createSprite(400,200,30,50);
  movingRect.shapeColor  = "green";
}

function draw() {
  background("black");  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 && fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2 && 
    movingRect.y- fixedRect.y <= movingRect.width/2 + fixedRect.width/2 && fixedRect.y - movingRect.y <= movingRect.width/2 + fixedRect.width/2){
    fixedRect.shapeColor  = "red";
    movingRect.shapeColor  = "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  drawSprites();
}