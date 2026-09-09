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


