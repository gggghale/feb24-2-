function createPerson(name, gender, age){

    let p = {};
    p.name = name;
    p.gender = gender;
    p.age = age;
    return p;
}
let juan = createPerson("Juan Dela Cruz","male",25);

console.log(`${juan.name} is ${juan.age} years old`) 