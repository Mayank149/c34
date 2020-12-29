class Bird  {
  constructor(x,y){
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
  }
  this.body = Bodies.rectangle(x, y, 80,80, options);
  this.width = width;
  this.height = height;
  
  World.add(world, this.body);
    
  }

  display() {
    
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;

    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    ellipseMode(CENTER);
    ellipse(this.body.position.x,this.body.position.y,80,80);
    pop();
  



  }



}
