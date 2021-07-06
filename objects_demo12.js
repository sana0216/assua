var user = {
    name : "Sana Anjum",
    age : 1000
};

var clone = {}; // the new empry object
 
Object.assign(clone,user);

// now clone is a fuly independent object with the same content

console.log(user);
console.log(clone);

clone.name = 'Bhaubali'; //doesn't change in the user object

console.log(user);
console.log(clone);