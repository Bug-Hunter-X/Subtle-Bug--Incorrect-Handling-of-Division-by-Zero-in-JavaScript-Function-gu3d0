# Subtle Bug: Incorrect Handling of Division by Zero

This repository demonstrates a subtle bug in a JavaScript function that incorrectly handles division by zero.  The function `foo(a, b)` attempts to divide `a` by `b`, but its handling of cases where either `a` or `b` is 0 is flawed.

The bug is demonstrated in `bug.js`. The corrected version is in `bugSolution.js`.

## Bug Description

The function `foo` has the following issues:

* **Incorrect behavior:** When either `a` or `b` (but not both) is 0, it returns 1. This is incorrect, as division by zero is undefined.
* **Missing error handling:** There's no attempt to handle or signal the division by zero error. This could lead to unexpected results in programs that depend on the function.

## Solution

The `bugSolution.js` file provides a corrected version of the function. The solution adds a check for division by zero and returns `NaN` in those cases, which is the standard way to represent undefined mathematical results in JavaScript.
