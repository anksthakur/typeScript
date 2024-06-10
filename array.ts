// Array in typescript
// we have three ways to define array
//1 using [] square brackets
const number:number[] = [1,2,3,4,5]

// 2 using array constructor
const numbers:number[] = new Array(1,2,3,4,5)

// using Array.of method 
const names:string[] = Array.of("Anup","kanu")
console.log(names[1]);
console.log(names.length);


// Methods in arrary
const fruits:string[] = ["aaple","banana","orange"]
const updateFruits = fruits.push("kiwi")
console.log(updateFruits);//5 length btayega
console.log(fruits);//["aaple","banana","orange","kiwi"]

// Iterations in TS
//using for loop
for (let i = 0 ; i <fruits.length; i++){
    console.log(fruits[i]);
}
// aaple banana orange kiwi

// for in loop m index milega 


// for of m value milega
for (const fruit of fruits){
    console.log(fruit);
    //aaple banana orange kiwi
}

// using forEach method
fruits.forEach((curVal:string)=>console.log(curVal))
//aaple banana orange kiwi

// Map method
// map method new array return krta hai
// doubling the number
const numbers1:number[] = [1,2,3]
const doubleData:number[] = numbers.map((curVal)=> curVal*2)
console.log(doubleData);

//  converting numbers to string
const numbersToString = numbers1.map((curVal:number)=>curVal
.toString());
console.log(numbersToString);//["1","2","3"]

// filter method
const evenNumber:number[] = numbers1.filter((curVal:number)=> curVal % 2 === 0)
console.log(evenNumber);
