function findPrimeFactorization(n) {
  const primeFactorization = [];

  let number = n;
  while (number % 2 === 0) {
    primeFactorization.push(2);
    number = number / 2;
  }
  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    while (number % i === 0) {
      primeFactorization.push(i);
      number = number / i;
    }
  }
  if (number > 1) {
    primeFactorization.push(number);
  }
  return primeFactorization;
}

function factorizationInExponentForm(n) {
  const factors = {};
  let output = "";
  let number = n;
  while (number % 2 === 0) {
    factors[2] ? factors[2]++ : (factors[2] = 1);
    number /= 2;
  }
  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    while (number % i === 0) {
      factors[i] ? factors[i]++ : (factors[i] = 1);
      number /= i;
    }
  }
  if (number > 1) {
    factors[number] = 1;
  }
  for (let keys in factors) {
    output += `*${keys}`;
    output += `^${factors[keys]}`;
  }
  return output.slice(1, output.length);
}

function distinctPrimeFactor(n) {
  let number = n;
  const factors = [];
  while (number % 2 === 0) {
    factors.push(2);
    number /= 2;
  }
  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    while (number % i === 0) {
      factors.push(i);
      number /= i;
    }
  }
  if (number > 1) {
    factors.push(number);
  }
  for (let i = 0; i < factors.length; i++) {
    if (factors.includes(factors[i])) {
      factors.splice(i, 1);
    }
  }
  return factors;
}

function powerfulNumber(n) {
  let number = n;

  const factors = {};
  while (number % 2 === 0) {
    factors[2] ? factors[2]++ : (factors[2] = 1);
    number /= 2;
  }
  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    while (number % i === 0) {
      factors[i] ? factors[i]++ : (factors[i] = 1);
      number /= i;
    }
  }
  if (number > 1) {
    factors[number] = 1;
  }

  for (let keys in factors) {
    if (factors[keys] >= 2) {
      return "Powerful number";
    }
  }
  return "Not powerful";
}

function isSquareFree(n) {
  let number = n;

  const factors = {};
  while (number % 2 === 0) {
    factors[2] ? factors[2]++ : (factors[2] = 1);
    number /= 2;
  }
  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    while (number % i === 0) {
      factors[i] ? factors[i]++ : (factors[i] = 1);
      number /= i;
    }
  }
  if (number > 1) {
    factors[number] = 1;
  }

  for (let keys in factors) {
    if (factors[keys] !== 1) {
      return "Not square free";
    }
  }
  return "Square free";
}

function distinctPrimeFactorProduct(n) {
  let number = n;
  let product = 1;
  const factors = {};
  while (number % 2 === 0) {
    factors[2] ? factors[2]++ : (factors[2] = 1);
    number /= 2;
  }
  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    while (number % i === 0) {
      factors[i] ? factors[i]++ : (factors[i] = 1);
      number /= i;
    }
  }
  if (number > 1) {
    factors[number] = 1;
  }

  for (let keys in factors) {
    product *= keys;
  }
  return product;
}

function isPrimeNumber(n) {
  if (n <= 1) return;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

function isSmithNumber(n) {
  if (n === 1) return;
  if (isPrimeNumber(n)) return;
  let number = n;
  let number2 = n;
  let sumOfDigits = 0;
  while (number2 > 0) {
    sumOfDigits += number2 % 10;
    console.log(number2 % 10);
    number2 = Math.floor(number2 / 10);
  }
  let sumOfPrime = 0;
  const factors = [];
  while (number % 2 === 0) {
    factors.push(2);
    number /= 2;
  }
  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    while (number % i === 0) {
      factors.push(i);
      number /= i;
    }
  }
  if (number > 1) {
    factors.push(number);
  }

  for (let n of factors) {
    if (n % 10 > 0) {
      while (n % 10 > 0) {
        sumOfPrime += n % 10;
        n = Math.floor(n / 10);
      }
    }

    sumOfPrime += n;
  }
  console.log(sumOfDigits, sumOfPrime);
  return sumOfDigits === sumOfPrime;
}

function isUglyNumber(n) {
  let primeObj = {};
  let number = n;
  while (number % 2 === 0) {
    primeObj[2] ? primeObj[2]++ : (primeObj[2] = 1);
    number /= 2;
  }
  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) {
      primeObj[i] ? primeObj[i]++ : (primeObj[i] = 1);
    }
    number /= i;
  }
  if(number>1)primeObj[number]=1
  for(const key in primeObj){
    if(key==='2'||key==='3'||key==='5'){
      if (primeObj[key] === 1) return true;
    }
    
  }
  return false
}




function isKaprekar(n) {
  let square = n ** 2;
  let digitsSum = 0
  const numLength = n.toString().length;
  const divisor = 10 ** numLength;

  while (square > 0) {
    digitsSum += square % divisor;
    square = Math.floor(square / divisor);
  }
  return n===digitsSum
}


function isHappyNumber(n){                                            
  let number = n
  const storedNums = []
  let digitsSum = 0
  while(number!==1){
    while(number>0){
      digitsSum+=(number%10)**2
      number = Math.floor(number/10)
    }
    if(storedNums.includes(digitsSum))return false
    storedNums.push(digitsSum)
    number = digitsSum
    digitsSum=0
  }
  return true
}

console.log(isHappyNumber(79));


function binaryToDecimal(n){
  let number = n
  const  binaryDigitsArray = []
  let decimalNumber = 0
  while (number > 0) {
    binaryDigitsArray.push(number%10);
    number = Math.floor(number/10)
  }
  for(let i=0; i<binaryDigitsArray.length; i++){
    decimalNumber+=(binaryDigitsArray[i]*2**(binaryDigitsArray.length-1-i))
  }

  return decimalNumber
}

binaryToDecimal("101101");


function swapVariable(a,b){
  return {a:a*b/a,b:a*b/b}
}











