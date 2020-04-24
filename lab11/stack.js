'use strict';

const Node = require('./node.js');

class Stack {
  constructor() {
    this.top = null;
  }

  push(val) {
    // add a node to the top of the stack
    let nodeToPush = new Node(val);

    // is the stack empty?
    if (this.isEmpty()) {
      this.top = nodeToPush;
      return;
    }
    //if the stack is not empty
    //current top becomes the second node from top
    nodeToPush.next = this.top;
    //the new node become the top
    this.top = nodeToPush;
  }

  pop() {
    //LIFO, remove the top node
    let nodeToPop = this.top;

    // is the stack empty?
    if (this.isEmpty()) {
      throw 'NullReferenceException';
    }
    //if the stack is not empty
    // the second node now will become the top
    // the nodeToPop is popped, shouldn't have a .next pointer anymore, so set it to null.
    this.top = this.top.next;
    nodeToPop.next = null;

    return nodeToPop;
  }

  // get the value of the top node
  peek() {
    if (this.top) return this.top.val;

    // when the top is NULL and you try to peek, throw an error
    throw 'NullReferenceException';
  }

  isEmpty() {
    return !this.top;
  }
}

module.exports = Stack;


