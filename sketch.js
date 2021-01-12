//Create variables
var movingRect, fixedRect ;
function setup() {
  createCanvas(800,400);
  //Create sprite for fixed rectangle
  fixedRect = createSprite(200, 200, 50, 100);
  //Add colour to fixed rectangle
  fixedRect.shapeColor = "green";
  //Create sprite for moving rectangle
  movingRect = createSprite(700,200,50,50);
  //Add colour to moving rectangle
  movingRect.shapeColor = "green";

}

function draw() {
  background("blue");  
  
  //Move the moving rectangle with the mouse
  movingRect.x = mouseX ;
  movingRect.y = mouseY ;

  //Check for collision
  if ((movingRect.x-fixedRect.x <= (fixedRect.width/2+movingRect.width/2)) &&
      (fixedRect.x - movingRect.x <= (fixedRect.width/2+movingRect.width/2))&&
      (movingRect.y-fixedRect.y <= (fixedRect.height/2+movingRect.height/2)) &&
      (fixedRect.y - movingRect.y <= (fixedRect.height/2+movingRect.height/2))) {
    fixedRect.shapeColor = "red" ;
    movingRect.shapeColor = "red" ;
  } else {
    fixedRect.shapeColor = "green" ;
    movingRect.shapeColor = "green" ;
  }




  drawSprites();
}