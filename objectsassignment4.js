function Employee(id,name,age, salary,qualification){
  this.id = id;
  this.name = name;
  this.age = age;
  this.salary = salary;
  this.qualification = qualification;
  this.dowork = function(){
      console.log(this.name + 'is doing work');
  },
  this.doSomething = function(){
      console.log(this.name + 'is doing something')
  }
};

var emp1 =new Employee(136,'Anjum',27,3030303,'degree');

var emp2 = new Employee(145,'Madhu',23,606060,'B.Sc');

var emp3 = new Employee(156,'Sindhu',29,707070,'MBA');

console.log(emp1);
console.log(emp2);
console.log(emp3);

emp1.doSomething();
emp2.dowork();
emp3.dowork();
emp3.doSomething();