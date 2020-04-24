'use strict';

const Node = require('./node.js');

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(val) {
    // adding to the end of the queue

    let nodeToQueue = new Node(val);

    if (this.isEmpty()) {
      //you're the only node, so you're the front and rear
      this.front = nodeToQueue;
      this.rear = nodeToQueue;
      return;
    }

    //the new node we're adding becomes the next node of the current rear
    this.rear.next = nodeToQueue;
    //now also change the rear arrow to point to the right node which is the newest/last node that has been added.
    this.rear = nodeToQueue;
  }

  dequeue() {
    let nodeToDequeue = this.front;

    if (this.isEmpty()) {
      throw 'NullReferenceException';
    }

    if (!this.isEmpty()) {
      // 2 becomes front (after 1 is dequeued)
      this.front = this.front.next;
      // it's already been dequeued, so no longer has a .next value, so set it to null.
      nodeToDequeue.next = null;
    }

    //check if front is null (or past the end of the queue), if so, set the tail to null
    if (!this.front) {
      this.rear = null;
    }
    return nodeToDequeue;
  }

  peek() {
    // look at the front of the queue

    // if the queue is empty
    if (this.isEmpty()) {
      throw 'NullReferenceException';
    }
    return this.front.val;
  }

  isEmpty() {
    // if the queue is empty, front and rear are null

    return !this.front && !this.rear;
  }
}

module.exports = Queue;
