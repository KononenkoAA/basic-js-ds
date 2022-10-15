const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class BinarySearchTree {
  constructor() {
    this.newRoot = null;
  }
  root() {
    return this.newRoot;
  }
  add(data) {
    this.newRoot = add(this.newRoot, data);

    function add(node, vadatalue) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = add(node.left, data);
      } else {
        node.right = add(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return search(this.newRoot, data);

    function search(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data
        ? search(node.left, data)
        : search(node.right, data);
    }
  }

  remove(data) {
    this.newRoot = remove(this.newRoot, data);

    function remove(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = remove(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = remove(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = remove(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.newRoot) {
      return;
    }

    let node = this.newRoot;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.newRoot) {
      return;
    }

    let node = this.newRoot;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }

  find(data) {
    this.newRoot = findNode(this.newRoot, data);

    function findNode(node, data) {
      if (node === null) {
        return null;
      } else if (data < node.data) {
        return this.findNode(node.left, data);
      } else if (data > node.data) {
        return this.findNode(node.right, data);
      } else {
        return data;
      }
    }
  }
}

module.exports = {
  BinarySearchTree,
};
