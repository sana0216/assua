//named
let Rectangle = class Rectangle2 {
    constructor(height,width){
        this.height = height;
        this.width=width;
    }
};
console.log(Rectangle.name);
//output : "Recatangle2"

let obj = new Rectangle(500,600);
console.log(obj.height);