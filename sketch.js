
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(900, 800);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
	isStatic: false,
	restitution: 0.3,
	friction: 0,
	density: 1.2
	};

	//Create the Bodies Here.
	Matter.Bodies.circle(600, 10, 15, ball_options);
   World.add(world, ball);

   groundObj = new Ground(200, 790, 900, 10);
   leftSide = new Ground(300, 780, 10, 30);
   rightSide = new Ground(350, 780, 10, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  groundObj.display();
  leftSide.display();
  rightSide.display();

  Engine.update(engine);

 
}



