var fixedRect,movingRect;
var fixedRect1;
var car,wall;

function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  fixedRect1 = createSprite(350,125,70,60);
  car = createSprite(250,270,45,45);

  car.shapeColor = 'red'
  
  wall = createSprite(700,270,20,80);
  wall.shapeColor = 'brown';

  car.velocityX = 5;
}


function draw() {
  background("black");  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  bounceOff();
  
  if(isTouching(movingRect,fixedRect)){
  fixedRect.shapeColor = 'cyan';
  movingRect.shapeColor = 'blue';
  }
  else if(isTouching(movingRect,fixedRect1)){
  movingRect.shapeColor = "green";
  fixedRect1.shapeColor = 'white';
  }


  else{
  textSize(20);
  text("Not Touching",100,100);
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue";
  fixedRect1.shapeColor = "blue";
  }
  drawSprites();
}
