function isTouching(movingRect,fixedRect){

    if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
      && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 
      && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
      && fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2)
      {
        //movingRect.shapeColor="red";
      //fixedRect.shapeColor="red";
      return true;
    }
    else{
    //movingRect.shapeColor="green";
    //fixedRect.shapeColor="green";
    return false;
    }
  }

  function bounceOff(){
 if(car.x-wall.x<wall.width/2+car.width/2
    && wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX = (-1)*car.velocityX;
    }
else if(car.y-wall.y<car.height/2+wall.height/2
    &&wall.y-car.y<wall.height/2+car.height/2){
        car.velocityY = (-1)*car.velocityY;
    }
}
