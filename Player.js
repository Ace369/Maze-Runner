class Player{
    constructor() {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(800, 500, 100, 100, options);
        this.width = 100;
        this.height = 100;
        this.image = loadImage("player.png")
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        imageMode(CENTER); 
        image(this.image, pos.x, pos.y, this.width, this.height);
        pop ();
        
    }

}