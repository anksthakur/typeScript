"use strict";
const student1 = {
    name: "Anup",
    age: 28,
    greet: (country) => `Welcome, My Name is ${student1.name} and I am from ${country}`
};
const intro = (student1) => {
    // destructre
    const { name, age } = student1;
    return `Welcome, My Name is ${name} and my age is ${age} years old`;
};
console.log(intro(student1));
console.log(student1.greet('India'));
