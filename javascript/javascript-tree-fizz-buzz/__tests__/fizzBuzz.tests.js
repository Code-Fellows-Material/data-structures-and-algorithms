'use strict'


var treeify = require('treeify'); 

const KaryTree = require('../index').KaryTree;
const fizzBuzz = require('../index').fizzBuzz;

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

let n1 = new Node(10);
let n2 = new Node(3);
let n3 = new Node(5);
let n4 = new Node(8);
let n5 = new Node(15);
let n6 = new Node(7);
let n7 = new Node(25);
let n8 = new Node(14);
let n9 = new Node(9);
let n10 = new Node(18);
let n11 = new Node(30);
let n12 = new Node(1);

n1.children = [n2, n3];
n2.children = [n4, n5, n6];
n3.children = [n8, n9];
n5.children = [n7];
n8.children = [n10, n11, n12];

const tree = new KaryTree(n1);


describe('Tests for Tree', () => {

  it('Fizz Buzz\'s', () => {
    const fizzTree = fizzBuzz(tree);
    
    expect(fizzTree.root.value).toBe('buzz');
    expect(fizzTree.root.children[0].value).toBe('fizz');
    expect(fizzTree.root.children[0].children[1].value).toBe('fizzbuzz');
  })
})
