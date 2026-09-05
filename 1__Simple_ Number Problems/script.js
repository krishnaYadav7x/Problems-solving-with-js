//q1

function printNumbersFromOne(n){
  for(let i=1;i<=n;i++){
    console.log(i);
  }
}

//q2

function printNumberTo1(n){
  for(let i=n;i>=1;i--){
    console.log(i);
  }
}

// q3

function printEvenNumberToN(n){
  for(let i=1;i<=n;i++){
    if(i%2===0){
      console.log(i);
    }
  }
}

// q4

function sumOfFirstNNaturalNumbers(n){
  let sum = 0
  for(let i=1;i<=n;i++){
    sum+=i
  }
  return sum
}

//q5

function factorialOfN(n){
  let factorial = 1
  for(let i=n;i>=1;i--){
    factorial*=i
  }
  return factorial
}

//q6 

function sumOfAllEvenNumbersUptoN(n){
  let sum = 0
  for(let i=1;i<=n;i++){
    if(i%2===0){
      sum+=i
    }
  }
  return sum
}

//q7

function printSquaresOfNumbersFrom1toN(n){
  for(let i=1;i<=n;i++){
    console.log(i**2);
  }
}

//q8

function printAllNumDivisibleBy3and5uptoN(n){
  for(let i=1;i<=n;i++){
    if(i%3===0&& i%5===0){
      console.log(i);
    }
  }
}


//q10

function sumOfOddNumsUptoN(n){
  let sum = 0
  for(let i=1;i<=n;i++){
    if(i%2===1){
      sum+=i
    }
  }
  return sum
}

//q11

function printCubesFrom1toN(n){
  for(let i=1; i<=n;i++){
    console.log(i**3);
  }
}

//q12

function printNumbersBothPerfectSquaresAndEven(start,end){
  for(let i=start;i<=end;i++){
    if(i%2===0 && Number.isInteger(Math.sqrt(i))){
      console.log(i);
    }
  }
}


//q13
//optimized

function sumOfNumsFromStartToEnd(start,end){
  return (end*(end+1))/2-((start-1)*start)/2
}

//optimized

function sumOfNumbersFrom1UptoN(n){
  return n*(n+1)/2
}






















