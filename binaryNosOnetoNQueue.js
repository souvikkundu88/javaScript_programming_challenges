/*

Problem Statement
Implement a function findBin(n), which will generate binary numbers from 
1 to n in the form of a string using a queue. An illustration is also provided for your understanding.

Input
A positive integer n

Output
Returns binary numbers in the form of strings from 1 up to n

*/

"use strict";

function findBin(n) {
    let result = [];
    let myQueue = new Queue();
    var s1, s2;
    myQueue.enqueue("1");
    for (var i = 0; i < n; i++) {

        result.push(myQueue.dequeue());
        s1 = result[i] + "0";
        s2 = result[i] + "1";

        myQueue.enqueue(s1);
        myQueue.enqueue(s2);

    }

    return result;
}

console.log(findBin(10))

/*
module.exports = class Queue {
  
  constructor() {
    this.items = new DoublyLinkedList();
  }

  isEmpty() {   
    return this.items.length == 0;
  }

  getFront() {
    if (!(this.isEmpty())) {
     return this.items.getHead(); 
  } else
     return null;
  }

  size() {
    return this.items.length;
  }
  
  enqueue(element) {
    return this.items.insertTail(element);
  }

  dequeue() {
    return this.items.removeHead();
  }

}
*/