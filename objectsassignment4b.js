function Employee(id,name,age,salary,qualification){
 this.id = id;
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.qualification = qualification;


    this.dowork = function(){
        console.log(this.name + 'is doing work');
    }

    this.riseSalary = function (percentage) {
        this.salary = this.salary + (this.salary*50) / 100;
    }

    this.riseSalary = function (percentage) {
        this.salary = this.salary + (this.salary*100) / 100;
    }    
}

var emp1 = new Employee(147,"Asma",28,700000,"MBA");

var emp2 = new Employee(165,'Anjali',25,60000,'B.tech');

var emp3 = new Employee(145,'vihan',30,80800,'m.tech');

console.log(emp1);
console.log(emp2);
console.log(emp3);

emp1.riseSalary(50);

console.log(emp1);

emp3.riseSalary(100);

console.log(emp3)


  
