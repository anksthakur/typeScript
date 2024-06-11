"use strict";
// public(ye use krne se isko hum child m bhi use kr skte hai aur outside class m bhi) names: string;
// protected (isko hum child class se he access kr skte hai) age: number;
//  private (isko hum parent class m he use kr skte hai) hobbies: string[];
class PersonsDe {
    constructor(names, age, hobbies) {
        this.names = names;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduce() {
        return `Hi I am ${this.names}`;
    }
}
// jo class humne person ke ley bnai thi uhsko ab directly use kar skte hai students  ke ley hume alg se define krne ki zroort nhi hai
class Students2 extends PersonsD {
    constructor(names, age, hobbies, grade) {
        super(names, age, hobbies);
        this.grade = grade;
    }
}
const persons6 = new PersonsDe("Anup", 12, ["reading"]);
console.log(persons6.introduce());
const students6 = new PersonsDe("Anup", 12, ["reading"]);
console.log(students6.introduce());
