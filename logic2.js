//check if a year is leap year or not
var year = 2020;
if ((year % 4 == 0) && (year % 100 != 0) ||(year % 400 ==0))
console.log ('Leap Year');
else
console.log('Not a Year');
