function Employee(id, name , salary){
    if(new.target != undefined){
        this.id =id;
        this.name = name;
        this.salary = salary;
    }else
    console.log('please call only to create object');
}


var emp1 = new Employee(123,'sana',707070);

Employee();
Employee();
Employee();