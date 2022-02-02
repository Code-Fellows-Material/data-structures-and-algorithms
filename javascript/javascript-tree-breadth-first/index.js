"use strict";

class Node {
  constructor(value) {
    (this.value = value), (this.left = null), (this.right = null);
  }
}

class BinaryTree {
  constructor() {
    this.root;
  }

  preOrder_DFS() {
    let data = []; // The array that will hold our return data

    function traverse(node) {
      // Create a helper function to traverse
      data.push(node.value); // Push the value in the argument node into our return value array
      if (node.left) traverse(node.left); // Check if there is a left node, if so,  call the traverse function recursively, passing node.left in
      if (node.right) traverse(node.right); // Check if there is a right node, if so,  call the traverse function recursively, passing node.right in
    }

    traverse(this.root); // Call the traverse function, passing in the root node of the BST
    return data; // Return the data in our array
  }

  postOrder_DFS() {
    let data = []; // The array that will hold our return data

    function traverse(node) {
      // Create a helper function to traverse
      if (node.left) traverse(node.left); // Check if there is a left node, if so,  call the traverse function recursively, passing node.left in
      if (node.right) traverse(node.right); // Check if there is a right node, if so,  call the traverse function recursively, passing node.right in
      data.push(node.value); // Push the value in the argument node into our return value array
    }

    traverse(this.root); // Call the traverse function, passing in the root node of the BST
    return data; // Return the data in our array
  }

  inOrder_DFS() {
    let data = []; // The array that will hold our return data

    function traverse(node) {
      // Create a helper function to traverse
      if (node.left) traverse(node.left); // Check if there is a left node, if so,  call the traverse function recursively, passing node.left in
      data.push(node.value); // Push the value in the argument node into our return value array
      if (node.right) traverse(node.right); // Check if there is a right node, if so,  call the traverse function recursively, passing node.right in
    }

    traverse(this.root); // Call the traverse function, passing in the root node of the BST
    return data; // Return the data in our array
  }
}

class BST extends BinaryTree {
  constructor() {
    super();
  }

  add(val) {
    function traverseAndAdd(node, addVal) {
      // Create a helper function to traverse
      if (node.left && node.left.value < addVal)
        traverseAndAdd(node.left, addVal); // Check if there is a left node, if so,  call the traverse function recursively, passing node.left in
      node.value = addVal; // Push the value in the argument node into our return value array
      if (node.right && node.left.value < addVal)
        traverseAndAdd(node.right, addVal); // Check if there is a right node, if so,  call the traverse function recursively, passing node.right in
    }
    traverseAndAdd(this.root, val); // Call the traverse function, passing in the root node of the BST
    return 1;
  }

  contains(val) {
    let contains = false;
    function traverseAndCheck(node, checkVal) {
      // Create a helper function to traverse and check for equivalence.
      if (node.left) traverseAndCheck(node.left, checkVal); // Check if there is a left node, if so,  call the traverse function recursively, passing node.left in
      if (node.value === checkVal) contains = true; // Checks to see if the value held in the node is equal to the check value
      if (node.right) traverseAndCheck(node.right, checkVal); // Check if there is a right node, if so,  call the traverse function recursively, passing node.right in
    }
    traverseAndCheck(this.root, val); // Call the traverse function, passing in the root node of the BST
    return contains;
  }

  findMax(){
    let max = 0;
    function traverseAndCheck(node) {
      // Create a helper function to traverse and check for equivalence.
      if (node.left) traverseAndCheck(node.left); // Check if there is a left node, if so,  call the traverse function recursively, passing node.left in
      if (node.value > max) max = node.value; // Checks to see if the current node value is less than max, if so make node.value max
      if (node.right) traverseAndCheck(node.right); // Check if there is a right node, if so,  call the traverse function recursively, passing node.right in
    }
    traverseAndCheck(this.root); // Call the traverse function, passing in the root node of the BST
    return max; // return max value
  }

  BFS(){
    let node  = this.root; // Set our root node to our node
    let data  = [];        //This will hold our data to return
    let queue = [];        //This will keep track of the nodes in our tree
    
    queue.push(node);      //This pushes the root node into the end of our tree, making it the first item in our queue
    
    while(queue.length){                      // Loop while there is something in the queue. We can't just say while(queue), an empty array still returns true
      node = queue.shift();                   // Take the node at the beginning of the queue and put it in the node
      data.push(node.value);                  // Push the current node's value into our data array
      if(node.left) queue.push(node.left);    // Check if there is a left node, if so add it to the queue
      if(node.right) queue.push(node.right);  // Check if there is a right node, if so add it to the queue
    }
    return data; // return the data in our array
  }
}



module.exports = BST; 