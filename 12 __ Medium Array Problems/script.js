function moveZeroToEnd(input) {
  for (let i = 0; i < input.length; i++) {
    if (input[i - 1] === 0) {
      input.splice(i - 1, 1);
      input.push(0);
    }
  }
  return input;
}

function firstRepeatingElementInAnArray(input){
  const compareArr = {}
  let minIndex = Infinity
  for(const num of input){
    compareArr[num]?compareArr[num]++:compareArr[num]=1
  }
  for(const key in compareArr){
    if(compareArr[key]>1){
      if(input.indexOf(key)<minIndex){
        minIndex=key
      }
    }
  }
  return +minIndex;
}