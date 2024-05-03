//var - Keyword
//scope of var keyword - global if it declear in global level
// function - when it functional level
//if var keyword inside function then you cannot access out side

var greet = "Evening";
if(1==1)
{
    var greet = "Afternoon";
}

function add(a,b)
{
    var greet = "Morning";
    return a+b;
}

let sum1 = add(2,3);
console.log(sum1);
console.log(greet);