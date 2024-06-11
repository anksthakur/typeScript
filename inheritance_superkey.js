"use strict";
class PersonsD {
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
class Students extends PersonsD {
    constructor(names, age, hobbies, grade) {
        //super key
        super(names, age, hobbies);
        this.grade = grade;
    }
}
const persons5 = new PersonsD("Anup", 12, ["reading"]);
console.log(persons5.introduce());
const students5 = new PersonsD("Anup", 12, ["reading"]);
console.log(students5.introduce());
