## Lab 11 Stack and Queue

## Challenge
Stack
Define a method called push which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
Define a method called pop that does not take any argument, removes the node from the top of the stack, and returns the node’s value. Should raise exception when called on empty stack.
Define a method called peek that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack. Should raise exception when called on empty stack
Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the stack is empty.

Queue
Define a method called enqueue which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
Define a method called dequeue that does not take any argument, removes the node from the front of the queue, and returns the node’s value. Should raise exception when called on empty queue
Define a method called peek that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue. Should raise exception when called on empty queue
Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the queue is empty.

## Approach & Efficiency
For push and enqueue, set up a new node, add it by setting it to be the new top or new front
For pop and dequeue, set the second node from top/front to become the top/front
For peek, just return the value of the top/front node
for isEmpty, throw an error if there is no top node or front/rear node

Big O:
Stack
push(): O(1) pop(): O(1) peek(): O(1) isEmpty(): O(1) 

Queue
enqueue(): O(1) dequeue(): O(1) peek(): O(1) isEmpty(): O(1) 

## Solution 
![lab11 whiteborad](https://user-images.githubusercontent.com/54918779/79817681-e3b73d00-833a-11ea-801d-1fec55c06a6c.png)

