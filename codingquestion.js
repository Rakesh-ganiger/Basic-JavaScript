// function reverse(str){
//     const rev= str.split('').reverse().join('')
//     return rev === str ? "true" : "false"
// }
// console.log(reverse("olo"))



// function falindrome(str){
//     str=str.toLowerCase();
//      left=0;
//      right=str.length-1;
//      while(left < right){
//         if(str[left] != str[right]) return false;
//         left++;
//         right--;
//      }
//      return true;

// }

// console.log(falindrome("Madam"))


// function falindrome(num){
//     let reverse=0;
//     let original=num;
//     while(num > 0){
//         let rem= num % 10;
//         reverse=reverse *10 + rem;
//         num=Math.floor(num / 10)
        
    
//     }
//     return reverse === original ? "true" :"false"
// }


// console.log(falindrome(121))



// function firstNonRepeatingCharecter(str){
//     for(let i=0;i<str.length;i++){
//         let unique=true;
//         for(let j=0;j<str.length;j++){
//             if(str[i] === str[j] && i != j){
//                 unique = false;
//             }
//         }
//         if(unique){
//             return str[i]
//         }
//     }
//     return -1;
// }
// console.log(firstNonRepeatingCharecter("swiss"))



// function anagram(str1,str2){
//     str1=str1.toLowerCase()
//     str2=str2.toLowerCase()
//     if(str1.length != str2.length) return false;
//     return str1.split('').sort().join('') === str2.split('').sort().join('')

// }

// console.log(anagram("listen","silent"))


// // function vowelcount(str){
// //     let vowel="aeiouAEIOU"
// //     count=0;
// //     for(let char of str){
// //         if(vowel.includes(char)){
// //             count++;
// //         }
// //     }
// //     return count;
// // }
// // console.log(vowelcount("hello world"))


// function vowelcount(str){
//     vowel="aeiouAEIOU"
//     vowel=vowel.split('')
//     count=0;
//     for(let i=0;i <str.length;i++){
//         if(vowel.includes(str[i])){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(vowelcount("hello world"))



// function validParenthisis(str){
//     let balance=0;
//     for(let char of str){
//         if(char === '(') balance++;
//         else if(char === ')') balance--;
//         if(balance < 0) return false;
//     }
//     return balance ===0;
// }
// console.log(validParenthisis("()()"))



// function commonPrefix(str){
//     str.sort();
//     const str1=str[0];
//     const str2=str[str.length-1]
//     let index=0;

//     while(index < str1.length && str1.charAt(index) ===str2.charAt(index)){
//         index++;
//     }


//     return index ===0?"":str1.substring(0,index)

// }

// const strings = ["Rakesh", "Rahul", "Ramesh"];
// const output = commonPrefix(strings);
// console.log("Output:", output) // Output: "Ra"



// const radius=[2,3,4]

// function area(radius){
//     return Math.PI *radius *radius
// }


// function calculate(arr,legal){
//     let temp=[];
//     for(let i=0;i<arr.length;i++){
//         temp.push(legal(arr[i]))
//     }
//     return temp;
// }

// console.log(calculate(radius,area))


// let obj1={
//     firstName:"Rakesh",
//     lastname:"Ganiger",
    
//   }
//   let fullname=function(hometown,state){
//     console.log(this.firstName + " " + this.lastname +" from " + hometown + state);
// }

//   let obj2={
//     firstName:"Rahul",
//     lastname:"Ganiger"
// }


// console.log(fullname.call(obj1,"darur","karnataka"))


// function fact(num){
//     if(num === 0) return 1
//     while(num > 0){
//         return num*fact(num-1)
//     }
// }

// console.log(fact(4))

class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
  
  
//   var person1 = new Person("Vivek", 76, "male");
//   console.log(person1);

//   const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (var i = 0; i < 10; i++) {
//    console.log(b[i])
// }
function rotateRight(arr,rotations){
    if(rotations == 0) return arr;
    for(let i = 0; i < rotations;i++){
      let element = arr.pop();
      arr.unshift(element);
    }
    return arr;
  }
  console.log(rotateRight([2, 3, 4, 5, 7], 3))