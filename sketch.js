var helicopterIMG, helicopter,packageIMG;
var packageBody,ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var myEngine,myWorld;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	//rectMode(CENTER);
	myEngine = Engine.create();
	myWorld = myEngine.world;
	
    packageBody = Bodies.rectangle(width/2,200,50,50,{restitution:1, isStatic:true});
	//packageSprite=createSprite(width/2, 80, 10,10); //to create the package sprite
	//packageSprite.addImage(packageIMG)
	//packageBody.scale=0.2;
	World.add(myWorld,packageBody);

	//helicopterSprite=createSprite(width/2, 200, 10,10); //to create the helicopter sprite
	//helicopterSprite.addImage(helicopterIMG)
	//helicopterSprite.scale=0.6

	helicopter = Bodies.rectangle(width/2,200,50,50,{isStatic:true});
	World.add(myWorld,helicopter);

	//groundSprite=createSprite(width/2, height-35, width,10);// to create the ground sprite
	//groundSprite.shapeColor="brown"


	//myEngine = Engine.create(); //to link my engine to matter.js engine
	//myWorld = myEngine.world; //to add my world to my engine

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});//to link the package sprite created to matter.js
	//World.add(myWorld, packageBody);//to add the package to my world
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, 800, 20 , {isStatic:true} );//to link the ground sprite created to matter.js
 	World.add(myWorld, ground);//to add the ground to my world


	//Engine.run(myEngine);
  
}


function draw() {
  //rectMode(CENTER);
  background("skyblue");
  Engine.update(myEngine);
  imageMode(CENTER);
  image(packageIMG,packageBody.position.x,packageBody.position.y,50,50);
  image(helicopterIMG,helicopter.position.x,helicopter.position.y,250,200);
  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20)

  //packageSprite.x= packageBody.position.x 
  //packageSprite.y= packageBody.position.y 
  //drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false);
  }
}



