console.log(user.address.street); // Error!

// // document.querySelector('.elem') is null if there's no element
// let html = document.querySelector('elem').innerHTML; //error if it's null

// let user1 = {};

// console.log(user1.address ? user1.address.street : undefined);

// let html1 = document.querySelector('.elem') ? document.querySelector('.elem').innerHTML : null;

// let user2 = {}; // user has no address

// console.log(user2.address ? user2.address.street ? user2.address.street.name : null : null);

// // There’s a little better way to write it, using the && operator:

// let user3 = {};

// console.log(user3.address && user3.address.street && user3.address.street.name); // undefined (no error)

// /**
//  *  Optional chaining
//  */

// let user4 = {}; // user has no address

// console.log(user4?.address?.street); //undefined (no error)

// // This code is short and clean, there's no duplication at all
// // Here's an example with document.querySelector:

// let html4 = document.querySelector(".elem")?.innerHTML; // will be undifined, if there's no element

// // Reading the address with user?.address works if user object doesn't exist:

// user = null

// console.log(user?.address); // undefined
// console.log(user?.address.street); // undefined

// // The ?. syntax makes optional the value before it, but not any futher.


// // ReferenceError: user is not defined
// user?.address;
