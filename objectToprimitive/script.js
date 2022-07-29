"use strict";

/**
 * Hints
 * For an object-to-string conversion, when we're doing an operation on an object that expects a string like alert:
 */

// output
alert(obj);

// using object as a property key
another[obj] = 123;

// For an object-tonumber conversion, like when we're doing maths:

//explicit converion
let num = Number(obj);

// maths (except binary plus)
let n = +obj; // unary plus
let delta = date1 - date2;

// less/greater comparison
let greater = user1 > user2;

// binary plus uses the "default" hint
let total = obj1 + obj2;

// obj == number uses the "default" hint
if (user == 1) { "..." };

/**
 * Symbol.toPrimitive
 */

obj[Symbol.toPrimitive] = function (hint) {
    // here goes the code to convert this object to a primitive
    // it must return a primitive value
    // hint = one of "string", "number", "default" 
};

user = {
    name: "John",
    money: 1000,

    [Symbol.toPrimitive](hint) {
        alert(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}}` : this.money;
    }
};

// conversions demo:
alert(user); //hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500

/**
 * toString/valueOf
 */

user = { name: "John" };

alert(user); // [object Object]
alert(user.valueOf() === user); //true

user = {
    name: "John",
    money: 1000,

    // for hint="string"
    toString() {
        return `{name: "${this.name}"}`;
    },

    // for hint="number" or "default"
    valueOf() {
        return this.money;
    }

};

alert(user); // toString -> {name: "John"}
alert(+user); // valueOf -> 1000
alert(user + 500); // valueOf -> 1500