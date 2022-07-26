"use strict";

/**
 *  Symbols
 * A "synbol" represents a unique identifier
 * A value of this type can be created using Symbol()
 */

let id = Symbol();

// We can give symboles a description.
// id is a symbol with the description "id"

id = Symbol("id");

// Symbols are guaranteed to be unique.

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log("Two symbols with the same description ==>", id1 == id2); //false

// Symbols don't auto-convert to a string
// If we really want to show a symbol, we need to explicitly call .toString() on it, like here:
id = Symbol("id");
console.log("id.toString() ==>", id.toString()); // Symbol(id)

// Or get symbol.description property to show the description only:
id = Symbol("id");
console.log("id.description ==>", id.description); // id

/**
 * "Hidden" properties
 */

let user = { // belongs to another code
    name: "John"
};

id = Symbol("id");
user[id] = 1;

console.log("access the data with symbol as the key", user[id]); // we can access the data using the symbol as the key

/**
 * Symbols in an object literal
 */

// If we wanted use a symbol in an object literal, we need square brackets arund it

id = Symbol("id");

user = {
    name: "John",
    [id]: 123 // not "id": 123
};
// That's because we need the value from the variable id as the key, not the string "id"

/**
 * Symbols are skipped by for..in
 * Symbol properties do not participate in for..in loop.
 */

id = Symbol("id");
user = {
    name: "john",
    age: 30,
    [id]: 123
};

for (let key in user) console.log("for..in loop ==>", key); //name, age (no symbols)

// the direct access by the symbol works
console.log("Direct: " + user[id]); // Direct: 123

// Object.keys(user) also ignores them.

// In contest, Object.assign copies both string and symbol properties:
id = Symbol("id");
user = {
    [id]: 123
};

let clone = Object.assign({}, user);
console.log("clone ==> ", clone[id]); //123

/**
 * Global symbols
 * In order to read a symbol from the registry, use Symbol.for(key)
 * If there's a symbol described as key, then returns it, otherwise creates a new symbol 
 * Symbol(key) and stores it in the registry by the given key.
 */

// read from global registry:
id = Symbol.for("id"); // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)
let idAgain = Symbol.for("id");

// the same symbol
console.log("the same symbol ==>", id === idAgain); //ture

/**
 * Symbol.keyFor
 * Return a name by global symbol - we can use: Symbol.keuFor(sym):
 */

// Get Symbol by name
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// Get name by symbol
console.log("sym =>", Symbol.keyFor(sym)); //name
console.log("syn2 =>", Symbol.keyFor(sym2)); //id

