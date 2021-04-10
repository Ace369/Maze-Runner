class Trap{
    constructor(x, y) {
        var options = {
            //isStatic: true
            restitution: 2.0
        }
        this.body = Bodies.rectangle(x, y, 20, 20, options);
        this.width = 20;
        this.height = 20;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        noStroke(0);
        // fill(255, 0, 0)
        fill(10, 165, 225);
        rectMode(CENTER); 
        rect(pos.x, pos.y, this.width, this.height);
        pop ();
        
    }

}