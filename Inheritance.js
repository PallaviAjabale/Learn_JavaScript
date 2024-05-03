//Inheritance is the main piller in object oriented propgramming
//one class can inherit/acquire the properties, method of another class
//The class which inherits the properties of other is known as subclass (drived class, child class)
//the class whoes properties are inherited is known as superclass

const Person = require("./Classes");

class Pet extends Person
{
    // get location()
    // {
    //      return "BlueCross";
    // }
    constructor(firstName,lastName)
    {
        //call parent class constructor
        super(firstName,lastName);
    }
}

let pet =new Pet("Sam","Sab");
pet.fullName();
console.log(pet.location);
