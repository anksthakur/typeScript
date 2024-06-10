"use strict";
// type Annotation
// let num: number = 10;
// let user: string = "Anup";
// //convert bhi kar skte hai
// console.log(num.toString());
// node index.ts
//error
// integers ya floationg number honge hmare pass to uhnka data type hume :number he dena hai
let n1 = 5;
let n2 = 12;
let n3 = 3.2;
let n4 = -5;
let n5 = +4;
// string
let sentence = "this is me";
let sentenceLength = sentence.length;
console.log(sentence);
// lower & UPPER
let text = "this is my code";
let textUpper = text.toUpperCase();
let textLower = text.toLowerCase();
console.log(textUpper);
console.log(textLower);
// Bigint & boolen
let myName = true;
// in fun m boolean
function isEven(a) {
    return a % 2 === 0;
}
console.log(isEven(5));
// bigint
// let highNumber = Number.MAX_SAFE_INTEGER;
let maxiNumbers = 9007199254740991n;
console.log(maxiNumbers);
