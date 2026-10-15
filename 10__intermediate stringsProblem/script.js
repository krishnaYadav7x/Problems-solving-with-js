function manualSubstringSearch(mainStr,targetStr){
  if(!mainStr.includes(targetStr)) return false
  const startIndexTargetStr = targetStr[0]
  console.log(startIndexTargetStr);
  for(let i=0; i<mainStr.length; i++){
    if(mainStr[i]===startIndexTargetStr){
      return {foundAtIndex:i}
    }
  }

}
console.log(manualSubstringSearch("hello world", "xyz"));

function checkIfOneStringIsRotationOfAnother(mainStr,targetStr){
  const str = mainStr+mainStr
  
  let newStr = ''
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < targetStr.length+i; j++) {
      newStr += str[j];
    }
    if(newStr===targetStr){
      return "Rotation";
    }
    newStr = ''
  }
  return 'Not rotation'
}
console.log(checkIfOneStringIsRotationOfAnother("abcde", "cdeab"));














