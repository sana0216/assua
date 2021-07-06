//creating object using new key word /Object() Constructor 
var myCar = new Object();//Object Condtructor
myCar.name = "Benz";
myCar.model = 2020;
myCar.color = "black";
myCar.speed = 0;
myCar.move = function() {
    this.speed++;
}

console.log(myCar.name);
console.log(myCar["model"]);
console.log(myCar.color);
myCar.move();

console.log(myCar.speed);
