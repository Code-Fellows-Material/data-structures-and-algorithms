const Hashtable = require('./hashtable');

/*
Write a function that LEFT JOINs two hashmaps into a single data structure.

Write a function called left join
Arguments: two hash maps
The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
Return: The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic

notes: 
Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.
LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row.
If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row.

*/

// Function that operates as a "left_join" style combination of two hashtables.
function left_joins(table1, table2){
  //first create a new table which will house our combined tables.
  let joinTable = new Hashtable();
  console.log(">>>>>>>", table2)
  //iterate through the first table add each item to the join table
  for(let i = 0;  i < table1.keyMap.length; i++){
    if(table1.keyMap[i]){
      joinTable.set(table1.keyMap[i][0], table1.keyMap[i][1][0])
    }
  }
  //iterate through the second table adding each item in the second table to the join array if there is 
  // an existing value in the join table
  for(let i = 0;  i < table2.keyMap.length; i++){
    if(table1.keyMap[i] && table2.keyMap[i]){
      joinTable.set(table2.keyMap[i][0], table2.keyMap[i][1][0])
    }
  }
  
  
  return joinTable
}

module.exports = left_joins;