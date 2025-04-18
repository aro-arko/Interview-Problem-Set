// Function to square a number
function square(num) {
  return num * num;
}

// Function to double a number
function double(num) {
  return num * 2;
}

// Function to add 5 to a number
function addFive(num) {
  return num + 5;
}

// Compose the functions: square → double → addFive
function composedFunction(num) {
  const squared = square(num);
  const doubled = double(squared);
  const result = addFive(doubled);
  return result;
}

// Test the composed function
const finalResult = composedFunction(3);
console.log(finalResult);
