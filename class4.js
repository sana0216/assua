class Point {
    constructor(x,y) {
        this.x=x;
        this.y = y;
    }

    static displayname = "Point";
    static distance(a,b){
        const dx = a.x-b.x;
        const dy = a.y - b.y;
        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5,5);
const p2 = new Point(10,10);
console.log(p1.displayName);//undefined
console.log(p2.distance);//undefined
console.log(p2.displayName);//undefined
console.log(p2.distance);//undefined

//Calling static properties and methods without creating instance:
console.log(Point.displayName);//"Point"
console.log(Point.distance(p1,p2));//7.0710678118654755