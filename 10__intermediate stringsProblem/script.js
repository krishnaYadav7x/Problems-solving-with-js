function manualSubstringSearch(mainStr, targetStr) {
  if (!mainStr.includes(targetStr)) return false;
  const startIndexTargetStr = targetStr[0];
  console.log(startIndexTargetStr);
  for (let i = 0; i < mainStr.length; i++) {
    if (mainStr[i] === startIndexTargetStr) {
      return { foundAtIndex: i };
    }
  }
}
console.log(manualSubstringSearch("hello world", "xyz"));

function checkIfOneStringIsRotationOfAnother(mainStr, targetStr) {
  const str = mainStr + mainStr;

  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < targetStr.length + i; j++) {
      newStr += str[j];
    }
    if (newStr === targetStr) {
      return "Rotation";
    }
    newStr = "";
  }
  return "Not rotation";
}
console.log(checkIfOneStringIsRotationOfAnother("abcde", "cdeab"));

function eachWordFrequencyInSentence(sentence) {
  sentence = sentence.trim();
  const obj = {};
  let word = "";
  for (let i = 0; i <= sentence.length; i++) {
    if (i === sentence.length) {
      obj[word] ? obj[word]++ : (obj[word] = 1);
      word = "";
    }
    if (sentence[i] === " ") {
      obj[word] ? obj[word]++ : (obj[word] = 1);
      word = "";
    } else {
      word += sentence[i];
    }
  }
  return obj;
}

function isStringPangram(input) {
  const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();
  input = input.toLowerCase();
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== " ") {
      if (!allLetters.includes(input[i])) return false;
    }
  }
  return true;
}

function removeDuplicatesWordFromSentence(sentence) {
  sentence = sentence.trim();
  const obj = {};
  let word = "";
  let removeDuplicatesWords = "";
  for (let i = 0; i <= sentence.length; i++) {
    if (i === sentence.length) {
      obj[word] ? obj[word]++ : (obj[word] = 1);
      word = "";
    }
    if (sentence[i] === " ") {
      obj[word] ? obj[word]++ : (obj[word] = 1);
      word = "";
    } else {
      word += sentence[i];
    }
  }
  Object.keys(obj).forEach((el) => {
    removeDuplicatesWords += el;
    removeDuplicatesWords += " ";
  });
  return removeDuplicatesWords.trim();
}

function longestPalindromicSubstring(input) {
  let subString = "";
  let palindromeCheck = "";
  const arr = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = i; j < input.length; j++) {
      subString += input[j];

      for (let s = subString.length - 1; s >= 0; s--) {
        if (subString.length > 2) {
          palindromeCheck += subString[s];
        }
        if (palindromeCheck === subString) {
          arr.push(palindromeCheck);
        }
      }
      palindromeCheck = "";
    }
    subString = "";
  }
  return arr;
}

function longestSubstringWithoutRepeatingChar(input) {
  let maxLength = -Infinity;
  let output = "";
  for (let i = 0; i < input.length; i++) {
    for (let j = i; j < input.length; j++) {
      if (!output.includes(input[j])) {
        output += input[j];
      } else {
        break;
      }
      // console.log(output);
    }
    if (maxLength === -Infinity) {
      if (output.length > maxLength) {
        maxLength = output;
      }
    } else if (output.length > maxLength.length) {
      maxLength = output;
    }
    
    output = "";
  }
  return maxLength;
}
