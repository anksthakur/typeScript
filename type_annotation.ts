// type Annotation
// let num: number = 10;
// let user: string = "Anup";
// //convert bhi kar skte hai
// console.log(num.toString());
// node index.ts
//error

// integers ya floationg number honge hmare pass to uhnka data type hume :number he dena hai

let n1: number = 5;
let n2: number = 12;
let n3: number = 3.2;
let n4: number = -5;
let n5: number = +4 ;

// string
let sentence:string = "this is me";
let sentenceLength:number = sentence.length;
console.log(sentence);

// lower & UPPER
let text: string = "this is my code";
let textUpper:string = text.toUpperCase();
let textLower:string = text.toLowerCase();
console.log(textUpper);
console.log(textLower);


// Bigint & boolen
let myName: boolean = true; 

// in fun m boolean
function isEven(a:number):boolean{
    return a%2 === 0
}
console.log(isEven(5));

// bigint

// let highNumber = Number.MAX_SAFE_INTEGER;
let maxiNumbers:bigint = 9007199254740991n
console.log(maxiNumbers);

