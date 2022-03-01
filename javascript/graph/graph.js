

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
        if(this.adjacencyList[vertex1]) this.adjacencyList[vertex1].push({ neighbor: vertex2, weight });
        if(this.adjacencyList[vertex2]) this.adjacencyList[vertex2].push({ neighbor: vertex1, weight });
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
}

module.exports = Graph;