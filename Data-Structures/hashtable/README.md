# Hashtables
<!-- Short summary or background information -->
Hashtables are a data structure that utilize key value pairs. This means every Node or Bucket has both a key, and a value. A hashtable traditionally is created from an array.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
Time: O(1)
Space: O(n)

## API
<!-- Description of each method publicly available in each of your hashtable -->
Hashtable methods:

- add: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
- get: takes in the key and returns the value from the table.
- contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
- hash: takes in an arbitrary key and returns an index in the collection.
