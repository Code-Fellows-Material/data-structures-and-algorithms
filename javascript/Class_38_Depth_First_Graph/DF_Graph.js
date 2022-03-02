class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(value) {
    if (this.adjacencyList[value]) return;
    this.adjacencyList[value] = [];

    return this.adjacencyList[value];
  }

  addEdge(vertex1, vertex2, weight = 0) {
    if (this.adjacencyList[vertex1])
      this.adjacencyList[vertex1].push([vertex2, weight]);
    if (this.adjacencyList[vertex2])
      this.adjacencyList[vertex2].push([vertex1, weight]);
  }

  getNodes() {
    return Object.keys(this.adjacencyList).map((key) => [
      key,
      this.adjacencyList[key],
    ]);
  }

  getNeighbors(vertex) {
    return this.adjacencyList[vertex];
  }

  size() {
    return Object.keys(this.adjacencyList).length;
  }

  DF_Traversal(start){
    // Check to make sure our start vertex is in our graph
    if (!this.adjacencyList[start]) return null;
    
    // Attach this.adjacency list to a variable so our 
    // recursive function can access it.
    const adjacencyList = this.adjacencyList;

    // Set up variables to track our results and the nodes we have visited
    let resultsList = [];
    let visited = {};

    // Set up our helper function to get called recursively 
    // Each time visiting a new node and adding it to our visited list
    // and adding it's value to our resultsList array.
    function DFS(vertex){
      if(!vertex) return null;
      visited[vertex] = true;
      resultsList.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if(!visited[neighbor[0]]){
          return DFS(neighbor[0])
        }
      })
    }
    // Call our recursive function passing in our starting vertex
    DFS(start);

    // Return our results list
    return resultsList;
  }

  BF_Traversal(start) {
    if (!this.adjacencyList[start]) return null;
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      // console.log(currentVertex, '||', this.adjacencyList[currentVertex])
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor[0]]) {
          visited[neighbor[0]] = true;
          queue.push(neighbor[0]);
        }
      });
    }
    // console.log("results", result)
    return result;
  }

  businessTrip(tripArr) {
    //check to make sure the cities exist first
    tripArr.forEach((trip) => {
      if (!this.adjacencyList[trip]) return null;
    });

    //Set up variables to track cost and places visited
    let cost = 0;
    const visited = {};

    //loop through each city in tripArr
    tripArr.forEach((trip) => {
      //mark that city as visited
      visited[trip] = true;
      //loop through each neighbor of that city
      this.adjacencyList[trip].forEach((neighbor) => {
        //if the list of cities to visit includes that city
        // AND that city hasn't previously been visited
        if (tripArr.includes(neighbor[0]) && !visited[neighbor[0]]) {
          //mark that city as visited
          visited[neighbor[0]] = true;
          //add the cost to visit that city to the total cost
          cost += neighbor[1];
        }
      });
    });
    // return whether it is possibly to make the trip, and the cost
    return [cost > 0, cost];
  }
}

module.exports = Graph;
