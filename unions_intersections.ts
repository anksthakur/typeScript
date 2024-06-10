// Unions

// x = {1,2,3};
// y  = {2,3,4};
//xuy = {1,2,3,4}

const userInput = (value:string|number|boolean) => {
if(typeof value === 'number'){
return value*2
}else if(typeof value === "string"){
return value.toUpperCase();
}else{
    throw new Error("invaild input data")
}
}
console.log(userInput(10));// 10
console.log(userInput("Anup"));//ANUP

// InterSection

// x = {1,2,3};
// y  = {2,3,4};
//xny = {2,3}

type Person3 = {
    name:string;
    age:number
}
type Employee = {
    emp_id:number;
    department:string
}

type EmployeeDetails = Person3 & Employee
const employee:EmployeeDetails = {
    name:"Anup",
    age:28,
    emp_id:12,
    department:"IT"
}