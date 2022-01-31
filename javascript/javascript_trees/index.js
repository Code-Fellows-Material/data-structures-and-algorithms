'use strict'

class Node{
  constructor(value){
    this.value = value,
    this.left = null,
    this.right = null
  }
}

class BinaryTree{
  constructor(){
    this.root;
  }

  preOrder_DFS(){
    let data    = [];     // The array that will hold our return data

    function traverse(node){    // Create a helper function to traverse
      data.push(node.value);                // Push the value in the argument node into our return value array    
      if(node.left)  traverse(node.left);   // Check if there is a left node, if so,  call the traverse function recursively, passing node.left in
      if(node.right) traverse(node.right);  // Check if there is a right node, if so,  call the traverse function recursively, passing node.right in
    }

    traverse(this.root); // Call the traverse function, passing in the root node of the BST
    return data;         // Return the data in our array
  }

  postOrder_DFS(){
    let data    = [];     // The array that will hold our return data

    function traverse(node){    // Create a helper function to traverse
      if(node.left)  traverse(node.left);   // Check if there is a left node, if so,  call the traverse function recursively, passing node.left in
      if(node.right) traverse(node.right);  // Check if there is a right node, if so,  call the traverse function recursively, passing node.right in
      data.push(node.value);                // Push the value in the argument node into our return value array    
    }

    traverse(this.root); // Call the traverse function, passing in the root node of the BST
    return data;         // Return the data in our array
  }

  inOrder_DFS(){
    let data    = [];     // The array that will hold our return data

    function traverse(node){    // Create a helper function to traverse
      if(node.left)  traverse(node.left);   // Check if there is a left node, if so,  call the traverse function recursively, passing node.left in
      data.push(node.value);                // Push the value in the argument node into our return value array    
      if(node.right) traverse(node.right);  // Check if there is a right node, if so,  call the traverse function recursively, passing node.right in
    }

    traverse(this.root); // Call the traverse function, passing in the root node of the BST
    return data;         // Return the data in our array
  }
}

class BST extends BinaryTree{
  constructor(){
    super()
  }

  add(val){
    function traverseAndAdd(node, addVal){    // Create a helper function to traverse
      if(node.left && node.left.value < addVal)  traverseAndAdd(node.left, addVal);   // Check if there is a left node, if so,  call the traverse function recursively, passing node.left in
      node.value = addVal;                // Push the value in the argument node into our return value array    
      if(node.right && node.left.value < addVal) traverseAndAdd(node.right, addVal);  // Check if there is a right node, if so,  call the traverse function recursively, passing node.right in
    }
    traverseAndAdd(this.root, val); // Call the traverse function, passing in the root node of the BST
    return 1;
  }

  contains(val){
    let contains = false;
    function traverseAndCheck(node, checkVal){    // Create a helper function to traverse and check for equivalence.
      console.log(`value: ${node.value} check: ${checkVal} `)
      if(node.left)  traverseAndCheck(node.left, checkVal);   // Check if there is a left node, if so,  call the traverse function recursively, passing node.left in
      if(node.value === checkVal) contains = true;               // Checks to see if the value held in the node is equal to the check value
      if(node.right) traverseAndCheck(node.right, checkVal);  // Check if there is a right node, if so,  call the traverse function recursively, passing node.right in
    }
    traverseAndCheck(this.root, val); // Call the traverse function, passing in the root node of the BST
    return contains
  }
}

const tree = new BST();
let node1 = new Node(13);
let node2 = new Node(15);
let node3 = new Node(24);
let node4 = new Node(34);
let node5 = new Node(6);
let node6 = new Node(11);

tree.root = node1;
tree.root.left = node2;
tree.root.right = node3;
tree.root.left.left = node4;
tree.root.left.right = node5;
tree.root.right.left = node6;

console.log('pre', tree.preOrder_DFS());
console.log('##################');
console.log('in', tree.inOrder_DFS());
console.log('##################');
console.log('post', tree.postOrder_DFS());
console.log('##################');
console.log(tree.contains(13));
console.log('##################');
console.log(tree.add(14));
console.log('##################');
console.log('in', tree.inOrder_DFS());