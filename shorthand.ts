// public(ye use krne se isko hum child m bhi use kr skte hai aur outside class m bhi) names: string;
// protected (isko hum child class se he access kr skte hai) age: number;
//  private (isko hum parent class m he use kr skte hai) hobbies: string[];

class PersonsDet {
     constructor(
        public names: string,
        public age: number,
        protected hobbies: string[]) {}

     introduce(): string[] {
         // return `Hi I am ${this.names}`;
         return this.hobbies;
     }
 }
 
 // jo class humne person ke ley bnai thi uhsko ab directly use kar skte hai students  ke ley hume alg se define krne ki zroort nhi hai
 
 class Students3 extends PersonsD {
     grade:number;
     constructor(names: string, age: number, hobbies: string[],grade:number){
         super(names,age,hobbies);
         this.grade=grade;
     }
 }
 
 const persons7: PersonsDet = new PersonsDet("Anup", 12, ["reading"]);
 console.log(persons7.introduce());
 
 const students7: PersonsDet = new PersonsDet("Anup", 12, ["reading"]);
 console.log(students7.introduce());
 