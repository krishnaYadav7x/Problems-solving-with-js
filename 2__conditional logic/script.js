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

//q4

function isVowelOrConsonant(character) {
  if (!/^[a-z]$/i.test(character)) return "Not vowel or consonant";

  const vowel = "aeiou";

  if (vowel.includes(character.toLowerCase())) {
    return "vowel";
  } else {
    return "consonant";
  }
}

//q5

function isALeapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    return "Leap year";
  } else if (year % 400 === 0) {
    return "Leap year";
  }

  return "Not leap year";
}

//q6

function checkCharacterType(character) {
  const asciiCode = character.toString().charCodeAt();
  if (asciiCode >= 48 && asciiCode <= 57) {
    return "Number";
  } else if (asciiCode >= 65 && asciiCode <= 90) {
    return "UpperCase";
  } else if (asciiCode >= 97 && asciiCode <= 122) {
    return "LowerCase";
  } else if (
    (asciiCode >= 123 && asciiCode <= 126) ||
    (asciiCode >= 33 && asciiCode <= 47) ||
    (asciiCode >= 58 && asciiCode <= 64) ||
    (asciiCode >= 91 && asciiCode <= 96)
  ) {
    return "Special Char";
  }
  return "Invalid character";
}

//q7

function calculateIncomeTax(income) {
  let tax;
  if (income <= 250000) return 0;
  if (income >= 250001 && income <= 500000) {
    tax = ((income - 250000) * 5) / 100;
  } else if (income >= 500001 && income <= 1000000) {
    tax = ((income - 500000) * 20) / 100 + (250000 * 5) / 100;
  } else if (income > 1000000) {
    tax =
      (250000 * 5) / 100 +
      (500000 * 20) / 100 +
      ((income - 1000000) * 30) / 100;
  }
  return +tax.toFixed(2);
}

//q8
















