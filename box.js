class Box
{
     //constructor are used to declare the properties of object 
   constructor(x,y,width,height)
  
   {
     var options={
       'density':1.0,
       'friction':0.3,
       'restitution':0.8     
    }
     //create object
      this.body =Bodies.rectangle(x,y,width,height,options);
      this.width=width;
      this.height=height;
      World.add(world,this.body);
     
     
   }
                                          
   //shape to object-initializing the property
   display()
   {
    var pos=this.body.position;
    var angle=this.body.angle;
// to have a new changes
    push();
    translate(angle);
    //rotate in the angle
    rotate(angle);
    rectMode(CENTER);
    
     //fill inside
    fill("blue");
    stroke("yellow");
    strokeWeight(4) ;
    rect(pos.x,pos.y,this.width,this.height);
    // old changes to be retrived
    pop();
   }





}