//setter example
var emp = {
    name: 'sana',
    salary :505050,
    city: "Bangalore",

    set empCity(empCity){
        this.City = empCity;
    },
    set empName(empName) {
        this.name = empName;
    }
};
 emp.empCity = "Mangalore",
 emp.empName = "SanaAnjum";

 console.log(emp["name"]);
 console.log(emp.City);
