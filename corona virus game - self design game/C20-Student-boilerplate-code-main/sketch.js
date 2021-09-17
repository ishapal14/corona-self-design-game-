
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var gunman;
var virus,virusGroup
var human,humanGroup
function preload(){
  bg_img = loadImage("assets/bg_1.jpg")
  gunmanImg_1 = loadImage("assets/gunman_1.png")
  gunman_shoot = loadAnimation("assets/gunman_2.png","assets/gunman_3.png","assets/gunman_4.png")
  humanImg_1 = loadImage("assets/human_1.png")
  humanImg_2 = loadImage("assets/human_2.png")
  humanImg_3 = loadImage("assets/human_3.png")
  humanImg_4 = loadImage("assets/human_4.png")
  humanImg_5 = loadImage("assets/human_5.png")
  humanImg_6 = loadImage("assets/human_6.png")
  virusImg_1 = loadImage("assets/virus_1.png")
  virusImg_2 = loadImage("assets/virus_2.png")
  virusImg_3 = loadImage("assets/virus_3.png")
  virusImg_4 = loadImage("assets/virus_4.png")
  virusImg_5 = loadImage("assets/virus_5.png")
  bullet = loadImage("assets/bullet.png")
}

function setup() {
  createCanvas(1600,800);

  engine = Engine.create();
  world = engine.world;
  gunman = createSprite(100,680,10,10);
  gunman.addImage(gunmanImg_1)
  gunman.addAnimation("shooting",gunman_shoot)
  gunman.scale = 0.5
  virusGroup = new Group()
  //human = new Human(600,500,10,10)
  humanGroup = new Group()
  bulletGroup = new Group()

  
}

function newVirus() {
   if(frameCount%300===0 && virusGroup.length<10){
      var virus= new Virus(1500,random(100,200),50,50);
       virusGroup.push(virus);
      } for (var i = 0; i < virusGroup.length; i++)
      { } }

function draw() 
{
  background(bg_img);
  Engine.update(engine);
  gunman.setVelocity(1,0)
  newVirus();

  for (var i = 0; i < virusGroup.length; i++) 
  { showVirus(virusGroup[i], i);
  }
 // human.display();
  drawSprites()
  
  
}

function showVirus(virus, index) { 
  Matter.Body.setVelocity(virus.body,{x:-0.9,y:+0.2} ); 
  virus.display(); 
}

