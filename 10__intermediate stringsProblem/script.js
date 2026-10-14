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