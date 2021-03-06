/* 
  Zip Arrays into Map
  
  
  Given two arrays, create an associative array (aka hash map, an obj / dictionary) 
  containing keys from the first array, and values from the second.
  Associative arrays are sometimes called maps because a key (string) maps to a value 
 */

const keys1 = ["abc", 3, "yo"];
const vals1 = [42, "wassup", true];
const expected1 = {
  abc: 42,
  3: "wassup",
  yo: true,
};

/*****************************************************************************/

/**
 * - Time: O(n) linear, because 1 loop to access elements from both arrays.
 * - Space: O(n).
 */
function zipArraysIntoMap(keys, values) {
  const hashMap = {};

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const val = values[i];

    hashMap[key] = val;
  }
  return hashMap;
}

module.exports = { zipArraysIntoMap };