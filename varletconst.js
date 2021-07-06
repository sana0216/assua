var greeter = "Greeting from Earth";
var greeter = "hey hi ";

function newFunction() {
    var hello = "hello";
    console.log(hello);
}
newFunction();
//Here,greeter is globally scoped because
//it exsists outside a function while hello
//is function scoped
//So we cannot access the variable hello outside of a function
//So  if we do this
console.log(hello);
//we get an error saying hello is undefined
