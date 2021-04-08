class Paper{
    constructor(x,y,radius){
       this.options = {
           isStatic:false,
           restitution: 0.3,
           density: 1.2,
           friction: 0
       }
       this.radius = radius;
       this.body = Bodies.circle(x,y,this.radius,this.options);
       World.add(world,this.body);
       this.image = loadImage("paper.png");
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        this.paper = image(this.image,0,0,50,50);
        pop();
    }

}