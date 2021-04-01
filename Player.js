class Player{
    constructor() {
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 0.1,
            density: 0.5
            //isSensor: true
        }
        this.body = Bodies.rectangle(800, 500, 100, 100, options);
        this.width = 100;
        this.height = 100;
        this.image = loadImage("player.png")
        //this.isColliding = true;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        imageMode(CENTER); 
        image(this.image, pos.x, pos.y, this.width, this.height);
        pop ();
        
        if(keyDown(LEFT_ARROW)) {
            pos.x = pos.x - 10;
            // Matter.Body.setPosition();
        }
        if(keyDown(RIGHT_ARROW)) {
            pos.x = pos.x + 10;
        }
        if(keyDown(DOWN_ARROW)) {
            pos.y = pos.y + 10;
        }
        if(keyDown(UP_ARROW)) {
            pos.y = pos.y - 10;
        }
    }

}