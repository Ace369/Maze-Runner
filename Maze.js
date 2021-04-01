class Maze{
    constructor(x, y, width, height) {
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 0.1,
            density: 0.5
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        noStroke(0);
        fill(235, 200, 100);
        rectMode(CENTER); 
        rect(pos.x, pos.y, this.width, this.height);
        pop();
        
    }

}