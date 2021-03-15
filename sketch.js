const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box,ball;
var log1,log2,log3,lo4,log5,log6;
var score = 0;
var backgroundImg;
var ground;

function preload() {
    backgroundImg = loadImage("sprites/Backgroung.jpg");
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;

    log1 = new Log(100,250,500, PI/2);
    log2 = new Log(150,300,500, PI/2);
    log3 =  new Log(200,350,500, PI/2);
    log4 = new Log(250,400,500, PI/7);
    log5 = new Log(300,450,500, -PI/7);
    log6 = new Log(350,550,500, PI/2);

    ball = new Ball(500,500);

    ground = new Ground(5,displayHeight-10,displayWidth*2,10);
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
   
    log1.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    log5.display();
    log6.display();
    ball.display();

    ground.display();
}
