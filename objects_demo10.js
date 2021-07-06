var user = {
    name: "Vinay Hoyasala",
    age: 1000
};

var clone = {}; // the new empty object

// let's copy all user properties into it
for(let key in user) {
    clone[key] = user[key];
}

//now clone is a fully independent object with same content 

console.log(user);
console.log(clone);

clone.name = 'Bhaubali'; //doesn't change in the user object

console.log(user);
console.log(clone);
