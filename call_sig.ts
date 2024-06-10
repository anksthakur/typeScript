// call Signature
type Student = {
    name:string;
    age:number;
    gender?:string;
    greet : (country:string) => string ;
// Method call Signature
}

const student1:Student = {
    name:"Anup",
    age:28,
    greet:(country):string => `Welcome, My Name is ${student1.name} and I am from ${country}`
}

const intro : (student1:Student) => void = (student1:Student) => {
// destructre
const {name,age} = student1;
return `Welcome, My Name is ${name} and my age is ${age} years old`
}
console.log(intro(student1));
console.log(student1.greet('India'));

