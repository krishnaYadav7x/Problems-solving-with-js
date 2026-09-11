function splitNumberToDigits(num){
  let result =[]
  let number = num
  while(number>0){
    result.push(number%10)
    number = Math.floor(number/10)
  }
  return result.reverse()
}

function removeDecimalPoint(n){
  let number = n
  while (number % 1 !== 0) {
    number *= 10;
  }
  return number
}

function separateWholeAndFractionalPart(n){
  const fractionalPart = +(n%1).toFixed(2)
  const wholePart = n-fractionalPart
  return {fractionalPart,wholePart}
}

function generateDecimalNumber(whole,fraction){
  let number = [...whole,...fraction]
  let output = 0
  for(let i=0; i<number.length;i++){
    output+=number[i]*10**(number.length-i-1)
  }
  return output/(10**fraction.length)
}

function reverseNumber(num){
  let number = num
  let numArr = []
  let output = 0
  while(number>0){
    numArr.push(number%10)
    number = Math.floor(number/10)
  }
  for(let i=0; i<numArr.length;i++){
    output+=numArr[i]*10**(numArr.length-i-1)
  }
  return output
}






















