//Example 3:
function Employee(id,name,salary){
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.age = -1;
}

emp1 = new Employee(123,"Sana",505050);
emp1.city ="Bengaluru"; //emp wil not get the 
//proprrty city

emp2 = new Employee(111,"Madhu",606060);

console.log(emp1);
console.log(emp2);
