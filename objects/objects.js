"use strict";
// let user = new Object(); // "object constructor" syntax

// "object literal" syntax
let user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30,       // by key "age" store value 30
    "likes birds": true, // multiword property name must be quoted
};

// set
user["likes birds"] = true;

// get
console.log(user["likes birds"]); // true

// delete
delete user["likes birds"];

let key = "likes birds";

// same as user["likes birds"] = true;
user[key] = true;

console.log(user);

let fruit = "apple";

let bag = {
    [fruit]: 5, // the name of the property is taken from the variable fruit
};

console.log(bag);


function makeUser(name, age) {
    return {
        name, // same as name: name
        age,  // same as age: age
        // ...other properties
    };
}

let user1 = makeUser("John", 30);
console.log(user.name); // John

let obj = {};
obj.__proto__ = 5; // assign a number
console.log(obj.__proto__); // [object Object] - the value is an object, didn't work as intended

console.log("name" in user); //ture, (user.name exists)
console.log("bag" in user); //false, (user.bag doesn't exist)

let key1 = "name";
console.log(key1 in user); //ture, property "name" exists;

let obj1 = {
    test: undefined
};

console.log(obj1.test); // it's undifined, so - no such property?
console.log("test" in obj1); // true, the property does exist!


console.log("user2 ==>")
let user2 = {
    name: "John",
    age: 30,
    isAdmin: true,
};

for (let key in user2) {
    // keys
    console.log(key); // name, age, isAdmin
    // values for the keys
    console.log(user2[key]);
};


console.log("====> Ordered like an object <=====");

let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain"
};

for (let code in codes) {
    console.log(code);
}

let codes1 = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain"
};

for (let code in codes1) {
    console.log(code);
}
