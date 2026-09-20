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
  const factors = {}
  let output = ''
  let number = n
  while(number%2===0){
    factors[2]?factors[2]++:factors[2]=1
    number/=2
  }
  for(let i=3; i<=Math.sqrt(number); i+=2){
    while(number%i===0){
      factors[i]?factors[i]++:factors[i]=1
      number/=i
    }
  }
  if(number>1){
    factors[number]=1
  }
  for(let keys in factors){
    output+=`*${keys}`
    output+=`^${factors[keys]}`
  }
  return output.slice(1,output.length)
}











































