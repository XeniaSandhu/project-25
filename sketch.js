const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;
var binImg,bin;

function preload(){
	binImg=loadImage("dustbin.png");
}

function setup() {

	var canvas=	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	ground=new Ground();
	crumpledPaper= new Paper();

	bin=createSprite(964,493,20,20);
	bin.addImage(binImg);
	bin.scale=1.5;

}

function draw() {
  background("yellow");
  Engine.update(engine);

  ground.display();
  crumpledPaper.display();
  
  drawSprites();

}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:430,y:-975});
		if(crumpledPaper.x<1000){
			crumpledPaper.static=true;
		}
	}
}



