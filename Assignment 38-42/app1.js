function power(a, b) {
    if (b === 0) {
      return 1;
    } else if (b > 0) {
      let result = 1;
      for (let i = 1; i <= b; i++) {
        result *= a;
      }
      return result;
    }
}
const base = 2;
const exponent = 3;
const result = power(base, exponent);
console.log(`${base} raised to the power of ${exponent} is ${result}`);