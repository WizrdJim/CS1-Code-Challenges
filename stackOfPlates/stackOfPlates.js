/* Stack of Plates: Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
 * Therefore, in real life, we would likely start a new stack when the previous stack exceeds some threshold.
 * Implement a data structure SetOfStacks that mimics this.
 * SetOfStacks should be composed of several stacks and should create a new stack once the previous one exceeds capacity.
 * SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack
 * (that is, pop( ) should return the same values as it would if there were just a single stack).
 */

class StackOfPlates {
  constructor(n) {
    this.stack = [];
    this.limit = n;
    this.size = 0;
  }
  pusH = (n) => {
    if (!this.stack[0]){
      this.stack.push([n]);
    }
    if (this.stack[size].length = this.limit) {
      this.stack.push([])
    }
  }
}