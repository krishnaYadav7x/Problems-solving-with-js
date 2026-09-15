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
    fibonacci.push(fibonacci[i]+fibonacci[fibonacci.length-2])
  }
  return fibonacci
}















