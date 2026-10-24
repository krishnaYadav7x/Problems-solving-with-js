function isArraySorted(arr){
  let currentEl = -Infinity
  for(let i=0; i<arr.length;i++){
    console.log(arr[i]);
    if(arr[i]<currentEl)return false
    currentEl = arr[i]
  }
  return true
}

function removeDuplicates(arr){
  return arr.filter((el,i)=>arr.indexOf(el)===i)
}

function  mergeTwoArraysWithoutUsingConcatOrSpread(arr1,arr2){
  let mergedArr = []
  for(let i=0; i<arr1.length; i++){
    mergedArr.push(arr1[i])
  }
  for(let i=0; i<arr2.length; i++){
    mergedArr.push(arr2[i])
  }
  return mergedArr
}

function findSecondLargest(input){
  let firstLargest = -Infinity
  let secondLargest 
  for(const num of input){
    if (num > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = num;
    }
  }
  return secondLargest
}

function areTwoArraysEqual(arr1,arr2){
  if(arr1.length!==arr2.length)return false
  for(const num of arr1){
    if(arr1[num]!==arr2[num])return false
  }
  return true
}

function countEvenAndOddInArray(arr){
  let even = 0
  let odd = 0
  for(const num of arr){
    if(num%2===0){
      even+=1
    }else{
      odd+=1
    }
  }
  return {even,odd}
}

// function findAllUniquePairsWhoseSumEqualTarget(input,target){
//   let output = []

//   for(let i=0; i<input.length; i++){
//     for(let j=0; j<input.length; j++){
//       if (input[i] + input[j] !== target) {
//         break
//       }else{
//         pairs.push(input[i]);
//         pairs.push(input[j]);
//       }
//       if(pairs.length===2){
//         output.push(pairs);
       
//       }
//        pairs.length = 0;
//     }
    
//   }
//   return output
// }

function leftShiftArrayByOnePosition(array){
  for (let i = 0; i < 1; i++) {
    array.push(array[i]);
    array.splice(0, 1);
  }
  return array
}

function countHowManyTimesAnElementAppearInArray(el,arr){
  let obj = {}
  for(let i=0; i<arr.length; i++){
    obj[arr[i]] ? obj[arr[i]]++ : obj[arr[i]]=1
  }
  return obj[el]
}

























