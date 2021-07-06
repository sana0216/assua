// logical (&&) and example

var a1 = true && true; // t && t returns true
var a2 = true && false; // t && f returns false 
var a3 = false && true;// f && t returns false
var a4 = false && (3==4); // f && f returns false 
var a5 = 'Cat' && 'Dog'; //t && t returns Dog
var a6 = false && 'Cat ';//f && t returns false
var a7 = 'Cat' && false; // t && f returns false

console.log(a1,a2,a3,a4,a5,a6,a7);
