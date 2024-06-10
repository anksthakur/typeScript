"use strict";
// objects in typeScript
const person = {
    name: "Anup",
    age: 28,
    address: {
        city: "CHD",
        country: "India"
    }
};
console.log(person.address.city);
// updating city
person.address.city = " Mohali";
//person.address.city = 123; // error
console.log(person.address.city);
const person1 = {
    name: "Anup",
    age: 28,
    address: {
        city: "CHD",
        country: "India"
    }
};
const person2 = {
    name: "Anup",
    age: 28,
    address: {
        city: "CHD",
        country: "India"
    }
};
console.log(person1.address.city);
