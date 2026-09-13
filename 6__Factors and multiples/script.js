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







