function printAllFactors(n) {
  const output = [];
  let count = 0;
  for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
    count++;
    if (n % i === 0) {
      // output.push(i);
      output.splice(output.length / 2, 0, i);
      if (i !== n / i) {
        // output.push(n/i)
        output.splice(output.length / 2 + 1, 0, n / i);
      }
    }
  }
  console.log(count);
  return output;
}

function printAllMultiplesOfNumber(n, limit) {
  let output = [];
  for (let i = n; i <= limit; i += n) {
    output.push(i);
  }

  return output;
}

function findHCF(n1, n2) {
  let small = n1 < n2 ? n1 : n2;
  let large = n1 > n2 ? n1 : n2;

  while (large % small !== 0) {
    let remainder = large % small;
    large = small;
    small = remainder;
  }
  return small
}

function findLCM(n1,n2){
  let dividend = n1>n2?n1:n2
  let divisor = n1<n2?n1:n2
  while(dividend%divisor!==0){
    let remainder = dividend%divisor
    dividend = divisor
    divisor = remainder
  }
  return n1*n2/divisor
}

function findTotalNumberOfFactors(n){
  let count = 0
  for(let i=1; i<=Math.sqrt(n); i++){
    if(n%i===0){
      count+=1
    }
    if(i!==n/i){
      count+=1
    }
  }
  return count
}

function sumOfAllFactors(n){
  let sum = 0
  for(let i=1; i<=Math.sqrt(n); i++){
    if(n%1===0){
      sum+=i
    }
    if(i!==n/i){
      sum+=(n/i)
    }
  }
  return sum
}

function greatestFactor(n){
  let greatestFactor = -Infinity
  for(let i=1; i<=Math.sqrt(n);i++){
    if(n%i===0){
      if(i>greatestFactor){
        greatestFactor = i
      }
    }
    
      if(n/i>greatestFactor&&n/i!==n){
        greatestFactor = n/i
      }
    
  }
  return greatestFactor
}


















