# “Table of Contents” 

2. array-insert-shift

--- 

## Add a value to the middle of an array
<!-- Description of the challenge -->
- Write a function called insertShiftArray which takes in an array and a value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

 ---

## Whiteboard Process
<!-- Embedded whiteboard image -->
![whiteboard](/Whiteboard.jpg)

## Approach & Efficiency
<!-- What approach did you take? Discuss Why. What is the Big O space/time for this approach? -->

- I took the approach of using two temp variables, then, after finding the center of the array I inserted the new value, then shifter each value in the array down by one.

  - Time: O(n) because the complexity grows linearly as the size does
  - Space: O(2) because we only need two additional variables to achieve our desired outcome.