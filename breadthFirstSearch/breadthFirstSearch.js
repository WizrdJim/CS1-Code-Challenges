/*
 * Write a function that accepts a tree data structure and a value to search for.
 * Search for the value using a breadth-first search algorithm.
 * You can read about it here: https://en.wikipedia.org/wiki/Breadth-first_search
 * Example:
 * const tree = {
 *	x: 1,
 *	y: 1,
 *	z: {
 *		x: 1,
 *		y: 1,
 *		z: 1,
 *		},
 *	a: 2,
 * };
 * breadthFirstSearch(tree, 2);// will return true before it recursively searches `z`
 */

const breadthFirstSearch = (tree, searchTerm) => {
  //research Object. properties!!!
  //define queue as the child values in the tree
  let queue = Object.values(tree);
  //check if values are in the queue
  while (queue.length > 0) {
    // makes value the first thing in the queue
    const value = queue.shift();
    // Win condition
    if (value === searchTerm) return true;
    // Checks to make sure that null was not received and that its not getting an array
    if(typeof value === 'object' && value !== null && !Array.isArray(value)){
      // Inputs the children of the value into the queue
      queue = queue.concat(Object.values(value));
    }
    // Never find then Lose
    return false;
  }
}