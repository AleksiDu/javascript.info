"use strict";

function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Jack");

console.log(user.name);
console.log(user.isAdmin);

// Constructor mode test: new.target

function User1() {
    console.log(new.target);
}

// without "new":
User1(); // undefined

// with "new":
new User1(); // function User { ... }


// We can also make both new and regular calls to do the same, like this:

function User2(name) {
    if (!new.target) { // if you run me without new
        return new User2(name); // ...I will add new for you
    }

    this.name = name;
}

let jhon = User2("John"); //redirects call to new User
console.log(jhon.name); //John

/**
 *  Retrun from constructors
 */

// Here return overrides this by returning an object:

function BigUser() {

    this.name = "John";

    return { name: "Godzill" }; // <==== returns this object
}

console.log(new BigUser().name) // Godzilla, got that object

// Here is an example with an empty return:

function SmallUser() {
    this.name = "John";

    return; // <==== returns this
}

console.log(new SmallUser().name); // John

// WE can omit oarentheses after new, if it has no arguments:

let user3 = new User; // <=== no parentheses
// same as
user3 = new User();

/**
 *  Methods in consturctor
 */

function User(name) {
    this.name = name;

    this.sayHi = function () {
        console.log("My name is: " + this.name);
    };
}

let john = new User("John");
john.sayHi(); // My name is: John

/*
john = {
    name: "John",
    sayHi: function() { ... }
}
 */

