class Base{
    constructor(x,y,w,h){
    var option={isStatic:true}
    this.body=Bodies.rectangle(x,y,w,h,option)
    this.w=w
    this.h=h
    this.color=color
    World.add(world,this.body)
    }
    show(){
        var pause=this.body.position
        push ()
        translate (pause.x,pause.y)
        rectMode(CENTER)
        fill("brown")
        rect (0,0,this.w,this.h)
        pop ()
    }
}
