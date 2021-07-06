var myCar1 = {
    name:"benz",
    color:"blue",
    model:2021,
    speed:80,
    fueltype:"petrol",
    price:3000000,
    mileage:18.79,
    gearbox:"manual",
    start: function(){
        console.log('Car is moving');
    },
    move: function(){
        console.log('Car is moving');
    },
    stop: function(){
        console.log('Car is stopped');
    }
};


var myCar2 = {
    name:"Duster",
    color:"balck",
    model:2019,
    speed:80,
    fueltype:"diesel",
    price:4000000,
    mileage:12.89,
    gearbox:"manual",
    start: function(){
     console.log('Car is started');
},
     move: function(){
         console.log('Car is moved');
     },
     stop: function(){
         console.log('Car is stopped');

     }
};

console.log(myCar1.model);
console.log(myCar2.color);
myCar2.stop();
myCar1.move();

console.log(myCar2["price"], myCar1.name);
console.log(myCar2["name"]);
myCar1.move()
myCar2.start();


console.log(myCar1.mileage);
console.log(myCar1["fueltype"] ,myCar2["mileage"]);
console.log(myCar1.price,myCar2.gearbox,myCar2["fueltype"]);
myCar1.start();
console.log(myCar1["color"], myCar2.speed);
console.log(myCar1.speed,myCar2["model"]);
console.log(myCar1.mileage);

myCar2.move();
myCar1.stop();