// generics allows you to create reuseable components or function that can work with multiple data types
function logAndReturn<T>(value:T):T {
    return value;
}
const numberResult = logAndReturn(42);
const stringResult = logAndReturn("Hello World");
const booleanResult = logAndReturn(true);

console.log(numberResult);
console.log(stringResult);
console.log(booleanResult);

// generics m hum ek place holder bnake chod dete hai aur baad m defie krte hai 
// eg
function add<T,U>(a:T,b:U) {
    console.log(typeof a);// number
    console.log(typeof b);// string
}
const res1 = add<number,string>(2,"Anup");