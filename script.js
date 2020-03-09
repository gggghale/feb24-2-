function Person (name,gender,age){

    this.name = name;
    this.gender= gender;
    this.age = age;
class Person{
    constructor(name, gender, age){
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
    walk(distance){
        console.log(`${this.name} can walk up to ${distance} miles`)
    }
}

let juan = new Person("Juan Dela Cruz", "Male", 35);
document.write(`<h2>${juan.name} is a ${juan.gender} person </h2>`) 
let juan = new Person ("Juan Dela Cruz", "male", 34);
juan.walk(5); 