//const - which is almost same as let
//const - connot reinitialise

const greet = "Evening";
//greet = "Night";
if(1==1)
{
    let greet = "Afternoon";
}

function add(a,b)
{
    let greet = "Morning";
    return a+b;
}

let sum1 = add(2,3);
console.log(sum1);
console.log(greet);
