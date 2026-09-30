//  find max element in array

// function maxElement(arr){
//     let max= arr[0]
//     for(let i=1; i<arr.length;i++){
//         if(arr[i] > max){
//             max = arr[i]
//         }
        
//     }
//     return max
   
// }
// console.log(maxElement([1,4,5,3,7,9]))

//  find minimum Element in array

// function minElement(arr){
//     let min=arr[0];
//     for(let i=1; i<arr.length;i++){
//         if(arr[i] < min){
//             min= arr[i]
//         }
//     }
//     return min
// }

// console.log(minElement([10,20,7,30,50]))

// Find the sum of all elements
// let arr=[10,20,30,40]
// let sum=0
// for(let i=0; i<arr.length;i++){
//     sum += arr[i]
// }
// console.log(sum)



// Reverse an array

// input => [1,2,3,4,5]
// output => [5,4,3,2,1]

// let arr=[1,2,3,4,5]
// let arr1= arr.reverse()
// console.log(arr1)
// function reverseArray(arr){
// let left= 0;
// let right= arr.length-1
// while(left < right){
//     let temp= arr[left]
//     arr[left] = arr[right]
//     arr[right]=temp

//     left++
//     right--
// }
// return arr
// }
// console.log(reverseArray([1,2,3,4,5]))


// Count even and odd numbers

// [1,2,3,4,5,6]
//  even =>[2,4,6]

// let arr=[1,2,3,4,5,6]
// let result=[]
// let result1=[]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0  ){
//         result.push(arr[i])
//     }
//      else if(arr[i]%2 !=0){
//         result1.push(arr[i])
//     }
// }
// console.log(result,result1)
// let arr=[1,2,3,4,5,6]
// let [evenNum,oddNub]= arr.reduce((acc,num)=>{
//     num %2===0 ? acc[0].push(num) : acc[1].push(num)
//     return acc
// },[[] ,[]])
// console.log(evenNum)
// console.log(oddNub)


// Search an element in an array
// [10,20,30,40]
// target = 30
// index = 2

// let arr=[10,20,60,30,40,50]
// let target= 60;
// let index=[]


// for(let i=0;i<arr.length;i++){
//     if(arr[i]===target){
//         index.push(i)
        
//     }
  
  
// }
// if(index.length > 0){
//     console.log("index of target element:",index)
// } else {
//     console.log("Element does not exists")
// }


// Find frequency of an element
// [1,2,2,3,2,4]
// target = 2
// frequency = 3
// let arr=[1,2,2,3,2,4,3,2]
// let target=2;
// let count=0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==target){
//         count++
//     }
// }
// console.log(count)


// Find second largest element
// [10,50,30,40,20]
// // 40



// Find second smallest element
// [10,50,30,40,20]
// // 20


// Remove duplicate elements

// [1,2,2,3,3,4]
// // [1,2,3,4]

// let arr=[1,2,2,3,3,4]
// let set= new Map()
// let arr1= arr.map()
// console.log(arr1)
function duplicate(arr){
for(let i=0;i<arr.length;i++){
    if(arr.includes(arr[i])){
        return arr
    }
}

}
console.log(duplicate([1,2,2,3,3,4]))

