class Ground {
 constructor(x,y,angle,height){
     var options = {
         isStatic: true ,
         'restitution' : 0,
         'friction' : 0 ,
         'density' : 1 
     }
    this.body = Bodies.rectangle(x,y,width,height,options) ;
    this.height = height ;
    this.width = width ;

    World.add(world,this.body)
}
    display() {
        rectMode(CENTER) ;
        fill(255) ;
        rect(this.body.position.x,this.body.position.y,this.height,this.width) ;
    }
}