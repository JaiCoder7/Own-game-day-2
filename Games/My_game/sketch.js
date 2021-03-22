var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 var background_Img, man_img, man_dying, man_attack, man,invis_sprite,question,questionI;

function preload(){

  background_Img=loadImage("images/download.jpeg");
 man_img=loadImage("images/knight.png");
  man_dying=loadImage("images/knight.png");
  man_attack=loadImage("images/knight.png");
questionI = loadImage("images/question.png");
}

function setup() {
  createCanvas(displayWidth*2,displayHeight*2);
  engine = Engine.create();
  world = engine.world;
  
var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12;

m1 = createSprite(800,300,10,500);
m2 = createSprite(450,700,700,10);
m3 = createSprite(450,50,700,10);
m4 = createSprite(100,450,10,500);
m5 = createSprite(600,600,10,200);
m6 = createSprite(400,550,10,300);
m7 = createSprite(200,600,10,200);
m8 = createSprite(350,400,100,10);
m10 = createSprite(550,500,100,10);
m11 = createSprite(750,400,100,10);
m12 = createSprite(750,150,100,10);
m13= createSprite(500,400,10,400);
m14= createSprite(550,300,100,10);
m15= createSprite(350,600,100,10);
m16= createSprite(400,150,10,200);
m17= createSprite(350,250,100,10);
m18= createSprite(300,225,10,50);
m19= createSprite(150,200,100,10);
m20= createSprite(150,300,100,10);
m21= createSprite(750,150,100,10);
m22= createSprite(750,150,100,10);
m23= createSprite(750,150,100,10);
m24= createSprite(750,150,100,10);
m25= createSprite(750,150,100,10);
m26= createSprite(750,150,100,10);
m27= createSprite(750,150,100,10);
invis_sprite = createSprite(3000,0,500,500);
invis_sprite.visible=false;
question = createSprite(2800,200,500,500);
question.addImage("questioning", questionI);
question.visible = false;
question.scale = 2;

//var background_display = createSprite(750,400,20,20);
 man = createSprite(3000,100,20,20);



  //background_display.addImage("Thebackground",background_Img);
  //background_display.scale = 2;
  man.scale = 0.10;
 man.addImage("walking",man_img);
  
  
}
 


function draw() {
  background("black");
 
  Engine.update(engine);
  if(man.isTouching(invis_sprite)){

  question.visible = true;

  }


drawSprites();
}