//Objects are references
//Objects are mutable
var emp1 = {name:"Jack Sparrow",age:45};
var emp2 = emp1;
emp2.name = "CaptainBorbossa";
console.log(emp1.name);

var i = 10;
var j = i;
j= 1000;
console.log(i);

var studentX = 'Anjum';
var studentY = studentX;
studentY = "Asma";
console.log(studentX);
