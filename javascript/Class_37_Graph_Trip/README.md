# Graphs - Breadth First Traversal - Business Trip

<!-- Short summary or background information -->


## Challenge
<!-- Description of the challenge -->
Given a business trip itinerary, and an Alaska Airlines route map, is the trip possible with direct flights? If so, how much will the total trip cost be?

- **Write a function called business trip**
  - **Arguments**: graph, array of city names
  - **Return**: cost or null


## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

We first check to make sure the cities in the trip array exist in our graph.
Then we set up tracker varables cost, and visited. We loop through each city in tripArray, marking each city as visited as we come across it. If the list of cities to visit includes that city AND that city hasn't previously been visited, we will mark that neighboring city as visited, and add the cost associated with flying there to our cost variable. 

### Time and Space 
  - Time: O(V + E) where V is the number of vertices and E is the number of edges
  - Space: O(n) Because the space requirements grow linearly as the size of the graph grows

