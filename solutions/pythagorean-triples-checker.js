function checkTriple(a,b,c) {
  const triple = Math.pow(a,2) + Math.pow(b,2) === Math.pow(c,2);
  return triple ? `(${a},${b},${c}) is a Pythagorean triple`:`(${a},${b},${c}) is not a Pythagorean triple`;
}

console.log(checkTriple(3,4,5));
console.log(checkTriple(1,2,5));
console.log(checkTriple(5,12,13));
