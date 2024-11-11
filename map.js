// Array.prototype.myMap=function(cb){
//     const temp=[];
//     for(let i=0;i<this.length;i++){
//         temp.push(cb(this[i],this[i]))

//     }
//     return temp;

// }

// const nums=[2,3,4,5]
// const res=nums.myMap((e)=>{s
//     return e*2;
// })
// console.log(res)

// let arr=[1,2,3,4][2,3,4]
// console.log(arr)

// let obj={
//     1:"a",
//     2:"b",
//     "2":"b",
//     [1]:"b"

// }
// console.log(obj)

// function binary(arr,target){
//     arr.sort((a,b)=>a-b)
//     start=0;
//     end=arr.length-1
//     while(start <= end){
//         mid=Math.floor(start+(end-start))/2;
//         if(target > arr[mid]) {
//             start=mid+1
//         }
//         else if(target < arr[mid]){
//             end=mid-1
//         }
//         else{
//             return mid
//         }

//     }
//     return -1;
// }

// const nums=[5,3,4,7,8,9,1];
// console.log(binary(nums,5))


// function linearSearch(arr,target){
//     start=arr[0];
//     end=arr.length-1;
//     while(start <= end){
//         for(let i=0;i<=arr.length;i++){
//             if(arr[i]==target){
//                 return i;
//             }
//         }
//     }
//     return -1;

// }
// const nums1=[5,3,4,7,8,9,1];
// console.log(linearSearch(nums1,9))



// function bubbleSort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i] >= arr[j]){
//                 temp=arr[i];
//                 arr[i]=arr[j]
//                 arr[j]=temp;
//             }
//         }
//     }
//     return arr;
// }
// const bubble=[5,3,4,7,8,9,1];
// console.log(bubbleSort(bubble))


// function selectionSort(arr){
//     for(let i=0; i<arr.length-1; i++){
//         let smallest=i;
//         for(let j = i+1; j < arr.length; j++){
//             if(arr[smallest] > arr[j]){
//                 smallest=arr[j]
//             }
//         }
//         let temp=arr[smallest]
//         arr[smallest]=arr[i]
//         arr[i]=temp
//     }
//     return arr;


// }
// const selection=[9,8,7,6,5,4,3,3,2];
// console.log(selectionSort(selection))




function insertionSort(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j > 0;j--){
            if(arr[j] < arr[j-1]){
                swap(arr,j,j-1)
            }else{
                break;

            }
            

        }
    }
    return arr;
}

function swap(arr,firstnumber,secondnumber){
    let temp=arr[firstnumber]
    arr[firstnumber]=arr[secondnumber]
    arr[secondnumber]=temp;

}


const insertion=[9,8,7,6,5,4,3,3,2];
console.log(insertionSort(insertion))

