function splitNumberIntoDigits(num){
  let number = num
  let output = []
  while(number>0){
    output.push(number%10)
    number = Math.floor(number / 10);
  }
  return output
}

function removeDecimalPointMathematically(num){
  let number = num
  while (number % 1 !== 0) {
    number = number * 10;
  }
  return number
}

function separateWholeAndFractionalParts(num){
  
  const fractionalPart = +(num % 1).toFixed(2);
  const integerPart = (num-fractionalPart)
  return {fractionalPart,integerPart}
}


function countWholeAndFractionDigit(num){
  let fractionalPart = num%1
  let integerPart = num-fractionalPart
  let wholeCount = 0
  let fractionCount =0
  while (fractionalPart % 1 !== 0) {
    fractionalPart = fractionalPart * 10;
    fractionCount++;
  }
  while(integerPart>0){
    integerPart = Math.floor(integerPart/10)
    wholeCount++
  }
  return {wholeCount,fractionCount}
}


function reverseNumber(num){   //[6,7,8,9]
  let reverseNumber = 0
  for(let i=0; i<num.length;i++){
    reverseNumber+=num[i]*10**[i]
  }
  return reverseNumber
}

function generateDecimalNum(whole,fraction){
  let number = [...whole,...fraction]
  let result = 0
  for (let i = 0; i < number.length; i++) {
    result+=number[i]*(10**(number.length-i-1))
  }
  return result/(10**fraction.length)
}











