function foo(a, b) {
  if (b === 0) {
    return NaN; // Handle division by zero
  }
  if (a === 0 && b === 0) {
    return 0; 
  } else if (a === 0) {
    return 0; // Correctly handles the case where 'a' is 0
  }
  return a / b; 
}