var picka, pickaImg, picka1Img; 
var char, charImg; 
var bolt, boltImg; 
var flame, flameImg, char2Img; 

var pickaSound; 
var charSound; 

function preload(){
  pickaImg = loadImage("pickachu1.jpg"); 
  picka1Img = loadImage("picka2.jpg")
  charImg = loadImage("char1.png"); 
  boltImg = loadImage("bolt1.jpg"); 
  char2Img = loadImage("char2.png");
  flameImg = loadImage("flame1.png");

  pickaSound = loadSound("Attack.mp3"); 
  charSound = loadSound("charAttack.mp3"); 
}

function setup(){
  createCanvas(1000,400); 
   
  picka = createSprite(920,200,10,10); 
  picka.addImage(pickaImg); 

  char = createSprite(150,200,10,10); 
  char.addImage(charImg); 
  char.scale = 0.3; 
  
  bolt = createSprite(800,200,10,10); 
  bolt.addImage(boltImg); 
  bolt.visible = false; 
  bolt.scale = 0.1; 

  flame = createSprite(350,200,10,10); 
  flame.addImage(flameImg); 
  flame.scale = 0.6;
  flame.visible = false;  
}

function draw(){
  background("white"); 

  /*if(keyDown("space")){
    picka.velocityX = -2; 
  }*/

  if(keyDown("space")){
    pickaSound.play(); 
    picka.addImage(picka1Img); 
    bolt.visible = true; 
    bolt.velocityX = -2; 

    charSound.play();
    char.addImage(char2Img); 
    char.scale = 0.8; 
    flame.visible = true; 
    flame.velocityX = 2;
  }

  drawSprites(); 
}