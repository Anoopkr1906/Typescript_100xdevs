// we can create a class which implements the interface

interface Person{
    name: string;
    age: number;
    greet(phrase: string): void;
}

class Employee implements Person {
    name: string;
    age: number;

    constructor(n: string , a:number){
        this.name = n;
        this.age = a;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}

const anoop = new Employee("Anoop", 20);
console.log(anoop.name);
anoop.greet("Hello, I am");