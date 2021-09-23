class Stone{
    constructor(x,y,w,h){
    var option={restitution:1}
    this.body=Bodies.rectangle(x,y,w,h,option)
    this.w=w
    this.h=h
    this.image=loadImage("assets/stone.png")
    World.add(world,this.body)
    }
    show(){
        var pause=this.body.position
        var angle=this.body.angle
        push ()
        translate (pause.x,pause.y)
        rotate (angle)
        imageMode(CENTER)
        
        image (this.image,0,0,this.w,this.h)
        pop ()
    }
}