# stack-queue-brackets

--- 

## stack-queue-brackets
- Write a function called validateBrackets that takes in a string and returns a boolean,
Boolean indicates whether or not brackets in a string are balanced.

 ---

## Whiteboard Process
![whiteboard](/whiteboard.jpg)

## Approach & Efficiency

  - This was a tricky one. It took me a long time to figure out that I needed to use a stack for holding the open brackets. 
    - I used a for of loop for to iterate through the brackets in question
      - Adding the open brackets to a stack
      - or, checking the closing brackets against that stack.
      - Then checking to make sure th at stack was empty at the end. 
  
  - Time: O(n) because the complexity grows linearly as the size does
  - Space: O(n) because the amount of space needed to hold the brackets grows as the amount of brackets grows. 

-Kellen Linse