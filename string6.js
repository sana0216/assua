//charAt (x)
var myString = 'I can Win';
console.log (myString. charAt(7));
//output : i because index starts from 0

//concat (v1, v2,...)
var message = "Namaste";
var final = message.concat ("Friends", "Welcome to JS");
console.log (final);

// from CharCode (c1, c2,..)
console.log (String. fromCharCode(97,98,99,120,121,122));
//output : abcxyz
console.log (String.fromCharCode(72,69,76,76,79));

//LastIndexOf (substr, [start]);
var myString = 'JavaScript Rocks';
console.log (myString.lastIndexOf('r'));
//output : 11

//replace(substr, replacement)
var myString = 'Felight JavaScript Coders';
console.log(myString.replace(/Coders/i, "Developers"));

//slice(start, end)
var text="excellent"
text.slice(0,4) //returns "exce"
text.slice(2,4) //returns "ce"

//split(delimiter)
var message="Welcome to Felight"
//word[0] contains "We"
//word[1] contains "lcome to Felight"
var word=message.split("l");
console.log(word[0]);
console.log(word[1]);

//toLowerCase()
var myString = 'Felight Rocks';
mystring = myString.toLowerCase();
console.log(myString)
//toUpperCase
var myString = 'Felight Rocks';
myString = myString.toUpperCase();
console.log(m--------------------------------------------------------------------------------------------yString);
