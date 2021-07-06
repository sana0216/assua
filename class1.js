//unnamed
let Rectangle = class {
    constructor(height,width){
        this.height = height;
        this.width = width;
    }
};
console.log(Rectangle.name);
//output :"Rectangle"

let obj1 = new Rectangle(100,200);
console.log(obj1);