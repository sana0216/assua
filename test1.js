function Car(color,make){
   this.color=color;
   this.make=make;
}

var Car1 = new Car('blue',2021);
var Car2 = new Car('white',2020);

console.log(Car1);
console.log(Car2);

console.log(Car1.make);
console.log(Car2.color);
