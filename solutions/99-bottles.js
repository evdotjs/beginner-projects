function bottles(number) {
  for (let i = number; i > 0; i-- ) {
    if (i > 2) {
      console.log(`${i} bottles of beer on the wall, ${i} bottles of beer. Take one down, pass it around, ${i-1} bottles of beer on the wall...`);
    } else if ( i == 2 ) {
      console.log(`${i} bottles of beer on the wall, ${i} bottles of beer. Take one down, pass it around, ${i-1} bottle of beer on the wall...`);
    } else {
      console.log(`${i} bottle of beer on the wall, ${i} bottle of beer. Take one down, pass it around, ${i-1} bottles of beer on the wall...`);
    }
  }
}

bottles(99);
