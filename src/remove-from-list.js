const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let array = [];
  while (l.next != null) {
    array = array.concat(l.value);
    l = l.next;
  }
  array = array.concat(l.value);
  try {
    array = array.filter((e) => e != k);
  } catch {
    return [];
  }
  let result = new ListNode(array[0]);
  let current = result;
  for (let i = 1; i < array.length; i++) {
    current.next = new ListNode(array[i]);
    current = current.next;
  }
  return result;
}

module.exports = {
  removeKFromList,
};
