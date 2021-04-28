class Trap{
    constructor(x, y) {
        var options = {
            //isStatic: true
            density: 0.2,
            restitution: 1.5
        }
        this.body = Bodies.rectangle(x, y, 20, 20, options);
        this.width = 20;
        this.height = 20;
        World.add(world, this.body);
    }


    display() {
        if(this.body.position.x < 950) {
        var pos = this.body.position;
        push();
        noStroke(0);
        // fill(255, 0, 0)
        fill(40, 190, 190);
        // fill(10, 165, 225);
        rectMode(CENTER); 
        rect(pos.x, pos.y, this.width, this.height);
        pop ();
        }
    }

}