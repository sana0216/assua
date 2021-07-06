//charAt(x)
var myString = 'I can Win';
console.log (myString.charAt(7));
//output : 1 because index starts from 0

//concat (v1,v2..)
var message ="Namaste";
var final=message.concat ("Friends","Welcome to Js");
console.log (final);

//fromCharCode (c1,c2...)
console.log (String.fromCharCode(72,98,99,120,121,122));
//output : abcxyz
console.log (String.fromCharCode(72,69,76,76,79));

//lastIndexOf (subStr ,[start])
var myString ='Javascript Rocks';
console.log(myString.lastIndexOf('r'));
//output : 11

//replace (subStr, replacetext)
var myString = 'Felight JavaScript Coders';
console.log(myString.replace(/Coders/i, "Developers"));

//slice (start, end)
var text = "excllent";
text.slice (0,4) //return "exce";
text.slice (2,4) //return "ce";

//split (delimiter)
var message = "Welcome to Felight";
//word [0] contains "We";
//word [1] conatins "lcome to Felight";
var word = message.split ("l");
console.log (word[0]);
console.log (word[1]);

//toLowerCase();
var mystring = 'Felight Rocks';
myString = myString.toLowerCase();
console.log (myString);

//tpUpperCase()
var mystring = 'Felight Rocks';
myString = myString.toUpperCase ();
console.log (myString);
