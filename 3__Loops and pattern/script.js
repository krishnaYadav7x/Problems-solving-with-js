function printRightAngledStarTriangle(rows){
  for(let i=1; i<=rows;i++){
    let row= ''
    for(let k=1; k<=i;k++){
      row+='*'
    }
    console.log(row);
  }
}


function printInvertedRightAngledTriangle(rows){
  for(let i=rows;i>=1;i--){
    let row=''
    for(let k=i;k>=1;k--){
      row+='*'
    }
    console.log(row);
  }
}


function printPyramidPattern(rows){
  for(let i=1; i<=rows;i++){
    let row = ''
    for(let k=rows-i;k>=1;k--){
      row += ' '
    }
    for(let s=1; s<=(2*i)-1;s++){
      row += '*'
    }
    console.log(row);
  }
}


// function printInvertedPyramid(rows){
//   for(let i=(rows*2)+1;i>=1;i--){
//     let row=''
//     for(let s=2*i-(i+1);s<=i;s++){
//       row+=' '
//     }
//     console.log(row);
//   }
// }














