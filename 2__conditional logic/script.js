//q1

function maximumOfThreeNumbers(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= c) {
    return b;
  } else {
    return c;
  }
}

//with ternary operator

function maxOfThreeNumbers(a, b, c) {
  return a >= b && a >= c ? a : b >= c ? b : c;
}

//q2

function checkNumIsPositiveNegativeOrZero(num) {
  if (num < 0) {
    return "negative";
  } else if (num === 0) {
    return "zero";
  } else {
    return "positive";
  }
}

//q3   cumulative calculation + condition chaining.

function calculateElectricityBill(unit) {
  let bill = 0;
  if (unit <= 100) {
    bill = unit * 5;
  } else if (unit <= 200) {
    bill = (unit - 100) * 7 + 100 * 5;
  } else if (unit <= 300) {
    bill = 100 * 5 + 100 * 7 + (unit - 200) * 10;
  } else {
    bill = 100 * 5 + 100 * 7 + 100 * 10 + (unit - 300) * 12;
  }
  return bill;
}

//q4 Check if a Character is a Vowel or Consonant

// function isVowelOrConsonant(char){
//   if(char===''|| char.length!==1)return 'enter a vowel or a consonant'

// }

function isVowelOrConsonant(character) {
  if (!/^[a-z]$/i.test(character)) return "Not vowel or consonant";

  const vowel = "aeiou";

  if (vowel.includes(character.toLowerCase())) {
    return "vowel";
  } else {
    return "consonant";
  }
}










