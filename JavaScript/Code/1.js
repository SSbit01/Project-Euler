function multiplesOf3and5(number) {
  let num = 0;
  for (let i=3; i < number; i++) {
    if ([i%3,i%5].includes(0)) {
      num += i;
    }
  }
  return num;
}

module.exports = multiplesOf3and5(1000);  // 233168