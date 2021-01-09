class Paper{
    constructor(){
        var options={
            isStatic:false,
            restituiton:0,
            friction:0,
            density:10
        }
        this.body=Bodies.circle(250,540,20,options);
        this.width=90;
        this.image=loadImage("paper.png");
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        fill("red");
        rotate(angle);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,75,60);   
        pop();
    }
}