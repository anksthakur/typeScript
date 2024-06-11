// class
// jha bhi similar things ke sath kaam krna hai bha hum class use krte hai 
class Persons {
    names:string ;
    age:number;
    hobbies:string[];
    // constructor is like ki class m kon kon c property hai
    constructor(names:string,age:number,hobbies:string[]){
        this.names=names;
        this.age=age;
        this.hobbies=hobbies;
    }
}

const persons1:Persons = new Persons("Anup",12,["reading"]);
console.log(persons1);
