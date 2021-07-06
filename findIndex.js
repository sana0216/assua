var myArray = ['apples','oranges','grapes','mangoes','bananas'];
function f2(x){
console.log('f2 is called');
}
console.log(myArray.findIndex(f2));

 var newArray = myArray.splice(1,5);
 for(item of myArray)
 console.log(item);
  myArray.push("jackfruit");
  console.log(myArray.pop());
