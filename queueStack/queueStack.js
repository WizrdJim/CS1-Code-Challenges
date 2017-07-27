/**
 * Write a stack class. Once you're done,
 * implement a queue using two stacks.
 */

class Stack {
  constructor() {
    this.arr = [];
    this.size = 0;
  }
  size() {
    return this.size;
  }
  add(num) {
    ++this.size;
    this.arr.push(num);
  }
  remove() {
    if (this.size > 0) --this.size;
    return this.arr.pop();
  }
}

class Queue {
  constructor() {
    this.main = new Stack;
    this.secondary = new Stack;
  }
  size() {
    return this.main.size;
  }
  add(num) {
    ++this.main.size;
    this.main.arr.push(num);
  }
  remove(num) {
    for (let i = 1; i < this.main.size; i++) {
      this.secondary.add(this.main.arr[i]);
    }
  this.main.arr = this.secondary.arr;
  this.secondary.arr = [];
  }
}