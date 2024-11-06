console.log("start")

setTimeout(function (){
    console.log("hello world")
},5000);

console.log("end")

let startDate=new Date().getTime();
let endDate=startDate;

while(endDate < startDate + 10000){
    endDate=new Date().getTime();
    
}
console.log("time expires")

// console.log(NaN==NaN);
// console.log(Nan===NaN);

// console.log("A"-1)

// const arr=[1,2,3,4]

// const res=arr.filter((e)=>{
//     return e > 2;
// })
// console.log(res)

// const arr = [3, 1, 4, 1, 5];
// arr.sort();
// console.log(arr);  // Output: [1, 1, 3, 4, 5]

//Map filter reduce
const arr=[1,2,3,4,5,6,7]

const res=arr.reduce(function(acc,curr){
    if(curr > acc){
         acc=curr;
         
    }
    return acc;
},arr[0])
console.log(res)

const res1=arr.reduce(function(acc,curr){
    return acc=acc+curr;
    
},0)

console.log(res1)

const double=arr.filter((e)=>{
    return e >5;
})
console.log(double)