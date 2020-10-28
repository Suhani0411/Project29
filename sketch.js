var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,gr,polygon,polysprite,sling;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;




function setup() {
  createCanvas(800,400);
  engine = Engine.create();
	world = engine.world;
 // createSprite(400, 200, 50, 50);
gr=new Ground(400,390,800,20);

//polysprite=createSprite(100,200,20,20) ;
//polysprite.shapeColor=color(255,255,255);

//polygon=Bodies.circle(50,200,20);
//polygon.shapeColor=color(255,255,255);
//World.add(world,polygon);

polysprite=createSprite(50,350,20,20);
polysprite.shapeColor=color(255,0,0);
polygon = Bodies.rectangle(400, 665, 200, 20 );
World.add(world, polygon);


sling=new SlingShot(this.polygon,{x:100,y:200});


b1=new Ground(375,340,190,60)

b8=new Box(330,235,30,40);
b9=new Box(360,235,30,40);
b10=new Box(390,235,30,40);
b11=new Box(420,235,30,40);
b12=new Box(450,235,30,40);

b13=new Box(360,195,30,40);
b14=new Box(390,195,30,40);
b15=new Box(420,195,30,40);

b16=new Box(390,155,30,40);



  Engine.run(engine);

}

function draw() {
  background("black");  
  gr.display();
  //console.log(polygon.x,polygon.y);

  polysprite.x= polygon.position.x ;
  polysprite.y= polygon.position.y ;
  

 b1.display();
 b8.display();
 b9.display();
 b10.display();
 b11.display();
 b12.display();
 b13.display();
 b14.display();
 b15.display();
 b16.display();
 


  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}