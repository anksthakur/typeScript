// any type krne se type kuch bhi var ko hum string number booleaan etc kuch bhi likh skte hai 
let myNum:any = 5;
myNum = "Anup";
myNum = true;

// any use krte hai eg API Data kyuki o json object form m milta hai
// user input , network responses

// unknown
let num2: unknown;
num2 = 5;
num2 = true;
num2 = "true";
// num2.map(()=>{
//     //property check krta hai ki use kr skte hai hum ya nhi
// })
if(typeof num2 === "number"){
    console.log(num2 + 10);   
}else if (typeof num2 === "boolean"){
    console.log(num2);
    
}