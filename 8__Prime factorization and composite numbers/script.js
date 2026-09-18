function findPrimeFactorization(n){
  const primeFactorization = []
  let number  = n
  while(number%2===0){
    primeFactorization.push(2)
    number = number/2
  }
  for(let i=3; i<=number; i+=2){
    while(number%i===0){
      primeFactorization.push(i);
      number = number / i;
    }
  }
  return primeFactorization
}
