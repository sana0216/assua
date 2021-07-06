var emp1 = {
    id:123,
    name:'sana',
    salary:707070
}

var emp2 = {};
Object.assign(emp2,emp1);

console.log(emp1);
console.log(emp2);

emp2.id = 10000;

console.log(emp1);
console.log(emp2);