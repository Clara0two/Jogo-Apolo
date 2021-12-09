
var pista
var repita
var trombadinha 
var trbd
function preload(){
  //imagens pré-carregadas
  repita=loadImage("path.png")
  trbd=loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png")
}

function setup(){
  createCanvas(400,400);
  //crie os sprites aqui
 pista=createSprite(200,200)
 pista.addImage(repita)
 trombadinha=createSprite(200,320)
 trombadinha.addAnimation("Ana",trbd)
}

function draw() {
  background(0);
 drawSprites()
 pista.velocityY=3
 if(pista.y>400){
pista.y=pista.height/200
 }
}
