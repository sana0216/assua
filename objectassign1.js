//creating objects by using object literal i.e {}
function Car (color,make,name,speed,height,weight,size,mileage,fueltype){
    this.color = color;
    this.make = make;
    this.name = name;
    this.speed =speed;
    this.height = height;
    this.weight = weight;
    this.size = size;
    this.mileage = mileage;
    this.fueltype = fueltype;
}

var Car1 = new Car ('Red',2021,"Audi",50,200,500,14.7,18.78,"petrol");
var Car2 = new Car('Blue',2021,"Benz",20,600,700, 17.7,12.45,"diesel");
console.log(Car1);
console.log(Car2);

console.log(Car1.color);
console.log(Car2["name"]);

console.log(Car1.make,Car2.speed);

console.log(Car1.speed);
console.log(Car2["height"], Car1["weight"]);

console.log(Car2["color"]);
console.log(Car1.name);
console.log(Car1.height,Car2["weight"]);
 console.log(Car2["make"]);
 console.log(Car1["size"], Car2.mileage);

console.log(Car1["mileage"]);
console.log(Car2.name,Car2.mileage);
console.log(Car1.fueltype, Car2["fueltype"]);