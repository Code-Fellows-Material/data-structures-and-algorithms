'use strict';
const { expect } = require("@jest/globals");
const Graph = require('./BF_Graph.js');

let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")

describe('Tests BF Traversal', () => {

  it('should instantiate', () => {
    expect(g).toBeTruthy();
  });

  it('should visit all nodes when starting with "A"', () => {
    expect(g.BF_Traversal('A')).toEqual(["A", "B", "C", "D", "E", "F"]);
  });

  it('should visit all nodes when starting with "E"', () => {
    expect(g.BF_Traversal('E')).toEqual(["E", "C", "D", "F", "A", "B"]);
  });

  it('should visit all nodes when starting with "C"', () => {
    expect(g.BF_Traversal('E')).toEqual(["E", "C", "D", "F", "A", "B"]);
  });

  it('should return null when passed in a value not in the graph"', () => {
    expect(g.BF_Traversal('Z')).toEqual(null);
  });

});