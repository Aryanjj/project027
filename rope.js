class Rope {
    constructor(body, point) {
        var options = {
            bodyA: body,
            pointB: point,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = point;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    // fly() {
    //     this.slingshot.bodyA = null;
    // }

    display() {

        var start = this.rope.bodyA.position;
        var end = this.pointB;
        strokeWeight(4);
        line(start.x, start.y, end.x, end.y);


    }

}