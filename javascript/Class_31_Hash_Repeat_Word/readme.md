# Hashtables

<!-- Short summary or background information -->
Hashtables are a data structure that utilize key value pairs. The basic idea of a hashtable is that we are able to store a key into this data structure, and quickly retrieve the value. This is done through hashing. Hashing is the ability to encode the key that will eventually map to a specific location in the data structure that we can look at directly to retrieve the value.

## Challenge
<!-- Description of the challenge -->
The challenge for this code challenge was to implement and Hashtable and thoroughly test it's functionality.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

The time and space complexity for reading and writing in a Hashtable is 0(1)

## API
<!-- Description of each method publicly available in each of your hashtable -->

  - The Hashtable constructor takes one argument, a number which defines the size of the hashtable. If no argument is give, the constructor defaults to 53.

  - `.addAndCheck(key)` Takes in a key, Hash the key. Check if the key exists, if so, return the key. If not add the key to the table, then return false.

  - `.removePunctuation(str)` takes in a string, removes puntuation, returns the string. 

  - `_hash(key)` takes in a key, returns it's index in the hashmap.

  - ` repeatCheck(str)` Takes in a string, returns the first repeated word, of false if no repeats.
