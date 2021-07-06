function funcA (a,b) {
    return a + b;
}

function funcA (c) {
    return c;
}

console.log(funcA(2));
console.log(funcA(3,4));

//Javascript does Not support method overloading
//So, if it sees/parses two or more functions 
//with a same name, it'll just consider the
//last defined function and overwrite the previous ones.
