var fixo, movendo;

function setup() {
  createCanvas(800,400);
  fixo = createSprite(600,200,50,100);
  movendo = createSprite(200,200,90,90);

  fixo.shapeColor = "green";
  movendo.shapeColor = "green";

  fixo.debug = true;
  movendo.debug = true;
}

function draw() {
  background(255,255,255);  
  // fixo.width/2 + movendo.width/2 - > referencia para o limite de se encostarem
  if( fixo.x - movendo.x < fixo.width/2 + movendo.width/2 ){
    fixo.shapeColor = "red";
    movendo.shapeColor = "red";
  }
  else{
    fixo.shapeColor = "green";
    movendo.shapeColor = "green";
  }
  movendo.x = mouseX;

  drawSprites();
}