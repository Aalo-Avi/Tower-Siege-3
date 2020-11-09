const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;

var score = 0;

var blue1, blue2, blue3;

var pink1, pink2, pink3, pink4, pink5, pink6;

var polygon;

function setup() {

  createCanvas(800, 400);

  engine = Engine.create();
  world = engine.world

  ground = new Ground(170, 200, 320, 20);

  //first level
  pink1 = new PinkBox(220, 180, 20, 20);
  pink2 = new PinkBox(240, 180, 20, 20);
  pink3 = new PinkBox(260, 180, 20, 20);
  pink4 = new PinkBox(280, 180, 20, 20);
  pink5 = new PinkBox(300, 180, 20, 20);
  

  //second level
  blue1 = new BlueBox(240, 160, 20, 20);
  blue2 = new BlueBox(260, 160, 20, 20);
  blue3 = new BlueBox(280, 160, 20, 20);
  

  //third level
  pink6 = new PinkBox(260, 140, 20, 20);
  
  polygon = new poly(110, 100, 20, 20);

  sling = new Slingshot(polygon.body, { x: 70, y: 90 });

  Engine.run(engine);

}

function draw() 
{
  background(56, 44, 44);
  ground.display();

  
  blue1.display();
  blue2.display();
  blue3.display();
  
  pink1.display();
  pink2.display();
  pink3.display();
  pink4.display();
  pink5.display();
  pink6.display();
  
  blue1.score();
  blue2.score();
  blue3.score();
  
  pink1.score();
  pink2.score();
  pink3.score();
  pink4.score();
  pink5.score();
  pink6.score();

  polygon.display();

  sling.display();

  text("SCORE:"+score,750,40);
}

function mouseDragged() 
{
  Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY })
}

function mouseReleased() 
{
  sling.fly();
}

function keyPressed()
{
  if(keyCode === 32)
  {
    sling.attatch(this.polygon);
  }
}

score()
{
  if(this.visibility<0 && this.visibility>-105)
  {
    score++
  }
}
