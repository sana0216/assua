var emp1 = {
    id:123,
    name:'sana',
    salary:707070
}

var emp2 = {}


emp2.id = emp1.id;
emp2.nmae = emp1.name;
emp2.salary = emp1.salary;

emp2.salary = 808080;


console.log(emp1.salary);
console.log(emp2.salary);