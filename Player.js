class Player{
    constructor() {
        var options = {
            restitution: 0,
            friction: 0.1,
            density: 0.5
            //isSensor: true
        }
        this.body = Bodies.rectangle(900, 475, 90, 90, options);
        this.width = 100;
        this.height = 100;
        this.image = loadImage("player.png")
        //this.isColliding = true;
        World.add(world, this.body);
    }

    reset() {
        var pos = this.body.position;

        pos.x = 900;
        pos.y = 475;

    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        //rotate(angle);
        imageMode(CENTER); 
        image(this.image, 0, 0, this.width, this.height);
        pop ();
        
        // if(keyDown(LEFT_ARROW)) {
        //     pos.x = pos.x - 10;
        // }
        // if(keyDown(RIGHT_ARROW)) {
        //     pos.x = pos.x + 10;
        // }
        // if(keyDown(DOWN_ARROW)) {
        //     pos.y = pos.y + 10;
        // }
        // if(keyDown(UP_ARROW)) {
        //     pos.y = pos.y - 10;
        // }
    }

}