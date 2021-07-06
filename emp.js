var emp1 = {
    id:123,
    name:'sana',
    salary:707070
}

var emp2 = emp1;

emp2.salary = 808080;

console.log(emp1.salary);
console.log(emp2.salary);