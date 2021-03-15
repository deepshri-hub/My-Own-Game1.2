class Log{
  constructor(x,y,height,angle){
      var options = {
          'restitution': false
      }
      this.body = Bodies.rectangle(x,y,25,height,angle,options);
      this.width = 25;
      this.height = height;
      this.image = loadImage("sprites/wood2.png");;
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
}