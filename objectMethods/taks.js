"use strict";

/**
 *  Using "this" in object literal
 * 
 *  Here the function makeUser returns an onject.
 *  What is the result of accessing its ref? Why?
 */

function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

console.log(user.ref.name); // Error: Cannot read property 'name' of undefined

// Oposite case

function makeUser() {
    return {
        name: "John",
        ref() {
            return this;
        }
    };
}

user = makeUser();

console.log(user.ref().name);

/**
 *  Create a calculator
 *  Create an object calculator with three methods:
 *  read() prompts for two calues and saves them as object properties with names a and b respectively.
 *  sum() returns the sum of saved values.
 *  mil() multiplies saved values and returns the results
 */

let calculator = {
    read() {
        this.a = +prompt("Put 'a' value", 0);
        this.b = +prompt("Put 'b' value", 0);
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }

};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

/**
 *  Chaining
 *  There's a ladder object that allows to go up and down
 */

let ladder = {
    step: 0,
    up() {
        this.steop++;
        return this // solution
    },
    down() {
        this.step--;
        return this // solution
    },
    showSteps: function () { // shows the current step
        console.log(this.step);
        return this // solution
    }
};

// Now, if we need to make several calls in sequence, can do it like this:

ladder.up();
ladder.up();
ladder.down();
ladder.showSteps(); // 1
ladder.down();
ladder.showSteps(); // 0

// Modify the code of up, down and showStep to make the calls chainable

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0