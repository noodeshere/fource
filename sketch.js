
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	dropBox1 = Bodies.rectangle(600, 640, 110, 10 , {isStatic:true} );
	World.add(world,dropBox1 );
	dropBox2= Bodies.rectangle(550, 600, 10, 110 , {isStatic:true} );
	World.add(world, dropBox2);
	dropBox3= Bodies.rectangle(650, 600, 10, 110 , {isStatic:true} );
	World.add(world, dropBox3);
	groundSprite=createSprite(width/2, 650, width,10,);
	dropbox=createSprite(600,640,110,10)
	dropbox2=createSprite(550,600,10,110)
	dropbox2=createSprite(650,600,10,110)
	Engine.run(engine);
	ball = Bodies.circle(100, 550,  10 );
	World.add(world, ball);
	var render = Matter.Render.create({ element:document.body, engine: engine, options: 
		{ width: 800, height: 700,  showAngleIndicator: true, wireframes:false, }, }); Matter.Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(CENTER)
  fill("red")
  ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();
 
}

function keyPressed(){
	console.log("fu")
	if(keyCode===UP_ARROW){
		console.log("if")
		
		Matter.Body.applyForce(ball,ball.position,{x:100,y:-200})
		 }
}

