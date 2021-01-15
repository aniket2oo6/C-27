class constraint1{

    constructor(bodyA,bodyB,length,stiffness){

        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            length: length,
            stiffness: stiffness
        }
        this.length = length;
        this.stiffness = stiffness;
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }

    display(){

        var a = this.chain.bodyA.position;
        var b = this.chain.bodyB.position;

        push();
        strokeWeight(3);
        line(a.x,a.y,b.x,b.y);
        pop();
    
    }
}