const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var player, treasure;
var block1, block2, block3;
var block4, block5, block6;
var block7, block8, block9;
var block10, block11, block12;
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

  //Outer walls
  block1 = new Maze(450, 100, 800, 50);
  block2 = new Maze(450, 900, 800, 50);
  block3 = new Maze(50, 500, 50, 850);

  //Near the Treasure
  block4 = new Maze(400, 500, 20, 500);
  block5 = new Maze(150, 400, 200, 20);
  block6 = new Maze(300, 550, 200, 20);

  //Traps
  block7 = new Maze(150, 250, 200, 20);
  block8 = new Maze(250, 800, 20, 200);
  block9 = new Maze(500, 400, 200, 20);

  //
  block10 = new Maze(600, 650, 20, 200);
  block11 = new Maze(150, 400, 200, 20);
  block12 = new Maze(300, 550, 200, 20);


}

function draw() {
  background(50, 200, 200);
  
  player.display();
  treasure.display();
  trap1.display();

  block1.display();
  block2.display();
  block3.display();

  block4.display();
  block5.display();
  block6.display();

  block7.display();
  block8.display();
  block9.display();

  block10.display();
  block11.display();
  block12.display();

}

// function mouseDragged() {
//   Matter.Body.setPosition(player.body, {x: mouseX, y: mouseY});

// }
