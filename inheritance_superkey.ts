class PersonsD {
    names: string;
    age: number;
    hobbies: string[];

    constructor(names: string, age: number, hobbies: string[]) {
        this.names = names;
        this.age = age;
        this.hobbies = hobbies;
    }

    introduce(): string {
        return `Hi I am ${this.names}`;
    }
}

// jo class humne person ke ley bnai thi uhsko ab directly use kar skte hai students  ke ley hume alg se define krne ki zroort nhi hai

class Students extends PersonsD {
    grade:number;
    constructor(names: string, age: number, hobbies: string[],grade:number){
        //super key
        super(names,age,hobbies);
        this.grade=grade;
    }
}

const persons5: PersonsD = new PersonsD("Anup", 12, ["reading"]);
console.log(persons5.introduce());

const students5: PersonsD = new PersonsD("Anup", 12, ["reading"]);
console.log(students5.introduce());
