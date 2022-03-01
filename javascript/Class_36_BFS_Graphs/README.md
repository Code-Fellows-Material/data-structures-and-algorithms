# Graphs - Breadth First Traversal

<!-- Short summary or background information -->


## Challenge
<!-- Description of the challenge -->
Write a Breadth First Traversal method for a Graph class

- breadth first
  - Arguments: Node
  - Return: A collection of nodes in the order they were visited.
  - Display the collection


## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

I utilized a queue to track nodes to visit, a visited object to track nodes that had been visited, and a results array to track the order the nodes were visited. I used an iterative method of traversal, utilizing a while loop to track the length of the queue, and break out when the length of the queue reached 0.

### Time and Space 
  - Time: O(V + E) where V is the number of vertices and E is the number of edges
  - Space: O(n) Because the space requirements grow linearly as the size of the graph grows

