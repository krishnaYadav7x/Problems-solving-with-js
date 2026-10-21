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