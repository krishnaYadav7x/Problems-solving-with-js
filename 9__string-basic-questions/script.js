function reverseString(str) {
  let reversedStr = "";
  for (let i = 0; i < str.length; i++) {
    reversedStr += str[str.length - 1 - i];
  }
  return reversedStr;
}
console.log(reverseString("javascript"));

function isPalindrome(str) {
  
  let charFromLeft
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    charFromLeft = str[str.length - i - 1];
    if (str[i] !== charFromLeft) return false;
  }
  return true
}

function countFrequency(str){
  const frequencyObj = {}
  for(const char of str){
    frequencyObj[char]?frequencyObj[char]++:frequencyObj[char]=1
  }
  return frequencyObj
}

console.log(countFrequency('banana'));



function mostFrequentChar(str) {
  const frequencyObj = {};
  let max = -Infinity
  let mostFrequentChar
  for (const char of str) {
    frequencyObj[char] ? frequencyObj[char]++ : (frequencyObj[char] = 1);
  }
  for(const key in frequencyObj){
    console.log(key);
    if(frequencyObj[key]>max){
      
      max = frequencyObj[key]
      mostFrequentChar = key
    }
  }

  return mostFrequentChar
}































