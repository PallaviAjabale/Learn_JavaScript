//object is coollections of properties

let person = {
    FN:'Tim',
    LN:'Joe',
        age : 24,
    fullName: function()
    {
        console.log(this.FN+this.LN)

    }
}
console.log(person.fullName()); 

console.log(person.LN);//we can access elements in object - with dot notation 
console.log(person["LN"]);//when it write in array notation - use colan
person.FN = 'Tim Done';
console.log(person.FN);
person.gender = 'Male';
console.log(person);
delete person.gender;
console.log(person);

//property exits in object
//que - print all values in java script object
console.log('gender' in  person);

for(let key in person)
{
    console.log(person[key]);
}




