/**
 * Created by thyhates on 2017/5/1.
 */
'use strict';

function BinarySearchTree() {
    let Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };
    let root = null;

    let insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    };

    this.insert = key => {
        let newNode = new Node(key);
        if (root === null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    };
    let inOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            inOrderTraverseNode(node.left, callback);
            callback(node.key);
            inOrderTraverseNode(node.right, callback);
        }
    };
    this.inOrderTraverse = callback => {
        inOrderTraverseNode(root, callback);
    };

    let preOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            callback(node.key);
            preOrderTraverseNode(node.left, callback);
            preOrderTraverseNode(node.right, callback);
        }
    };
    this.preOrderTraverse = callback => {
        preOrderTraverseNode(root, callback);
    };
    let postOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            postOrderTraverseNode(node.left, callback);
            postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    };
    this.postOrderTraverse = callback => {
        postOrderTraverseNode(root, callback);
    };

    let minNode = node => {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node.key;
        }
        return null;
    };
    this.min = () => {
        return minNode(root);
    };
    let findMinNode=node=>{
      if(node){
          while(node&&node.left!==null){
              node=node.left;
          }
          return node;
      }
    };

    let maxNode = node => {
        if (node) {
            while (node && node.right) {
                node = node.right;
            }
            return node.key;
        }
        return null;
    };
    this.max = () => {
        return maxNode(root);
    };

    let searchNode=(node,key)=>{
        if(node===null){
            return false;
        }
        if(key<node.key){
           return searchNode(node.left,key);
        }else if(key>node.key){
           return searchNode(node.right,key);
        }else{
            return true;
        }
    };
    this.search=key=>{
      return searchNode(root,key);
    };

    let removeNode=(node,key)=>{
        if(node===null){
            return null;
        }
        if(key<node.key){
            node.left=removeNode(node.left,key);
            return node;
        }else if(key>node.key){
            node.right=removeNode(node.right,key);
            return node;
        }else{
            if(node.left===null&&node.right===null){
                node=null;
                return node;
            }
            if(node.left===null){
                node=node.right;
                return node;
            }else if(node.right===null){
                node=node.left;
                return node;
            }
            let aux=findMinNode(node.right);
            node.key=aux.key;
            node.right=removeNode(node.right,aux.key);
            return node;
        }
    };
    this.remove=key=>{
      root=removeNode(root,key);
    };
}

module.exports = BinarySearchTree;

let tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

function printNode(key) {
    console.log(key);
}
// tree.inOrderTraverse(printNode);
// console.log('-'.repeat(20));
// tree.preOrderTraverse(printNode);
// console.log('-'.repeat(20));
// tree.postOrderTraverse(printNode);
console.log(tree.min());