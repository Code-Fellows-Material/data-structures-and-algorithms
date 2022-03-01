# Hashtables - Join Table

<!-- Short summary or background information -->


## Challenge
<!-- Description of the challenge -->
Write a function that LEFT JOINs two hashmaps into a single data structure.

Using a Hashmap implementation as a part of your algorithm, return a set of values found in both trees.

Write a function called left join
**Arguments**: two hash maps
The **first parameter** is a hashmap that has word strings as keys, and a synonym of the key as values.
The **second parameter** is a hashmap that has word strings as keys, and antonyms of the key as values.
**Return**: The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic


## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

We start by creating a function that operates as a "left_join" style combination of two hashtables, called left_join. We first create a new table which will house our combined tables. We then iterate through the first table add each item to the join table, we then iterate through the second table adding each item in the second table to the join array if there is an existing value in the join table, we then return the new join table.

### Time and Space 
  - Time: O(n) 
  - Space: O(n)

