const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var engine,world;
var ground,bridge,zombie ,zom,zom1,zom2,zom3,zom4;
var jointpoint,jointlink;
var bbutton,bk_Image,leftwall,rightwall;
var stones=[]


function preload( ){
zom1=loadAnimation ("assets/zombie1.png")
zom2=loadAnimation ("assets/zombie2.png")
zom3=loadAnimation ("assets/zombie3.png")
zom4=loadAnimation ("assets/zombie4.png")

bk_Image=loadImage ("assets/background.png")



}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  ground=new Base(0,height-10,width*2,20)
  leftwall=new Base(100,height-300,200,height/2+100)
  rightwall=new Base(width-100,height-300,200,height/2+100)
  bridge=new Bridge(30,{x:50,y:height/2-140})
  jointpoint=new Base(width-250,height/2-100,40,20)
  Matter.Composite.add(bridge.body,jointpoint)
  jointlink=new Link(bridge,jointpoint)
  for(var i=0;i<=8;i++){
    var x=random(width/2-200,width/2+300)
    var y=random(-100,100)
    var stone=new Stone(x,y,80,80)
    stones.push(stone)
  }
  zombie=createSprite(width/2,height-100)
  zombie.addAmimation("lefttoright",zom1,zom2,zom1)
  zombie.addAmimation("righttoleft",zom3,zom4,zom3)
}
function draw() {
  background(51);
  Engine.update(engine);
  bridge.show()
  for(var stone of stones){
    stone.show()
  }
  if(zombie.position.x>=width-300){
    zombie.velocityX=-10
    zombie.changeAnimation("righttoleft")
  }
  drawSprities()
}
