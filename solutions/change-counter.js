let total = 0;
const change = [0,0,0,0];
//[quarters, dimes, nickles, pennies]

function quarters(x) {
  if (change%25 == 0) {
    change[0] = `${total/25} quarters`;
  } else {
    change[0] = `${(total-total%25)/25} quarters`;
    total = total%25;
    dimes(x);
  }
}

function dimes(x) {
  if (change%10 == 0) {
    change[1] = `${total/10} dimes`;
  } else {
    change[1] = `${(total-total%10)/10} dimes`;
    total = total%10;
    nickles(x);
  }
}

function nickles(x) {
  if (change%5 == 0) {
    change[2] = `${total/5} nickles`;
  } else {
    change[2] = `${(total-total%5)/5} nickels`;
    total = total%5;
    change[3] = `${Math.round(total)} pennies`;
  }
}

function countChange(amount) {
  total = parseFloat(amount)*100;
  quarters(amount);
  return change.join(', ');
}

console.log(countChange(1.47));
