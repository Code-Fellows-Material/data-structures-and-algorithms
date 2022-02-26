const treeIntersection = require('./tree-intersection');

class Node {
  constructor(value) {
    (this.value = value), (this.left = null), (this.right = null);
  }
}

class BinaryTree {
  constructor() {
    this.root;
  }
}

const testTree = new BinaryTree();

let node1 = new Node(13);
let node2 = new Node(15);
let node3 = new Node(24);
let node4 = new Node(34);
let node5 = new Node(6);
let node6 = new Node(11);

testTree.root = node1;
testTree.root.left = node2;
testTree.root.right = node3;
testTree.root.left.left = node4;
testTree.root.left.right = node5;
testTree.root.right.left = node6;


const testTree2 = new BinaryTree();
let node1a = new Node(1);
let node2a = new Node(5);
let node3a = new Node(6);
let node4a = new Node(34);
let node5a = new Node(7);
let node6a = new Node(11);

testTree2.root = node1a;
testTree2.root.left = node2a;
testTree2.root.right = node3a;
testTree2.root.left.left = node4a;
testTree2.root.left.right = node5a;
testTree2.root.right.left = node6a;

const testTree3 = new BinaryTree();
let node1b = new Node(1);
let node2b = new Node(5);
let node3b = new Node(60);
let node4b = new Node(10);
let node5b = new Node(70);
let node6b = new Node(101);

testTree3.root = node1b;
testTree3.root.left = node2b;
testTree3.root.right = node3b;
testTree3.root.left.left = node4b;
testTree3.root.left.right = node5b;
testTree3.root.right.left = node6b;


describe('Tests for tree intersecting', () => {
  
  it('should return all matches with same tree', () => {
    expect(treeIntersection(testTree, testTree)).toEqual([ 13, 15, 34, 6, 24, 11 ])
  });

  it('should return all matches with different tree', () => {
    expect(treeIntersection(testTree, testTree2)).toEqual([ 34, 6, 11 ])
  });

  it('should return an empty tree if no matches are found', () => {
    expect(treeIntersection(testTree, testTree3)).toEqual([ ])
  });
});