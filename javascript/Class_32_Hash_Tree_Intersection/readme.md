# Hashtables

<!-- Short summary or background information -->


## Challenge
<!-- Description of the challenge -->
Write a function called tree_intersection that takes two binary trees as parameters.
Using a Hashmap implementation as a part of your algorithm, return a set of values found in both trees.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

My approach to solving this problem was to first create a hashtable to keep track of the values in the first table, and a results array to hold a list of values from the second tree that matched values from the first tree. I utilized two helper functions, the first one a depth first traversal of the first tree which added all values in the tree the hashtable. The second helper function a depth first traversal of the second tree which checks each value in the tree against the values in the hashmap.

After each helper function is ran, the results array is returned holding any values from the second tree that matched the first. 
