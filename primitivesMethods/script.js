"use strict";

/* A primitive
- Is a value of a primitive type.
- There are 7 primitive types: string, number, bigint, boolean, symbol, null and undifined. */

/* An object
- Is capable of storing multyple values as properties.
- Can be created with {}, for instance: {name: "John", age: 30}. There are other kinds of objects in
JavaScript: functions, for example, are objects. */

// One pf the best things about objects is that we can store a function as one of its properties.

let john = {
    name: "John",
    sayHi: function () {
        console.log("Hi buddy!");
    }
};

john.sayHi(); // Hi buddy!

/**
 *  A primitive as an object
 */

let str = "Hello";
console.log("toUpperCase =>>", str.toUpperCase()); //HELLO

/* Here's what actually happens in str.toUpperCase():
1. The string str is a primitive. So in the moment of accessing its property, a special object is created that
knows the vakue of the string, and has useful methods, like toUpperCase().
2. That method run and returns a new string (shown by console.log).
3. The special object is destroyed, leaving the primitive str alone. */

let n = 1.23456;
console.log(n.toFixed(2)); // 1.23