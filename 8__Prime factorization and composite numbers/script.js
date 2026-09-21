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



function isSmithNumber(n) {
  let number = n;
  let number2 = n;
  let sumOfDigits = 0;
  while (number2 >= 1) {
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
    if(n%10>=1){
      while(n%10>=1){
        sumOfPrime+=n%10
        n=Math.floor(n/10)
      }
    }

    sumOfPrime += n;
  }
  console.log(sumOfDigits, sumOfPrime);
  return sumOfDigits === sumOfPrime;
}
//composite check have to apply 