function Employee(id,name, salary, age,qualification){
    this.id=id;
    this.name=name;
    this.salary=salary;
    this.age=age;
    this.qualification=qualification;
    this.dowork = function(){
        console.log(this.name + 'is doing work');
    },
    this.doSomething = function(){
        console.log(this.name + 'is doing something' );
    }
    }


emp1= new Employee(123,"Sana",50500,22,"degree");
emp1.city = "Chennai";

emp2 =new Employee(124,"Madhu",606060,21,"degree");

emp3 = new Employee(125,"Balaji",707070,23,"MCA");

emp4 = new Employee(126,"Anjum",50609,26,"B.Tech");

emp5 = new Employee(127,"Sindhu",404040,24,"MBA");

console.log(emp1.city);
console.log(emp1);
console.log(emp2);
console.log(emp3);
console.log(emp4);
console.log(emp5);

console.log(emp2.salary,emp2.age,emp2["qualification"]);

console.log(emp3["id"], emp4.salary,emp5["name"]);

console.log(emp1.city,emp1["id"],emp3.age);

console.log(emp5["age"],emp1.name,emp3.salary);

console.log(emp1["qualification"]);

console.log(emp1["id"],emp1.name,emp1["salary"],emp1.age,emp1["qualification"], emp1.city);

console.log(emp2.id,emp2["name"],emp2.salary,emp2["age"],emp2.qualification);

console.log(emp3["id"],emp3.name,emp3["salary"],emp3.age,emp3["qualification"]);

console.log(emp4.id,emp4["name"],emp4.salary,emp4["age"],emp4.qualification);

console.log(emp5["id"],emp5.name,emp5["salary"],emp5.age,emp5["qualification"]);

emp1.dowork();
emp2.dowork();
emp3.dowork();
emp4.dowork();
emp5.dowork();

emp1.doSomething();
emp2.doSomething();
emp3.doSomething();
emp4.doSomething();
emp5.doSomething();
