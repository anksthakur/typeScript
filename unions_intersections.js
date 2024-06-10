"use strict";
// Unions
// x = {1,2,3};
// y  = {2,3,4};
//xuy = {1,2,3,4}
const userInput = (value) => {
    if (typeof value === 'number') {
        return value * 2;
    }
    else if (typeof value === "string") {
        return value.toUpperCase();
    }
    else {
        throw new Error("invaild input data");
    }
};
console.log(userInput(10)); // 10
console.log(userInput("Anup")); //ANUP
const employee = {
    name: "Anup",
    age: 28,
    emp_id: 12,
    department: "IT"
};
