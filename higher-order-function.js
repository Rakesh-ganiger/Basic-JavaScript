//hIGHER ORDER FUNCTIONS


// const radius=[2,3,4,5]

// const area=function(radius){
//     return Math.PI * radius * radius;
// };
// const circumFerance=function(radius){
//     return Math.PI * radius *2;
// }
// const calculateValue = function(arr,logic){
//     const output=[];
//     for(let i=0;i<arr.length;i++){
//         output.push(logic(arr[i]))
//     }
//     return output;
// }
// console.log(calculateValue(radius,area))
// console.log(calculateValue(radius,circumFerance))

// const calculate=function(radius){
//     const output=[];
//     for(let i=0;i<radius.length;i++){
//         output.push(Math.PI * radius[i] * radius[i])
//     }
//     return output;
// }

// console.log(calculate(radius))



const person={
    name:"Rakesh",
    age:23,
    adress:{
        city:"Belagavi"
    }

}
//shallow copy
// const person1=Object.assign({},person)

// const person1 = {...person}

// person1.name="Rahul";
// person1.adress.city="Karnataka";
// console.log(person)
// console.log(person1)


//deep copy

const person1=JSON.parse(JSON.stringify(person));

person1.name="Rahul";
person1.adress.city="Karnataka";
console.log(person1)
console.log(person)

