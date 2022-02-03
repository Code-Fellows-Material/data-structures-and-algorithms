'use strict'
const BST = require('../index')

class Node {
  constructor(value) {
    (this.value = value), (this.left = null), (this.right = null);
  }
}

const testTree = new BST();
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

console.log(testTree.BFS());

describe('Tests for Tree', () => {

  it('Can successfully instantiate an empty tree', () => {
    const tree = new BST();
    expect(tree).toBeDefined();
  })

  it('Can successfully instantiate a tree with a single root node', () => {
    const tree = new BST();
    let node1 = new Node(13);
    tree.root = node1;
    expect(tree.root.value).toBe(13);
  })
  
  it('For a Binary Search Tree, can successfully add a left child and right child properly to a node', () => {
    const tree = new BST();
    let node1 = new Node(13);
    tree.root = node1;
    let node2 = new Node(15);
    let node3 = new Node(24);
    tree.root.left = node2;
    tree.root.right = node3;
    expect(tree.root.left.value).toBe(15);
    expect(tree.root.right.value).toBe(24);
  })

  it('Can successfully return a collection from a preorder traversal', () => {
    expect(testTree.preOrder_DFS()).toStrictEqual([ 13, 15, 34, 6, 24, 11 ]);
  })

  it('Can successfully return a collection from an inorder traversal', () => {
    expect(testTree.inOrder_DFS()).toStrictEqual([ 34, 15, 6, 13, 11, 24 ]);
  })

  it('Can successfully return a collection from a postorder traversal', () => {
    expect(testTree.postOrder_DFS()).toStrictEqual([ 34, 6, 15, 11, 24, 13 ]);
  })
  it('Returns correct answer for contains', () => {
    expect(testTree.contains(13)).toBe(true);
  })
  it('Finds Max', () => {
    expect(testTree.findMax()).toBe(34);
  })
  it('Breadth First Search', () => {
    expect(testTree.BFS()).toStrictEqual([ 13, 15, 24, 34, 6, 11 ]);
  })
})
