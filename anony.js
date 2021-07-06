 var x = function () {
     console.log('function called');
 }


function doSomething(myFunc) {
    myFunc();
}


doSomething(x);
