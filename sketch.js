const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var log1;
var box3;
var pig2;
var log2;
var crow;

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    ground = new Ground(600,height,1200,20)
    pig1 = new pig(810,350);
    log1 = new log(810, 260,300, HALF_PI);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig2 = new pig(810,220);
    log2 = new log(810, 180,300, HALF_PI);
    crow = new bird();
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    crow.display();
    log1.display();
    pig1.display();
    box3.display();
    box4.display();
    log2.display();
    pig2.display();
    ground.display();
}