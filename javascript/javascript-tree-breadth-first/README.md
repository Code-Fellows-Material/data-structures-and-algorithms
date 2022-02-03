# tree-max

## Problem:
- Find the Maximum Value in a Binary Tree

## Pseudo:

    - Set our root node to our node
    - Create Var that will hold our data to return
    - Create Var that will keep track of the nodes in our tree
    
    - Push the root node into the end of our tree, making it the first item in our queue
    
    - Loop while there is something in the queue. We can't just say while(queue), an empty array still returns true
    - Take the node at the beginning of the queue and put it in the node
    - Push the current node's value into our data array
    - Check if there is a left node, if so add it to the queue
    - Check if there is a right node, if so add it to the queue

    - return the data in our array

 ---

## Whiteboard Process
![whiteboard](/whiteboard.jpg)


-Kellen Linse