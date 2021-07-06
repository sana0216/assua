//Example
function Employee(id,name,salary){
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.age = -1;
}

emp1 = new Employee(123,"Anjum",505050);
emp1.city = "Chennai"; //emp2 will not get the
//property city

emp2 = new Employee(111,"Madhu",606060);

console.log(emp1);
console.log(emp2);
