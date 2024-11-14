// const cart=["pants","shirts","kurtas"]

// createOrder(cart).then((e)=>console.log(e)).then()

// function createOrder(cart){
//     return new Promise((resolve,reject)=>{
//         if(!validator(cart)){
//             const err=new Error("invalid ")
//             reject(err)
//         }
//         const orderId="1223";
//         if(orderId){
//             resolve(orderId)
//         }
//     })
// }


// function validator(cart){
//     return true;
// }


// Array.prototype.myMap=function(cb){
//     const temp=[];
//     for(let i=0; i< this.length ; i++){
//         if(cb(this[i])){
        
//         temp.push(this[i])
//         }
//     }
//     return temp;
// }

// Array.prototype.myReduce=function(cb,intialvalue){
//     var accumulator=intialvalue;
//     for(let i=0;i<this.length;i++){
//         accumulator=accumulator ? cb(accumulator,this[i]): this[i]
//     }
//     return accumulator;

// }

// const num=[1,2,3,4,5,6];
// const res=num.myReduce((acc,cur)=>{
//     return acc+cur;


    
// },0)
// console.log(res)


//promise
sumThreeElements(4,5,6).then((e) => console.log(e)).catch((error)=>console.log(error))

function sumThreeElements(...number){
    return new Promise((resolve,reject)=>{
        if(number.length > 3){
            reject("length should be less or")
        }
        else{
            let sum=0;
            for(let i=0;i< number.length ;i++){
                sum=sum + number[i]
            }
            resolve("sum is" , + sum);
        }
    })
}

//higher order components
const radius=[2,3,4]

function AreaOfCircle(radius){
    return Math.PI * radius * radius;

}

function calculation(arr,logic){
    const temp=[]
    for(let i=0;i<arr.length;i++){
        temp.push(logic(arr[i]))
    }
    return temp;

}

console.log(calculation(radius,AreaOfCircle))

function memoizedAddTo256(){
    var cache = {};
  
    return function(num){
      if(num in cache){
        console.log("cached value");
        return cache[num]
      }
      else{
        cache[num] = num + 256;
        return cache[num];
      }
    }
  }
  var memoizedFunc = memoizedAddTo256();
  
  memoizedFunc(20); // Normal return
  memoizedFunc(20); // Cached return


  function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);  // Clear the timer each time the function is called
        timer = setTimeout(() => func(...args), delay); // Set a new timer
    };
}

// Usage
const handleResize = debounce(() => {
    console.log("Window resized!");
}, 300);

window.addEventListener("resize", handleResize);

