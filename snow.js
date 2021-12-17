
class Snow{
    constructor(x,y,r){

        var options = {
            frictionAir: 0.05
        }

        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body);
        this.r = r;
        this.image1= loadImage("snow4.webp");
        this.image2= loadImage("snow5.webp");



    }

    display1(){
        var pos= this.body.position;
        var angle = this.body.angle;
        var rand = Math.round(random(1,2));
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        if(rand === 1){
            image(this.image1,0,0,this.r,this.r);
        }
        else{
            image(this.image2,0,0,this.r,this.r);
        }
        pop();
    }

    display2(){
        var pos= this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        image(this.image1,0,0,this.r,this.r);
        pop();
    }

    display3(){
        var pos= this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        image(this.image2,0,0,this.r,this.r);
        pop();
    }
}