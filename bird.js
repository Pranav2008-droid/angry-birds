class bird {
  constructor() {
    var options = {
        'isStatic' : true,
        'friction':1,
        'density':1.0
    }
    this.body = Bodies.rectangle(mouseX, mouseY, 10, 10, options);
    this.width = 10;
    this.height = 10;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(150,75,0);
    strokeWeight(5);
    stroke(0,0,255);
    rect(mouseX, mouseY, this.width, this.height);
    pop();
  }
};
