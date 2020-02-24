function createPerson(name, gender, age){
    function Person (name,gender,age){
    
        let p = {};
        p.name = name;
        p.gender = gender;
        p.age = age;
        return p;
        this.name = name;
        this.gender= gender;
        this.age = age;
    }
    let juan = createPerson("Juan Dela Cruz","male",25);
    
    console.log(`${juan.name} is ${juan.age} years old`) 
    let juan = new Person("Juan Dela Cruz", "Male", 35);
    document.write(`<h2>${juan.name} is a ${juan.gender} person </h2>`) 