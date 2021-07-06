//CharAt(x)
var myString ='I Can Win';
console.log (myString.charAt(7));
//output: 1 because index starts from 0

//concat(v1,v2..)
var message="Namaste";
var final = message.concat("Friends" ,"Welcome to JS.");
console.log (final);

//fromCharCode (c1,c2..)
console.log (String.fromCharCode(97,98,99,120,121,122));
//output : abcxyz
console.log (String.fromCharCode(72,69,76,76,79));

//latIndexOf (substr,[start])
var myString ='JavaScript rocks';
console.log (myString.lastIndexOf ('r'));
//output : 11
