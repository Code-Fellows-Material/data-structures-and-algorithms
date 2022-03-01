

class Graph{

  constructor(){
    this.adjacencyList = {};
  }

  addVertex(value){
    if(this.adjacencyList[value]) return
    this.adjacencyList[value] = []

    return this.adjacencyList[value]
  }

  addEdge(vertex1, vertex2 , weight = 0){
      if(this.adjacencyList[vertex1]) this.adjacencyList[vertex1].push(vertex2);
      if(this.adjacencyList[vertex2]) this.adjacencyList[vertex2].push(vertex1);
  }

  getNodes(){
    return Object.keys(this.adjacencyList).map( key => [ key, this.adjacencyList[key]])
  }

  getNeighbors(vertex){
    return this.adjacencyList[vertex];
  }

  size(){
    return Object.keys(this.adjacencyList).length
  }

  BF_Traversal(start){
    if(! this.adjacencyList[start]) return null
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;
    
    while(queue.length){
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach( neighbor => {
        if(!visited[neighbor]){
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      })
    }
    return result;
  }
}

module.exports = Graph;