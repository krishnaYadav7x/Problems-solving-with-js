function splitNumberToDigits(num){
  let result =[]
  let number = num
  while(number>0){
    result.push(number%10)
    number = Math.floor(number/10)
  }
  return result.reverse()
}