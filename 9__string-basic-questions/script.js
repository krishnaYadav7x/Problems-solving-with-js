function reverseString(str) {
  let reversedStr = "";
  for (let i = 0; i < str.length; i++) {
    reversedStr += str[str.length - 1 - i];
  }
  return reversedStr;
}

function isPalindrome(str) {
  let charFromLeft;
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    charFromLeft = str[str.length - i - 1];
    if (str[i] !== charFromLeft) return false;
  }
  return true;
}

function countFrequency(str) {
  const frequencyObj = {};
  for (const char of str) {
    frequencyObj[char] ? frequencyObj[char]++ : (frequencyObj[char] = 1);
  }
  return frequencyObj;
}

// console.log(countFrequency('banana'));

function mostFrequentChar(str) {
  const frequencyObj = {};
  let max = -Infinity;
  let mostFrequentChar;
  for (const char of str) {
    frequencyObj[char] ? frequencyObj[char]++ : (frequencyObj[char] = 1);
  }
  for (const key in frequencyObj) {
    console.log(key);
    if (frequencyObj[key] > max) {
      max = frequencyObj[key];
      mostFrequentChar = key;
    }
  }

  return mostFrequentChar;
}

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const str1Frequency = {};
  for (const str of str1) {
    str1Frequency[str] ? str1Frequency[str]++ : (str1Frequency[str] = 1);
  }
  const str2Frequency = {};
  for (const str of str2) {
    str2Frequency[str] ? str2Frequency[str]++ : (str2Frequency[str] = 1);
  }

  for (const key in str1Frequency) {
    if (!str2Frequency[key]) return false;
    if (str1Frequency[key] !== str2Frequency[key]) return false;
  }

  return true;
}
// console.log(isAnagram("lorem", "mlroe"))

function firstNonRepeatingChar(str) {
  const obj = {};
  for (const char of str) {
    obj[char] ? obj[char]++ : (obj[char] = 1);
  }
  for (const key in obj) {
    if (obj[key] === 1) {
      return key;
    }
  }
}

console.log(firstNonRepeatingChar("aabbcddeff"));













