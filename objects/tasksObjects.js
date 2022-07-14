"use strict";

/**
 *  Task 1
 *  Hello, object
 *  Write the code, one line for each action:
 *      Create an empty object user.
 *      Add the property name with the value John.
 *      Add the property surname with the value Smith.
 *      Change the value of the name to Pete.
 *      Remove the property name from the object.
 */
console.log("/** Task 1 */");

let user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";

delete user.name;

console.log(user);

/**
 *  Task 2
 *  Check for emptiness
 *  Write the function isEmtye(obj) which returns true if the object has no properties,
 *  false otherwise.
 */
console.log("/** Task 2  */");

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

console.log(isEmpty({}));

/**
 *  Task 3
 *  Sum object properties
 *  We have an object storing salaries of our team:
 *  
 *  Write the code to sum all salaries and store in the variable sum. Should be 390 in the example
 *  If salaries is emty, then the result must be 0.
 */
console.log("/** Task 3 */");

let salaries = {
    Jhon: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;

for (let key in salaries) {
    sum += salaries[key];
}

console.log(sum);

/** 
 *  Task 4
 *  Multiply numeric property values by 2
 *  Create a function multiplyNumerics(obj) that multiplies all numeric property values of obj by 2.
 */
console.log("/** Task 4 */");

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

console.log("before the call =>>>", menu);

function multiplyNumerics(menu) {
    for (let key in menu) {
        if (typeof menu[key] === "number") {
            menu[key] *= 2;
        }
    }
}

console.log(multiplyNumerics(menu))

console.log("after the call =>>", menu);

