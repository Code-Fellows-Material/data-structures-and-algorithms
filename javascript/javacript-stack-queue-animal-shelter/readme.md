# stack-queue-animal-shelter

--- 

## stack-pseudo-queue
- Create a class called AnimalShelter which holds only dogs and cats.
- The shelter operates using a first-in, first-out approach.

 ---

## Whiteboard Process
![whiteboard](/whiteboard.jpg)

## Approach & Efficiency

  - Enqueueing was straight forward, You check for animal, add that animal to their respective stack, return null if animal doesn't have a stack.
  - Dequeueing was straight forward, You check for animal, pop the top animal off their respective stack, return null if animal doesn't have a stack.
  
  - Time: O(n) because the complexity grows linearly as the size does
  - Space: O(1) no additional variables are needed.

-Kellen Linse