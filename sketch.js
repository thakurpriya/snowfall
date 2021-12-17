const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;


var world, engine;
var flake1 = [];
var flake2 = [];
var flake3 = [];

var bgImg;


function preload(){
bgImg = loadImage("snow2.jpg")
}

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(windowWidth,windowHeight);
  
}

function draw() {
  Engine.update(engine);
  background(bgImg); 
  
  

  if(frameCount%180===0){
    flake1.push(new Snow(random(width/2-350, width-40), 0,random(20, 60)));
  }

 for (var j = 0; j < flake1.length; j++) {
  
    flake1[j].display1();
  }
 
 //---------------------------------------------------------------------------------------------
  if(frameCount%90===0){
    flake2.push(new Snow(random(150, width-40), 10,70));
  }

 for (var j = 0; j < flake2.length; j++) {
  
    flake2[j].display2();
  }
  //---------------------------------------------------------------------------------------------

  if(frameCount%130===0){
    flake3.push(new Snow(random(10, width-40), -30,90));
  }

 for (var j = 0; j < flake3.length; j++) {
  
    flake3[j].display3();
  }
 
 
 
 
 
  drawSprites();
}
