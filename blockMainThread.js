// console.log("start")

// setTimeout(function (){
//     console.log("hello world")
// },5000);

// console.log("end")

// let startDate=new Date().getTime();
// let endDate=startDate;

// while(endDate < startDate + 10000){
//     endDate=new Date().getTime();
    
// }
// console.log("time expires")

// // console.log(NaN==NaN);
// // console.log(Nan===NaN);

// // console.log("A"-1)

// // const arr=[1,2,3,4]

// // const res=arr.filter((e)=>{
// //     return e > 2;
// // })
// // console.log(res)

// // const arr = [3, 1, 4, 1, 5];
// // arr.sort();
// // console.log(arr);  // Output: [1, 1, 3, 4, 5]

// //Map filter reduce
// const arr=[1,2,3,4,5,6,7]

// const res=arr.reduce(function(acc,curr){
//     if(curr > acc){
//          acc=curr;
         
//     }
//     return acc;
// },arr[0])
// console.log(res)

// const res1=arr.reduce(function(acc,curr){
//     return acc=acc+curr;
    
// },0)

// console.log(res1)

// const double=arr.filter((e)=>{
//     return e >5;
// })
// console.log(double)


const cart=["shirts","Pants","Kurtas"]

// createOrder(cart,function (orderId){
//     proceedToPayment(orderId,function(paymentInfo){
//         showOrderSummary(paymentInfo)
//     })
// })

// createOrder(cart).then(function (orderId){
//     return proceedToPayment(orderId)
// }).then(function (paymentInfo){
//     return showOrderSummary(paymentInfo)
// })

// const promise=createOrder(cart)
// console.log(promise)
// promise.then(function (orderId){
//     console.log(orderId)
// })
// setTimeout(function (){console.log(promise)},6000)

// function createOrder(){
// const pr=new Promise(function (resolve,reject){
//     if(!validator(cart)){
//         const err=new Error("Invalid cart")
//         reject(err)
//     }
//     const orderId="1234"
//     if(orderId){setTimeout(function (){
//         resolve(orderId)
//     },5000)
        
//     }
// })

// return pr;
// }

// function validator(cart){
//     return true;
// }



// const promise=new Promise(function (resolve,reject){
//     resolve("promise resolved")
// })


// async function getData() {
//     const val=await promise;
//     console.log(val)
    
// }
// getData()




//call apply bind
// function sayHello(){
//     return "Hello " + this.name;
//   }
          
//   var obj = {name: "Sandy"};
          
//   console.log(sayHello.call(obj))


  let obj1={
    firstName:"Rakesh",
    lastname:"Ganiger",
    
  }
  let fullname=function(hometown,state){
    console.log(this.firstName + " " + this.lastname +" from " + hometown + state);
}

  let obj2={
    firstName:"Rahul",
    lastname:"Ganiger"
}
Function.prototype.myCall=function (context={}, ...args){
    if(typeof this !== "function"){
        throw new Error("Its not collable")
    }
    context.fn=this;
    context.fn(...args)
    
};

Function.prototype.myBind=function (context={}, ...args){
    if(typeof this !== "function"){
        throw new Error("Its not collable")
    }
    context.fn=this;
    return function(...newArgs){
        return context.fn(...args, ...newArgs)
    }
    
    
};


Function.prototype.myApply=function (context={}, args=[]){
    if(typeof this !== "function"){
        throw new Error("Its not collable")
    }
    if(!Array.isArray(args)){
        throw new Error("Not array")
    }
    context.fn=this;
    context.fn(...args)
    
};

  const res=fullname.myBind(obj2,"Belagavi")
  console.log(res("Karnataka"))


  //currying

//   function multifly(x,y){
//     console.log(x*y)
//   }

//   let multi=multifly.bind(this,2)
//   multi(3)


//polyfill for map


// Array.prototype.myMap=function(cb){
//     let temp=[];
//     for(let i=0;i<this.length;i++){
//         temp.push(cb(this[i]))
//     }
//     return temp;
// }

// const nums=[1,2,3,4];
// const res=nums.myMap((e)=>{
//     return e*2;
// })
// console.log(res)


// Array.prototype.myFilter=function(cb){
//     let temp=[];
//     for(let i=0;i<this.length;i++){
//         if(cb(this[i])) temp.push(this[i])
//     }
// return temp;
// }

// const res1=nums.myFilter((e)=>{
//     return e>2;
// })
// console.log(res1)