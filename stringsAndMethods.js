//to declare string not give any specific data type
//string opertation is just like array opertation
//each charater is treated as one index
//we have collection of charater

const Person = require('./Classes')

let day = "Tuesday ";
console.log(day.length);  //8

let subday = day.slice(0,4);
console.log(subday);
console.log(day[1]);

let splitDay = day.split("s");
console.log(splitDay[1].length);
console.log(splitDay[1].trim().length);

//to remove spaces from sting used "trim()", "split()", "lenght"

let date = "23";
let nextDate = "27";
let diff = parseInt(nextDate) - parseInt(date);//parseInt - A string to conver into a number
console.log(diff);
console.log("=======================================");
//back into sting
diff.toString();
console.log(diff);
console.log("=======================================");

//concatination of two string
//"+" join 2 string
let newQuote = day+ "is Funday day";
console.log(newQuote);
console.log("=======================================");

//indexOf
let val = newQuote.indexOf("day",5);
console.log(val);
console.log("=======================================");

let count =0;
let value = newQuote.indexOf("day");
while(value!== -1)
{
    count++;
    value = newQuote.indexOf("day",value+1);
}

console.log(count);


let person = new Person("Chris","Edwards",);
console.log(person.fullName());

