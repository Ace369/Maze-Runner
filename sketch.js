const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var player, treasure;
var trapGroup;


function preload(){
  
}

function setup() {
  createCanvas(1000, 1000);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  player = new Player();
  treasure = new Treasure();
  trap1 = new Trap(500, 500);

  // treasureImg.addImage(treasureImg);
}

function draw() {
  background(180);
  
  player.display();
  treasure.display();
  trap1.display();
}