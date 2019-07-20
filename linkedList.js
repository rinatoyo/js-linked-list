/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
  //when it says it should have a "method", it means function
  let head = null;
  let tail = null;

  let getHead = function() {
    return head;
  };

  let getTail = function() {
    return tail;
  };

  let add = function(value) {
    let newNode = {
      value: value,
      next: null
    };

    if (head == null) {
      head = newNode;
    }

    if (tail !== null) {
      tail.next = newNode;
    }
    tail = newNode;
    return newNode;
  };

  let get = function(index) {
    // console.log(head);
    let indexCount = 0; //starting index
    let currentNode = head; //starting point
    while (indexCount < index && currentNode !== null) {
      currentNode = currentNode.next;
      indexCount++;
    }
    if (currentNode == null) {
      return false;
    }
    return currentNode;
  };

  let remove = function(num) {
    if (num === 0) {
      head = head.next; //first element
      if (get(num) === false) {
        return false;
      }
    } else {
      let currentNode = get(num);
      if (currentNode === false) {
        return false;
      }
      let prevNode = get(num - 1); //node before current
      if (currentNode.next === null) {
        //if it's last tail
        prevNode.next = null; //prev next becomes null to make that last
        currentNode = null; //there is no current
        tail = prevNode; //tail becomes the prev node, removing current
        return;
      }
      prevNode.next = currentNode.next; // prev next is now current next
      currentNode = prevNode.next; //prev next is now current
      tail = currentNode; //the current is the tail or end
    }
  };

  let insert = function() {};

  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    remove: remove,
    get: get,
    insert: insert
  };
}
