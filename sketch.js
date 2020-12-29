const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;

var engine,world;
var ball,chain;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b15,b16,b17,b18,b19,b20,b21,b22,b23;

var ground;

function setup(){

createCanvas(3000,800);

engine = Engine.create();
world = engine.world;

 ground = new Ground(600,600,1200,20);

 b1 = new Box(900,10,70,80);
 b2 = new Box(900,50,70,80);
 b3 = new Box(900,100,70,80);
 b4 = new Box(900,150,70,80);
 b5 = new Box(900,200,70,80);
 b6 = new Box(900,250,70,80);
 b7 = new Box(900,300,70,80);
 b8 = new Box(900,350,70,80);
 b9 = new Box(900,400,70,80);
 b10 = new Box(800,50,70,80);
 b11 = new Box(800,100,70,80);
 b12 = new Box(800,150,70,80);
 b13 = new Box(800,200,70,80);
 b14 = new Box(800,250,70,80);
 b15 = new Box(700,10,70,80);
 b16 = new Box(700,50,70,80);
 b17 = new Box(700,100,70,80);
 b18 = new Box(700,150,70,80);
 b19 = new Box(700,200,70,80);
 b20 = new Box(700,250,70,80);
 b21 = new Box(700,0,70,80);
 b22 = new Box(800,0,70,80);
 b23 = new Box(800,350,70,80);

 ball = new Bird(500,50);
 

 chain = new SlingShot(ball.body,{x:200,y:50})




}

function draw(){
      
    Engine.update(engine);

    background("lightblue");


    ground.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    b17.display();
    b18.display();
    b19.display();
    b20.display();
    b21.display();
    b22.display();
    b23.display();
    chain.display()
    ball.display();

   

}


