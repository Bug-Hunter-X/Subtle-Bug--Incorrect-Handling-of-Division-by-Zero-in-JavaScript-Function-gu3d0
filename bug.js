function foo(a, b) {
  if (a === 0 && b === 0) {
    return 0; // Correct behavior
  }
  if (a === 0 || b === 0) {
    return 1; // Incorrect behavior: should be NaN or throw an error
  }
  return a / b; 
}