var array1 = [2,5,4,9,3];

 var reducer =  (presentvalue,currentvalue)=> presentvalue + currentvalue;

 console.log(array1.reduce(reducer,3));

 console.log(array1.reduce(reducer,9));

