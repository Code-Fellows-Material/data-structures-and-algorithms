# stack-pseudo-queue

--- 

## stack-pseudo-queue
- Write a class called PseudoQueue that implements a standard queue interface (enqueue and dequeue), but uses two stack instances instead to manage the queue.

 ---

## Whiteboard Process
![whiteboard](/whiteboard.jpg)

## Approach & Efficiency

  - Enqueueing was straight forward, You just need to track the queue's front property differently, depending if anything is in your queue or not.
  - Dequeueing took a little more effort, one stack needs to be emptied into the other, then the top of the second stack needs saved to a variable, before returning the rest of that stack to the previous stack and returning that saved variable.

  - Time: O(n) because the complexity grows linearly as the size does
  - Space: O(1) because the additional variables needed does not grow, regardless of the size of the queue. 