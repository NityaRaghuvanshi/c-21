
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(900, 500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  var balls_options={
	  isStatic:true,
	  restitution:0.3,
	  friction:0,
	  density:1.2
  }
  ball=Bodies.circle(300,100,2,balls_options);
  World.add(World,ball);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



