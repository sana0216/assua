var myArray =["Jagan","Gandhi","Nikhil","Rahul","Dkshae","Nograj","Sharmila","Modi"];
function f1(x){
   console.log("f1 called");
}
console.log(myArray.findIndex(f1));

var newArray = myArray.splice(2,5);
for(item of newArray)
console.log(item);

myArray.push("Sana Anjum");
console.log(myArray.pop());
