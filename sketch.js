const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var player, treasure;
var block1, block2, block3;
var block4, block5, block6;
var block7, block8, block9;
var block10, block11, block12;
var block13, block14, block15;
var trap1;


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
  block1 = new Maze(500, 100, 900, 50);
  block2 = new Maze(500, 900, 900, 50);
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
  block11 = new Maze(950, 250, 50, 350);
  block12 = new Maze(950, 750, 50, 350);

  //
  block13 = new Maze(850, 585, 200, 20);
  block14 = new Maze(750, 525, 20, 450);
  block15 = new Maze(950, 750, 50, 350);


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

  block13.display();
  block14.display();
  block15.display();


  // if(480 < player.body.x < 520 && 480 < player.body.y < 520) {
  //   console.log(player.body.x + "," + player.body.y)
  //   player.reset();
  // }

  var collition = Matter.Detector.canCollide(player, trap1);
  console.log(collition);

  // var collitionTreasure = Matter.SAT.collides(player, treasure).collided;
  // console.log(collitionTreasure);

}

function mouseDragged() {
  Matter.Body.setPosition(player.body, {x: mouseX, y: mouseY});

}
