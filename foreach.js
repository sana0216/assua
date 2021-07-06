var myColors = new Array("blue","yellow","red","black");
myColors.forEach(function(item){
    console.log(item);

});
console.log('--------');

var Fruits = ["oranges","grapes","apples","bananas"];
function myFunction(myVar){
    console.log(myVar);
}
Fruits.forEach (myFunction);
  console.log('------');

  var anotherfunction = function(item){
      console.log(item)
  };
  myColors.forEach(anotherfunction);
  console.log('------');


  
