var o1 = true || true; //t || t returns  true
var o2 = false || true; // f ||t returns true
var o3 = true || false; //t || f returns true
var o4 = false || (3==4); //f || f returns false
var o5 = 'Cat' || 'Dog'; // t || t returns Cat
var o6 = false || 'Cat'; //f || t returns Cat
var o7 = 'Cat' || false; // t || f returns Cat

console.log(o1,o2,o3,o4,o5,o6,o7);
