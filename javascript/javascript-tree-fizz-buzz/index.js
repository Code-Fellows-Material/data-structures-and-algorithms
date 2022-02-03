"use strict";
var treeify = require('treeify');

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class KaryTree {
  constructor(node) {
    this.root = node;
  }

  sumLeaves = () => {
    let node = this.root;
    let sumTracker = 0;
  
    function traverseNodes(node){
      for(let i = 0; i < node.children.length; i++){
        traverseNodes(node.children[i])
      }
      if(! node.children.length) sumTracker+= node.value; 
    }
    traverseNodes(node);
    return sumTracker;
  }

  sumLeaves = () => {
    let node = this.root;
    let sumTracker = 0;
  
    function traverseNodes(node){
      for(let i = 0; i < node.children.length; i++){
        traverseNodes(node.children[i])
      }
      sumTracker+= node.value; 
    }
    traverseNodes(node);
    return sumTracker;
  }

  fizzBuzz = () => {
    let node = this.root;
    function traverseNodes(node){
      for(let i = 0; i < node.children.length; i++){
        traverseNodes(node.children[i])
      }
      let tempVar = '';
      if(node.value % 3 === 0) tempVar = "fizz";
      if(node.value % 5 === 0) tempVar += "buzz";
      if(tempVar) node.value = tempVar;
    }
    traverseNodes(node);
  }
}


const fizzBuzz = (firstTree) => {
  let node = firstTree.root;
  let newTree = new KaryTree(node);
  let newNode = newTree.root;

  function traverseNodes(node, newNode){
    for(let i = 0; i < node.children.length; i++){
      traverseNodes(node.children[i], newNode.children[i])
    }
    let tempVar = '';
    if(node.value % 3 === 0) tempVar = "fizz";
    if(node.value % 5 === 0) tempVar += "buzz";
    tempVar ? newNode.value = tempVar : newNode.value = node.value;
  }
  traverseNodes(node, newNode);
  return newTree
}



module.exports = {
  KaryTree: KaryTree,
  fizzBuzz: fizzBuzz
};