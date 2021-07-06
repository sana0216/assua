//creating an object using constructor fumction
function Employee(id,name,salary){ //notice E in caps
    this.id = id,
    this.name = name,
    this.salary = salary,
    this.age = -1;
}

var emp1 = new Employee(1,"sana",606060);
var emp2 =  new Employee(2,"madhu",505050);

console.log(typeof(emp1));
console.log(emp1.name);
console.log(emp2["name"]);

//adding new property to an existing object
emp1.city = "Bengaluru";
console.log(emp1.city);
console.log(emp2.city);
console.log(emp1.age);
console.log(emp2.age);
