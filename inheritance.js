class Parent{
    constructor(){
        this.fatherName = "Schwaerznegger"
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getfullName(){
        return this.name + " " + this.fatherName
    }
}

const baby = new Child("Arnold");
const baby2 = new Child("Tom");
console.log(baby.getfullName());
console.log(baby2.getfullName());