function Animal (name) {
    this.name = name;
}

Animal.prototype.speak = function () {
    console.log(`${this.name}makes a noise`);
}

class Dog extends Animal {
    speak (){
        console.log(`${this.name} barks`);
    }
}

let d = new Dog('My Dog');
d.speak();//My Dog barks.

//For similar methods, the child;s method
//takes precedence over parent's method