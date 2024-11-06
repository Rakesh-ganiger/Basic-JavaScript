const radius=[2,3,4,5]

const area=function(radius){
    return Math.PI * radius * radius;
};
const circumFerance=function(radius){
    return Math.PI * radius *2;
}
const calculateValue = function(arr,logic){
    const output=[];
    for(let i=0;i<arr.length;i++){
        output.push(logic(arr[i]))
    }
    return output;
}
console.log(calculateValue(radius,area))
console.log(calculateValue(radius,circumFerance))

const calculate=function(radius){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(Math.PI * radius[i] * radius[i])
    }
    return output;
}

console.log(calculate(radius))