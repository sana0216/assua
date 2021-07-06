
function abc() { //arguments
    console.log('abc called');
    for(var i=0; i<arguments.length; i++)
      console.log(arguments[i])
}


abc();
abc(1);
abc(true,"Yo Yo");

