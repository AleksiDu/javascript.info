"use strict";

let message = "Hello!";
let phrase = message;

console.log(phrase);

let user = {
    name: "John"
};

let admin = user; // copy the reference

console.log(user.name);

admin.name = "Ann"; // changed by the "admin" reference

console.log(user.name) // changes are seen from the "user" reference

/**
 *  Comparison by reference
 */

console.log(">>> Comparison by reference <<<")

let a = {};
let b = a; // copy the reference

console.log(a == b); // true, both variables referenced the same object;
console.log(a === b); // true

let a1 = {};
let b1 = {}; // two independent objects

console.log(a1 == b1); // false

/**
 *  Cloning and merging, Object.assign
 */

let user1 = {
    name: "John",
    age: 30
};

let clone = {} // the new empty object

// let's copy all user properties into it

for (let key in user) {
    clone[key] = user[key];
}

// clone is fully indepedent object with the same content

clone.name = "Pete"; // change the data in it

console.log(user1.name); // still John in the original object

/**
 *  We can also use the method Object.assign
 */

let user3 = {
    name: "John"
};

let permissions1 = {
    canView: true
};
let permissions2 = {
    canEdit: true
};

// copies all properties from permissions1 and permissions2 into user

Object.assign(user3, permissions1, permissions2);

console.log(user3) // now user = { name: "Jhon", canView: true, canEdit: true }

// If the copied property name already exists, it gets overwritten

Object.assign(user3, { name: "Pete" });

console.log(user3.name);

// We also can use Object.assign to replace for..in loop for imple cloning

let clone1 = Object.assign({}, user3);

console.log(clone1);

/**
 *  Nested cloning
 */
console.log(">>> Nested cloning <<<")

let user4 = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};

console.log(user4.sizes.height); // 182

let clone2 = Object.assign({}, user4);

console.log(user4.sizes === clone2.sizes); // true, same object

// user4 and clone2 share sizes
user4.sizes.width++; // changes a property from one place

console.log(clone2.sizes.width) // 51, get the results from other one
