// document.getElementById("parent").addEventListener("click",()=>{
//     console.log("parent called")
// })

// document.getElementById("child").addEventListener("click",(event)=>{
//     console.log("child called")
//     event.stopPropagation();
// })
// function updateClock() {
//     const now = new Date();
//     let hours = now.getHours();
//     const minutes = String(now.getMinutes()).padStart(2, "0");
//     const seconds = String(now.getSeconds()).padStart(2, "0");

//     const amPm = hours >= 12 ? "PM" : "AM";
    
//     // Convert 24-hour format to 12-hour format
//     hours = hours % 12 ||12 // Converts 0 to 12 for midnight/noon
//     hours = String(hours).padStart(2, "0");

//     document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds} ${amPm}`;
// }

// updateClock();
// setInterval(updateClock, 1000);

// const p1=new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         resolve("promise is resolved")

//     },5000)
    
// })
// async function getData(){
//     console.log("hellow world")
//     const data=await p1;
//     // const res=await data.JSON(data);

//     console.log(data)
//     console.log("hellow world")

// }

// getData();

async function getGitHubUserData(username) {
    console.log("Fetching user data...");

    try {
        // Fetching user data from GitHub's API
        const response = await fetch(`https://api.github.com/users/Rakesh-ganiger`);
        
        // Check if the response is successful
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parsing the JSON response
        const data = await response.json();
        
        // Log the user data
        console.log(data);

    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
}

getGitHubUserData('octocat');  // Replace 'octocat' with the username you want to fetch



// const cart=["Pants","Shirts","Kurtas"]



// createOrder(cart).then(function(orderId){
//     console.log(orderId)
// }).catch(function(err){
//     console.log(err.message)
// })
   

// function createOrder(cart){
//     const promise=new Promise((resolve,reject)=>{
//         if(!validator(cart)){
//             const err=new Error("promise is invalid")
//             reject(err)
//         }
//         const orderId="12345";
//         if(orderId){
//             resolve(orderId)
//         }
       
//     })
//     return promise
// }
// function validator(cart){
//     return true;
// }

// const cart = ["Pants", "Shirts", "Kurtas"];

// createOrder(cart)
//     .then(function(orderId) {
//         console.log(orderId);  // Logs the orderId if the promise resolves successfully
//     })
//     .catch(function(error) {
//         console.log(error.message);  // Logs error if the promise is rejected
//     });

// function createOrder(cart) {
//     return new Promise((resolve, reject) => {  // Return the promise here
//         if (!validator(cart)) {
//             const err = new Error("Cart is invalid");
//             reject(err);  // Reject the promise if the cart is invalid
//         }
        
//         const orderId = "12345";  // Mock order ID
//         if (orderId) {
//             resolve(orderId);  // Resolve the promise with the order ID
//         }
//     });
// }

// function validator(cart) {
//     return true;  // Assuming cart is always valid
// }
