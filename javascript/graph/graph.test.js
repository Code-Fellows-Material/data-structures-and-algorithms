'use strict';
const { expect } = require("@jest/globals");
const Graph = require('./graph.js');

describe('Tests Graph class', () => {


  it('should instantiate', () => {
    let testGraph = new Graph();
    expect(testGraph).toBeTruthy();
  });

  it("size should be initially empty", () => {
    const graph = new Graph();
    expect(graph.size()).toEqual(0);
  });

  it("should add a node/vertex to graph", () => {
    const graph = new Graph();
    const vertex = graph.addVertex("apple");
    expect(vertex).toEqual([]);
  });
  
  it("should have size of 1 after adding 1", () => {
    const graph = new Graph();
    graph.addVertex("apple");
    expect(graph.size()).toEqual(1);
  });

  it("should have size of 2 after adding 2", () => {
    const graph = new Graph();
    graph.addVertex("apple");
    graph.addVertex("banana");
    expect(graph.size()).toEqual(2);
  });

  it("should return collection of nodes/vertices", () => {
    const graph = new Graph();
    graph.addVertex("apple");
    graph.addVertex("banana");
    const collection = graph.getNodes();
    expect(collection).toEqual([['apple', [] ], ['banana', [] ]]); // Gotcha: Relies on ordering
  });
  
  it('An edge can be successfully added to the graph', () => {
    const graph = new Graph();
    graph.addVertex("apple");
    graph.addVertex("banana");
    graph.addEdge('apple', 'banana');
    const collection = graph.getNodes()
    expect(collection).toEqual([["apple", [{"neighbor": "banana", "weight": 0}]], ["banana", [{"neighbor": "apple", "weight": 0}]]]);
  });


  it('All appropriate neighbors can be retrieved from the graph', () => {
    const graph = new Graph();
    graph.addVertex("apple");
    graph.addVertex("banana");
    graph.addEdge('apple', 'banana');
    const neighbors = graph.getNeighbors('apple')
    expect(neighbors).toEqual([{"neighbor": "banana", "weight": 0}]);
  });
});