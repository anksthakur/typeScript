// objects in typeScript
const person:{
    name:string;
    age:number;
    address:{city:string;country:string}
} = {
    name:"Anup",
    age:28,
    address:{
        city:"CHD",
        country:"India"
    }
}
console.log(person.address.city);
// updating city
person.address.city = " Mohali";
//person.address.city = 123; // error
console.log(person.address.city);

// type Alias 
// baar baar same data use ho rha hai aur uhse hume baar baar define krna pad rha hai uhske ley alias use krte hai

type Person = {
    name:string;
    age:number;
    address:{city:string;country:string}
}

const person1:Person = {
    name:"Anup",
    age:28,
    address:{
        city:"CHD",
        country:"India"
    }
}

const person2:Person = {
    name:"Anup",
    age:28,
    address:{
        city:"CHD",
        country:"India"
    }
}
console.log(person1.address.city);

