class Animal {
    constructor(name) {
        this.name= name;
    }

    speak(){
        console.log(`${this.name}makes a noise`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name); //call the super calss
        //constructor and pass in the name parameter 
    }

    speak(){
        console.log(`${this.name} barks`);
    }
}

let d = new Dog('Greman Shepered');
d.speak();//German Shepered barks.
