# Graphs - Depth First Traversal

<!-- Short summary or background information -->


## Challenge
<!-- Description of the challenge -->
Conduct a depth first pre-order traversal on a graph

- **Name**: Depth first
**Arguments**: Node (Starting point of search)
**Return**: A collection of nodes in their pre-order depth-first traversal order



## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

- DFS: Prioritizing visiting **children** of a given node prior to visiting siblings.
- There is no root, so what does that mean?
  - For a given node, we follow one neighbor of that node, we then proceed to follow a neighbor of that node, and so on, **PRIOR** to visiting the other neighbors of that node.
  - We have to remember where we have been in a DFS

```js

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

```

### Time and Space 
  - Time: O(V + E) where V is the number of vertices and E is the number of edges
  - Space: O(n) Because the space requirements grow linearly as the size of the graph grows

