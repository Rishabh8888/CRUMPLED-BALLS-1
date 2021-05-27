const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine , world ;
function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
      
    paper = new Paper(100,600,20) ;
	
    ground = new Ground(400,680,800,20) ;

	  leftside = new Dustbin(700,690,120,20) ;
	  middle = new Dustbin(760,650,20,120) ;
	  rightside = new Dustbin(630,650,20,120) ;
	
    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  leftside.display() ;
  middle.display() ;
  rightside.display() ;
 
  ground.display() ;
  paper.display() ;


  Engine.update(engine)
 
  drawSprites();

}

function keyPressed() {
     if(keyCode === UP_ARROW) {
		 Matter.Body.applyForce(paper.body,paper.body.position,{x:15 , y:-15})
	 }
}

