var myArray = new Array(true,"Blue","Orange","Yellow",5,6,4,10);

//displaying the content of array
console.log(myArray);

//for loop to iterate through the array
for(var i=0; i<myArray.length; i++);
  console.log(myArray[i]);

  //for...of loop to iterate through the array
  for(item of myArray)
    console.log(item);
    