//solution #1
function armstrong(number) {
  const numberArray = number.toString().split("");
  let sum = 0;
  numberArray.forEach(digit => sum += (digit**numberArray.length) );
  if (sum == number) {
    return console.log(`${number} is an Armstrong number!`);
  } else {
    return console.log(`${number} is not an Armstrong number!`);
  }
}


//solution #2
function armstrong2(number) {
  const numberArray = number.toString().split("");
  const sum = numberArray.reduce( (total, x) =>
    total + (parseInt(x, 10)**numberArray.length) , 0);
  return sum === number ?
    console.log(`${number} is an Armstrong number!`) :
    console.log(`${number} is not an Armstrong number!`);
}
