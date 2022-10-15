const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    const nodes = [];

    let currentNode = this.head;

    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  enqueue(value) {
    const newNode = new QueueNode(value);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }
    this.tail.next = newNode;

    return this;
  }

  dequeue(value) {
    if(!this.head){
      return null;
    }

    let deletedNode = null;

    while(this.head && this.value === value){
      deletedNode = this.head;

      this.head = this.head.next;
    }

    let currentNode = this.head;

    if(currentNode !== null){
      while(currentNode.next){
        if(currentNode.next.value === value){
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        }else{
          currentNode = currentNode.next
        }
      }
    }

    if(this.tail?.value === value){
      this.tail = currentNode;
    }

    return deletedNode;
  }
}

module.exports = {
  Queue,
};
