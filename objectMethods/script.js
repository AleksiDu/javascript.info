"use strict";

let user = {
    name: "John",
    age: 30
};

user.sayHi = function () {
    console.log("Hello!");
};

user.sayHi(); // Hello!

console.log("user = ", user);

/**
 *  Method shorthand
 */

// these objects do the same

user = {
    sayHi: function () {
        console.log("Hello!");
    }
};

console.log("user = ", user);

// Method shorthand looks better

user = {
    sayHi() {  // same as "sayHi: function() {...}"
        console.log("Hello");
    }
};

/**
 *  "this" in methods
 */
console.log(">>> this in methods <<<")

user = {
    name: "John",
    age: 30,

    sayHi() {
        // "this" is the "current object"
        console.log(this.name);
        console.log(user.name); // "user" instead of "this" // leads to an eror after overwrite
    }
};

user.sayHi(); // John

console.log(">>> overwrite <<<");
let admin = user;
user = null; // overwrite to make things obvious

// admin.sayHi(); //TypeError: Cannot read property 'name' of null

/**
 *  "this" is not bound
 */
console.log(">>> 'this' is not bound <<<");

user = { name: "John" };
admin = { name: "Admin" };

function sayHi() {
    console.log(this.name);
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); //John (this == user)
admin.f(); // Admin (this === admin)

admin['f'](); // Admin (dot or square brackets access the method - doesn't matter)

console.log(admin);

// Arrow functions have no "this"
console.log(">>> Arrow functions have no 'this'")

user = {
    firstName: "Ilya",
    sayHi() {
        let arrow = () => console.log(this.firstName);
        arrow();
    }
};

user.sayHi(); // Ilya
