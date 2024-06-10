// function invocation
function greet(name:string, id:number){
    console.log(`Welcome , ${name} and your id is ${id}`)
}
// function call
greet("Anup",1);

// // using fat arrow function
// const greeting = (name:string, id:number) => { //):void
//     console.log(`Welcome , ${name} and your id is ${id}`)
// }
// // function call
// greeting("Anup",1);

// bydefault type void hota hai agar hum console ki return use krenge to ye type bydefault string ho jayega

// using fat arrow function
const greeting = (name:string, id:number):string => { //):void
    return `Welcome , ${name} and your id is ${id}`
}
// function call
greeting("Anup",1);

// Default value in parameter declaration
// by default value deni hai eg ki first time koi bhi aaye uhse 1 bydefault mil jaye id
// default parameter
const greet1 = (name:string,id:number=1) => {
return `Welcome , ${name} and your id is ${id}`
}
const emp = greet1("Anup")
console.log(emp);

// optional ?
const greet2 = (name:string,id?:number) => {
    // optional ka fayda agr id hai to 
    if(id){
         return `Welcome , ${name} and your id is ${id}`
    }else{
        return `welcome , ${name}` 
    }
    }
    const empData = greet1("Anup")
    const empData1= greet1("Anup",2)
    console.log(empData);
    console.log(empData1);

