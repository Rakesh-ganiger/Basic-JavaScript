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




// function insertionSort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         for(let j=i+1;j > 0;j--){
//             if(arr[j] < arr[j-1]){
//                 swap(arr,j,j-1)
//             }else{
//                 break;

//             }
            

//         }
//     }
//     return arr;
// }

// function swap(arr,firstnumber,secondnumber){
//     let temp=arr[firstnumber]
//     arr[firstnumber]=arr[secondnumber]
//     arr[secondnumber]=temp;

// }


// const insertion=[9,8,7,6,5,4,3,3,2];
// console.log(insertionSort(insertion))



// function commonPrefix(strings) {

//     strings.sort();
    
//     // Take the first and last strings after sorting
//     const str1 = strings[0];
//     const str2 = strings[strings.length - 1];
    
//     // Find the common prefix by comparing characters one by one
//     let index = 0;
//     while (index < str1.length && str1.charAt(index) === str2.charAt(index)) {
//         index++;
//     }
    
//     // Return the common prefix substring
//     return index === 0 ? "" : str2.substring(0, index);
// }

// // Example input
// const strings = ["Rakesh", "Rahul", "Ramesh"];
// const output = commonPrefix(strings);
// console.log("Output:", output); // Output: "Ra"



//Merge sort



// function conquer(arr,si,mid,ei){
//     let merged=new Array(ei-si+1);
//     let idx1=si;
//     let idx2=mid+1;
//     let x=0;

//     while(idx1 <= mid && idx2 <= ei){
//         if(arr[idx1] <= arr[idx2]){
//             merged[x++]=arr[idx1++]
//         }
//         else{
//             merged[x++]=arr[idx2++]
//         }



        
//     }
//     while(idx1 <= mid){
//         merged[x++]=arr[idx1++]
//     }
//     while(idx2 <= ei){
//         merged[x++]=arr[idx2++]
//     }

//     for(let i=0,j=si; i<merged.length;i++,j++){
//         arr[j]=merged[i]
//     }
// }

// function divide(arr,si,ei){
//     if(si >= ei){
//         return;
//     }
    
//     const mid = si + Math.floor((ei - si) / 2);
//     divide(arr, si, mid)
//     divide(arr, mid+1, ei)
//     conquer(arr, si, mid, ei)

// }

// let number=[6,5,4,3,2,2]
// divide(number,0,number.length-1)
// console.log(number)




//quick sort



// function quickSort(arr,low,high){
//     if(low >= high){
//         return;
//     }
//     let si=low;
//     let ei=high;
//     let mid= Math.floor(si+(ei-si)/2)
//     let pivot=arr[mid];
//     while(si <= ei){
//         while(arr[si] < pivot){
//             si++;
//         }
//         if(arr[ei] >pivot){
//             ei--;
//         }
//         if (si <= ei) {
//             [arr[si], arr[ei]] = [arr[ei], arr[si]];
//             si++;
//             ei--;
//         }

//     }
//     quickSort(arr,low,ei)
//     quickSort(arr,si,high)
// }
// const nums = [5, 4, 3, 2, 1];
// quickSort(nums, 0, nums.length - 1);
// console.log(nums);


function quickSort(arr,low ,high){
    if(low >= high){
        return;
    }

    si=low;
    ei=high;
    mid=Math.floor(si+(ei-si)/2);
    pivot= arr[mid];
    while(si <= ei){
        while(arr[si] < pivot){
            si++;
        }
        while(arr[ei] > pivot){
            ei--;
        }

        if(si <= ei){
            temp=arr[si];
            arr[si]=arr[ei];
            arr[ei]=arr[si];


        }

    }
    quickSort(arr,low,ei);
    quickSort(arr,si,high);
}

let nums=[5,4,3,2,1]
quickSort(nums,0,nums.length-1);
console.log(nums)
