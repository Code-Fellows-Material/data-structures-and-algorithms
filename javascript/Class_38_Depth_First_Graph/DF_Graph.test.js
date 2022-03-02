"use strict";
const { expect } = require("@jest/globals");
const Graph = require("./DF_Graph.js");

let g = new Graph();

let letterArr = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'
];

letterArr.forEach((letter) => g.addVertex(letter));

g.addEdge("A", "B");
g.addEdge("A", "D");
g.addEdge("A", "B");

g.addEdge("B", "C");
g.addEdge("B", "D");

g.addEdge("C", "G");

g.addEdge("D", "E");
g.addEdge("D", "H");
g.addEdge("D", "F");

g.addEdge("F", "H");




describe("Tests DF Traversal", () => {
  it("should instantiate", () => {
    expect(g).toBeTruthy();
  });

  it('should visit all nodes when starting with "A"', () => {
    expect(g.DF_Traversal("A")).toEqual([
      'A', 'B', 'C', 'G', 'D', 'E', 'H', 'F'
    ]);
  });
  it('should visit all nodes when starting with "G"', () => {
    expect(g.DF_Traversal("G")).toEqual([
      'G', 'C', 'B', 'A', 'D', 'E', 'H', 'F'
    ]);
  });

  it('should visit all nodes when starting with "D"', () => {
    expect(g.DF_Traversal("D")).toEqual([
      'D', 'A', 'B', 'C', 'G', 'E', 'H', 'F'
    ]);
  });

});
