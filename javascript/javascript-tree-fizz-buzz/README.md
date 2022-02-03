# tree-fizz-buzz

## Problem:
- Conduct “FizzBuzz” on a k-ary tree while traversing through it to create a new tree.

## Pseudo:
- pass sourceTree to function
- create a node var from the root node of the source tree
- create a newTree, pass in the node just created to the constructor
- create a newNode var from the root node of the new tree
- define a traversal function, accept two node arguments
  - loop through the children of the node
    - recursively calling the traversal function and passing in the node at children\[i] for both node and new node
  - create a tempVar and set it equal to an empty string.
  - check if the value at the current node is divisible by 3
    - if so, set tempVar to "fizz";
  - check if the value at the current node is divisible by 5
    - if so, add "buzz" to tempVar
- check tempVar
  - if truthy, set newNode.value to tempVar
  - if falsey, set newNode.value to node.value
- call the traverse function passing in node and newNode
- return newTree

 ---

## Whiteboard Process
![whiteboard](/whiteboard.jpg)


-Kellen Linse