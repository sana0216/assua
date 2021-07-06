var car1 = {
     color:'blue',
     make:2021,
};
var car2 = car1;

car2 = car1;

car2.make = 2020;

console.log(car1.make);
console.log(car2.make);