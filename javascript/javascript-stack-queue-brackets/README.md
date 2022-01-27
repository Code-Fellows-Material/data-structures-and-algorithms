# Stacks and Queues
<!-- Short summary or background information -->
Code Challenge demonstration of Stack and Queue style linked lists 

## Challenge
<!-- Description of the challenge -->
Using a Linked List as the underlying data storage mechanism, implement both a Stack and a Queue

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
All Time and Space Complexities 0(1) for code written.

## Whiteboard
![stack-and-queue](stack-and-queue.jpg)

## API
<!-- Description of each method publicly available to your Stack and Queue-->

      class Queue{
        constructor(){
          this.front = null;
          this.back = null;
        }

        enqueue(data)
        dequeue()
        peek()
        isEmpty()
        printToString()
      }

      class Stack{
        constructor(){
          this.top = null;
        }

        push(data)
        pop()
        peek()
        isEmpty()
        printToString()
      }
