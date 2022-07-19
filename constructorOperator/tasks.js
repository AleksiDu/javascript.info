"use strict";

/**
 *  **TASK1**
 *  Two function - one object
 * 
 *  Is it possible to create function 'A' and 'B' so that 'new A() == new B()' ?
 * 
 */
console.log(">>> TASK1 <<<")
/*
    Yes, If a function returns an object then new returns it instead of ths.
    So the can, for instance, return the same externally defined object obj:
 */
let obj = {};

function A() {
    return obj;
}

function B() {
    return obj;
}
let a = new A;
let b = new B;

console.log(a == b); //true

/**
 * **TASK2**
 * Create new Calculator
 * Creata a constructor function Calculator that creates objects with 3 methods
 * read() asks for two values using console.log and remembers them in object properties.
 * sum() returns the sum of these properties.
 * mul() returns the multiplication product of these properties.
 */
console.log(">>> TASK2 <<<")

function Calculator() {
    this.read = function () {
        this.a = +prompt("Value 1 = ", 0);
        this.b = +prompt("Value 2 = ", 0);
    },
        this.sum = function () {
            return this.a + this.b;
        },
        this.mul = function () {
            return this.a * this.b;
        }
}

let calculator = new Calculator();

calculator.read();

console.log("Sum= " + calculator.sum());
console.log("Mul= " + calculator.mul());

/**
 * **TASK3**
 * Create new Accumulator
 * Create a constructor function Accumulator(startingValue).
 * Object that it creates should:
 *      Store the "current value" in the property value. The string value is set to the argument of the constructor
 *      startingValue.
 *      The read() method should use prompt to read a new number and add it to value.
 * In other words, the value property is the sum of all user-entered values with the initial value startingValue.     
 */

function Accumulator(a) {
    this.value = a;
    this.read = function () {
        this.value += +prompt("User value = ", 0);
    };
};

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered calue

alert(accumulator.value); //shows the sum of these values


