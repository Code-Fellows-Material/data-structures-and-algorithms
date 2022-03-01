"use strict";
const { expect } = require("@jest/globals");
const Graph = require("./Trip_Graph.js");

let g = new Graph();

let cityArray = [
  "Metroville",
  "Arendelle",
  "New Monstropolis",
  "Naboo",
  "Pandora",
  "Narnia",
];

cityArray.forEach((city) => g.addVertex(city));

g.addEdge("Metroville", "Pandora", 82);
g.addEdge("Metroville", "Arendelle", 99);
g.addEdge("Metroville", "New Monstropolis", 105);
g.addEdge("Metroville", "Naboo", 26);
g.addEdge("Metroville", "Narnia", 37);

g.addEdge("Arendelle", "Pandora", 150);
g.addEdge("Arendelle", "New Monstropolis", 42);

g.addEdge("New Monstropolis", "Naboo", 73);

g.addEdge("Naboo", "Narnia", 250);

describe("Tests BF Traversal", () => {
  it("should instantiate", () => {
    expect(g).toBeTruthy();
  });

  it('should visit all nodes when starting with "A"', () => {
    expect(g.BF_Traversal("Naboo")).toEqual([
      "Naboo",
      "Metroville",
      "New Monstropolis",
      "Narnia",
      "Pandora",
      "Arendelle",
    ]);
  });

  it('should return true and trip cost "Naboo", "Narnia"', () => {
    expect(g.businessTrip(["Naboo", "Narnia"])).toEqual([true, 250]);
  });
  it('should return true and trip cost "Naboo", "Narnia", "New Monstropolis"', () => {
    expect(g.businessTrip(["Naboo", "Narnia", "New Monstropolis"])).toEqual([true, 323]);
  });
  it('should return true and trip cost "Naboo", "Narnia", "New Monstropolis", "Arendelle"', () => {
    expect(g.businessTrip(["Naboo", "Narnia", "New Monstropolis", "Arendelle"])).toEqual([true, 365]);
  });

  it('should return true and trip cost "Pandora", "Metroville", "Narnia"', () => {
    expect(g.businessTrip(["Pandora", "Metroville", "Narnia"])).toEqual([true, 119]);
  });

  it('should return false and trip cost "Naboo", "Pandora"', () => {
    expect(g.businessTrip(["Naboo", "Pandora"])).toEqual([false, 0]);
  });

  it('should return null when passed in a value not in the graph"', () => {
    expect(g.BF_Traversal("Z")).toEqual(null);
  });
});
