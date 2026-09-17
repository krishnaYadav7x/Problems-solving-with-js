function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function areCoPrime(a, b) {
  let large = a > b ? a : b;
  let small = a + b - large;
  while (large % small !== 0) {
    let remainder = large % small;
    large = small;
    small = remainder;
  }
  return small === 1;
}

function printFibonacci(limit) {
  let fibonacci = [0, 1];
  let length = fibonacci.length;
  for (let i = 1; i <= limit - length; i++) {
    fibonacci.push(fibonacci[i] + fibonacci[fibonacci.length - 2]);
  }
  return fibonacci;
}

function nthFibonacci(n) {
  return +(
    (1 / Math.sqrt(5)) *
    (((1 + Math.sqrt(5)) / 2) ** n - ((1 - Math.sqrt(5)) / 2) ** n)
  ).toFixed(2);

  //formula of finding nth fibonacci number.
}

function isFibonacci(n) {
  if (
    Number.isInteger(Math.sqrt(5 * n ** 2 + 4)) ||
    Number.isInteger(Math.sqrt(5 * n ** 2 - 4))
  )
    return true;
}

function printPrimeNumbers(limit) {
  console.log(2);
  for (let i = 3; i <= limit; i += 2) {
    let isPrime = true;
    for (let k = 2; k <= Math.sqrt(i); k++) {
      if (i % k === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(i);
    }
  }
}

function calculatePrimeSumTillLimit(limit) {
  let sum = 2;
  // 2 represent initial prime
  for (let i = 3; i <= limit; i += 2) {
    let isPrime = true;
    for (let k = 2; k <= Math.sqrt(i); k++) {
      if (i % k === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      sum += i;
    }
  }
  return sum;
}

function areTwinPrime(a, b) {
  if (a <= 1 || b <= 1) return false;
  for (let i = 2; i <= Math.sqrt(a); i++) {
    if (a % i === 0) return false;
  }
  for (let i = 2; i <= Math.sqrt(b); i++) {
    if (b % i === 0) return false;
  }
  return Math.abs(a - b === 2);
}

function printFibonacciToLimit(limit) {
  let fibonacci = [0, 1];
  let length = fibonacci.length;
  for (let i = 1; i <= limit - length; i++) {
    if (fibonacci[i] + fibonacci[i - 1] > limit) {
      return fibonacci;
    }
    fibonacci.push(fibonacci[i] + fibonacci[i - 1]);
  }
}

function generateFibonacciWithinRange(start, end) {
  for (let i = start; i <= end; i++) {
    if (
      Number.isInteger(Math.sqrt(5 * i ** 2 + 4)) ||
      Number.isInteger(Math.sqrt(5 * i ** 2 - 4))
    ) {
      console.log(i);
    }
  }
}

function sumOfEvenFibonacciNumbersUpToNTerms(n) {
  let sum = 0;
  const nthFibonacci = Math.round(
    (((1 + Math.sqrt(5)) / 2) ** n - ((1 - Math.sqrt(5)) / 2) ** n) /
      Math.sqrt(5),
  );
  for (let i = 0; i <= nthFibonacci; i++) {
    if (
      Number.isInteger(Math.sqrt(5 * i ** 2 + 4)) ||
      Number.isInteger(Math.sqrt(5 * i ** 2 - 4))
    ) {
      if (i % 2 === 0) {
        sum += i;
      }
    }
  }
  return sum;
}

function isFibonacciSumIsPrime(a, b) {
  if (
    (Number.isInteger(Math.sqrt(5 * a ** 2 + 4)) ||
      Number.isInteger(Math.sqrt(5 * a ** 2 - 4))) &&
    (Number.isInteger(Math.sqrt(5 * b ** 2 + 4)) ||
      Number.isInteger(Math.sqrt(5 * b ** 2 - 4)))
  ) {
    let sum = a + b;

    for (let i = 2; i <= Math.sqrt(sum); i++) {
      if (sum % i === 0) return false;
    }
    return true;
  }
}









