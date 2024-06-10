// arrary jha values fix nhi hai string bhi hai number and boolean bhi hai 
// const favCity:any[] = ["India","nepal",true,28]

// Tuples
type PersonInfo = readonly [string,number,boolean]

const displayPersonInfo = (person:PersonInfo) => {
const [name , age , hasDriverLicense] = person;
console.log(`Name : ${name} , age : ${age} , Driver's License : ${hasDriverLicense ? "Yes" : "No"}`);
}

// type [srting ,number,boolean]
const personA:PersonInfo = ["anup",28,true];
// const personA:PersonInfo = [28,"anup",true]; // error order m nhi hai ye
const personK:PersonInfo = ["kanu",31,false];

displayPersonInfo(personA);
displayPersonInfo(personK)