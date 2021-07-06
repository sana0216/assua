//The following variables are 
//defined in the globalscope
var num1=20,
    num2=3,
    name ='MS Dhoni';

    //Below function is defined in the global scope
    function multiply() {
        return num1 * num2;
    }

    console.log(multiply());

    //A nested function example
    function getScore(){
        var num1 = 2,
            num2 = 3;
            
            function add() {
                return name + 'scored' + (num1 + num2);
            }

            return add();
    }
    console.log(getScore());
      
