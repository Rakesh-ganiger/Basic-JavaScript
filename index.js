//Hoisting in Js
// console.log(a)
// getname();
// console.log(getname)

// var a=10;

// function getname(){
//     console.log("Rakesh")
// }



//let and const are block scoped
// console.log(a)

// let a=10

// let getname=()=>{
//     console.log("Rakesh")
// }
// getname()

//closures Function along with its lexical scope bundeled together to form a closure

function x(){
    let a = 10;
    function y(){
        console.log(a)
    }
    return y;
}
var inner=x()
inner()

//..........................................


//closure examples
function x(){
    for(var i=1;i<=5;i++){
        function close(x){
            setTimeout(function(){
                console.log(x)
            },x*1000)
        }
        close(i)
        

    }
    console.log("namaste javascript")
}
x()



// // //closure examples
function outest(c){
    let a=7;
function outer(b){
    
    function inner(){
        console.log(a,b,c)
    }
    return inner;
   
}
return outer;

}
var inner=outest("Namaste Js")("namaste node")
inner()


// //closure examples
function x(){
    let a =13;
    function y(){
        console.log(a)
    }
    return y;
}
var z=x();

z()
console.log(z)
 


//data hiding using closure
function x(){
var count=0;

this.increment=function(){
    count++;
    console.log(count)
}
this.decrement=function(){
    count--;
    console.log(count)
}

}
var counter1 =new x()
counter1.increment()
counter1.decrement()