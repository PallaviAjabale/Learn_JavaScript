module.exports = class Person
{
    age = 25;
    get location()
    {
        return "canada";
    }

    //construtor is keyword
    constructor(firstName, lastName)//instance variable
    {
        this.firstName = firstName; 
        this.lastName = lastName;

    }
    //method()
    fullName()
    {
        console.log(this.firstName+this.lastName);
    }

}

/*let person =new Person("Tim","Joep")
let person1 =new Person("Tik","tinn")
console.log(person.age)
console.log(person.location);
console.log(person.fullName());
console.log(person1.fullName());
*/


//introdue in ES6 engine
//get - treated as property - this is highly suggested
//construtors is methods which executes by default when you create object of class





