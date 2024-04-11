const flag = true;

if(!flag)//if - condition match then execute
{
    console.log("Condition satisfied");
}
else//is not match - else
{
    console.log("flag    ", flag);
    console.log("condition not satisfied");

}
let i=0;
//while(i<10)//if expression is true this loop will keep on executing until condition beacome false inside the loop
//if this condition never become false then this loop will execute infinite
while(i>10)
{
    //i= i+1;
    i++;
    //console.log(i);
    //console.log("inside loop")
}
//we need to write some condition so our loop should have some code which can be manupulate the varibale givan in the condition

do//one round of loop will run before its check condition
{
i++;
}while(i>10);
console.log(i);
// 1stly it will check condition 

for(let k=0;k<=10;k++)
{
    console.log(k);

}
let requird =true
while(i>20){
    console.log(requird);
    requird = false;
}
//when you know that how many times you want to run this loop,
console.log("====================================");
let n=0;
for(let k=1;k<=100;k++)
{
    //if(k%2 == 0 && k%5 == 0)// == for compared - || for or
    //if(k%2 == 0 || k%5 == 0)
    //2 and 5
    if(k%2 == 0 && k%5 == 0)
    {
        n++;
        console.log(k);
        if(n == 3)
        break;

    }
}
let requird1 =true
while(i>20){
    console.log(requird1);
    requird1 = false;
}



