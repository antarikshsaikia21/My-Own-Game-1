class Holes{

    constructor(x,y,r){
     this.x = x;
     this.y = y;
     this.r = r;
    }

    display(){
      fill("black");
      ellipse(this.x,this.y,this.r);
    }

}