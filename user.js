class User {

    constructor(name) {
        this.name = name;
    }

    sayHi () {
        console.log(this.name);
    }
}

//Usage:
var user = new User("Sana");
user.sayHi();
