function hasTargetSum(array, target) {
  // Write your algorithm here
  let numSet = new Set();

  // Iterate through the array
  for (let i = 0; i < array.length; i++) {
    // Calculate the difference between the target and the current number
    let diff = target - array[i];

    // Check if the difference exists in the set
    if (numSet.has(diff)) {
      // If the difference exists, a pair is found
      return true;
    }

    // Add the current number to the set
    numSet.add(array[i]);
  }

  // No pair was found
  return false;
}

/* 
  Write the Big O time complexity of your function here

Creating the empty Set takes constant time, which is O(1).

Iterating through the array using the for loop requires visiting each element once. Since we iterate through all n elements, the loop has a linear time complexity of O(n).

Within the loop, checking if an element exists in the Set using the has method and adding an element to the Set using the add method both have a constant time complexity of O(1).

Therefore, the overall time complexity is O(n), as the dominant factor affecting the execution time is the loop that iterates through the array.

*/

/* 
  Add your pseudocode here
  // Create an empty set to store the numbers we have seen so far
  // Iterate through the array
  // Calculate the difference between the target and the current number
  / Check if the difference exists in the set
  // If the difference exists, a pair is found
  // Add the current number to the set
  // Return false if no pair was found
*/

/*
  Add written explanation of your solution here

The hasTargetSum function takes two parameters: arr, which is an array of integers, and target, which is the target integer that we want to find a pair for.

Inside the function, we create an empty Set called numSet. A Set is a built-in JavaScript object that allows storing unique values, ensuring that no duplicates exist.

We iterate through the arr array using a for loop. The loop variable i represents the current index.

For each element in the array, we calculate the difference between the target and the current number by subtracting arr[i] from target. This difference is stored in the diff variable.

We check if the numSet Set contains the diff value using the has method of the Set object. If the difference exists in the set, it means we have found a pair that adds up to the target number. In this case, we return true from the function.

If the difference doesn't exist in the set, we add the current number arr[i] to the numSet Set using the add method.

After iterating through all the elements in the array without finding a matching pair, we return false from the function, indicating that no pair was found.

The idea behind this approach is to store the numbers we have seen so far in a Set. As we iterate through the array, we check if the difference between the target and the current number exists in the Set. If it does, we know that a pair exists, and we return true. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
