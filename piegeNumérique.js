let resultMewtwo = [];

for (let i = 1; i < 1000; i++) {
  
  if (i % 7 === 0) {
    const sum = i.toString().split('').reduce((a, b) => a + parseInt(b), 0);
    if (sum === 11) {
      resultMewtwo.push(i);
    }
  }
}

console.log(resultMewtwo)

56,119,182,245,308,371,434,560,623,812