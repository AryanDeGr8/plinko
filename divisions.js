class Divisions {
    constructor(x, y, w, h) {
        var options = {

            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }
    display() {
        var divPos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(divPos.x, divPos.y, this.w, this.h);
    }
};