function splitNumberToDigits(num) {
  let result = [];
  let number = num;
  while (number > 0) {
    result.push(number % 10);
    number = Math.floor(number / 10);
  }
  return result.reverse();
}

function removeDecimalPoint(n) {
  let number = n;
  while (number % 1 !== 0) {
    number *= 10;
  }
  return number;
}

function separateWholeAndFractionalPart(n) {
  const fractionalPart = +(n % 1).toFixed(2);
  const wholePart = n - fractionalPart;
  return { fractionalPart, wholePart };
}

function generateDecimalNumber(whole, fraction) {
  let number = [...whole, ...fraction];
  let output = 0;
  for (let i = 0; i < number.length; i++) {
    output += number[i] * 10 ** (number.length - i - 1);
  }
  return output / 10 ** fraction.length;
}

function reverseNumber(num) {
  let number = num;
  let reversedNum = 0;
  while (number > 0) {
    reverseNumber = reverseNumber*10+number%10
    number = Math.floor(number/10)
  }
  return reversedNum
}



function isPalindrome(n) {
  let number = n;
  let reversedNum = 0;

  while (number > 0) {
    reversedNum = reverseNumber*10+number%10
    number = Math.floor(number/10)
  }

  return reversedNum===n
}


function isArmStrong(n){
  let number = n
  let digitsCubeSum = 0
  while(number>0){
    digitsCubeSum+=(number%10)**3
    number = Math.floor(number/10)
  }
  return digitsCubeSum===n
}
function isNarcissisticNumber(n){
  let number = n
  let digitsCubeSum = 0
  while(number>0){
    digitsCubeSum+=(number%10)**4
    number = Math.floor(number/10)
  }
  return digitsCubeSum===n
}

function sumOfDigits(n){
  let number = n
  let digitsSum = 0
  while(number>0){
    digitsSum+=number%10
    number = Math.floor(number/10)
  }
  return digitsSum
}

function averageOfDigits(n){
  let number = n
  let digitsSum = 0
  let totalDigits = 0
  while(number>0){
    digitsSum+=number%10
    totalDigits+=1
    number = Math.floor(number/10)
  }
  return digitsSum/totalDigits
}

function findSmallestAndLargestDigit(n){
  let number = n
  let largestDigits = -Infinity
  let smallestDigits = Infinity
  while(number>0){
    if(number%10>largestDigits){
      largestDigits=number%10
    }
    if (number%10<smallestDigits){
      smallestDigits=number%10
    }
    number = Math.floor(number/10)
  }
  return {largestDigits,smallestDigits}
}

function isStrongNum(n){
  let number = n
  let eachDigitsFactorial = number%10
  let eachDigitsFactorialSum = 0
  while(number>0){
    for(let i = number%10; i>1; i--){
      eachDigitsFactorial*=(i-1)
    }
    eachDigitsFactorialSum+=eachDigitsFactorial
    
    number = Math.floor(number/10)
    eachDigitsFactorial = number % 10;
  }
  return eachDigitsFactorialSum === n
}









