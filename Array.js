var marks = Array(6);
var marks = new Array(20,40,35,12,37,100);

var marks = [20,40,35,12,37,100];
//create sub-array on the main array
subMarks= marks.slice(2,5);
console.log(subMarks);

//position of array
console.log(marks[2]); //35

//Replace array
marks[3] = 14;
console.log(marks); 

//Lenght of array
console.log(marks.length);//6

//increase size of array
marks.push(76);
console.log(marks); 

//Delete element
marks.pop();

//add element to begining o f array
marks.unshift(12);

console.log(marks); 

//what is index of array
console.log(marks.indexOf(100));

//check number in array - Search
console.log(marks.includes(120));
//console.log(marks.includes(20));

var sum = 0;
for(let i=0;i<marks.lenght;i++){
    //console.log(marks[i]);
    sum =sum + marks[i];
}
console.log(sum);

//reduce, filter and map
//sum and tia all value together
let total = marks.reduce((sum,mark)=>sum+mark,0)
console.log(total);

var scores = [12,13,14,16];
//print array even number
//create new array with even number of scores array [12,13,14]
var evenScores =[];
for(let i=0;i<scores.lenght;i++){
    if(scores[i] %2 == 0)
    {
        evenScores.push(scores[i]);

    }
}
console.log(evenScores);

//Filter - to filter your array 
let newFilterEvenScorse = scores.filter(scores=>scores%2==0);
console.log(newFilterEvenScorse);

//create new array with even number of scores and multiple each value with 3 array [12,13,14]

//Map - mapping one value to new value
let mappedArray = newFilterEvenScorse.map(scores => scores*3);
console.log(mappedArray);

//create new array with even number of scores and multiple each value with 3 array [12,13,14]
let totalVal= mappedArray.reduce((sum,val)=>sum+val,0);
console.log(totalVal);

//sample line of code
var scores1 = [12,13,14,16];
let sumValue = scores1.filter(score=>score%2==0).map(score=>score*3).reduce((sum,val)=>sum+val,0);
console.log(sumValue);


//Sorting an Array which have string
let fruits = ["Banana","Mango","Apple","Cerry"]

console.log(fruits.sort());
console.log(fruits.reverse());
console.log(fruits);

//sorting have numbers
var scores1 = [12,19,14,11,16];
console.log(scores1.sort());

scores1.sort(function(a,b){
    return a-b;
})
console.log(scores1.sort((a,b)=> a-b))




////




