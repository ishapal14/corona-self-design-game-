class Virus{
    constructor(x,y,width,height){
        var option = {
            isStatic:false
        }
        this.image = loadImage("assets/virus_1.png")
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(x,y,this.width,this.height,option)
        World.add(world,this.body)

     
    }
    display(){
 var pos = this.body.position
 var angle = this.body.angle
 push()
 translate(pos.y,pos.x)
 rotate(angle)
 imageMode(CENTER)
 image(this.image,0,0,this.width,this.height)
 pop()
    }
}