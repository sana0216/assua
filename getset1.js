//getter example
var emp = {
    Name : "sana",
        salary :606060,
    City : "Bangalore",
    get empCity (){
        return this.City;
    },
    get empName(){
        return this.Name;
    }
};

console.log(emp.empCity);
console.log(emp.empName);
