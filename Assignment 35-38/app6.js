const num = parseInt(prompt("Enter a number:"));
if (!isNaN(num)) {
  const result = factorialIterative(num);
  alert(`The factorial of ${num} is ${result}`);
} else {
  console.log("Invalid input. Please enter a valid number.");
}
function factorialIterative(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
