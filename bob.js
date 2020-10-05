class Bob {
    constructor(x, y, radius) {
        var options = {
            isStatic: true,
            restitution: 0.3,
            friction: 0.5,
            density: 4
        }
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x, this.y, this.radius, options);


        World.add(world, this.body);
    }
    display() {
        // circleMode(CENTER);
        fill("red");
        circle(this.body.position.x, this.body.position.y, this.radius);
    }

}