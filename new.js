const btn=document.querySelector(".increment")
const btnpress=document.querySelector(".increment-pass")
const count=document.querySelector(".increment-count")


let pressedCount=0;
let triggeredCount=0;

const dobouceCount=_.debounce(()=>{
    count.innerHTML = ++triggeredCount;
},800)

btn.addEventListener("click",()=>{
    btnpress.innerHTML = ++pressedCount;
    dobouceCount();

})