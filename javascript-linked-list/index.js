

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //Checks to see if a value exists in the list
  includes(data) {
    let current = this.head;
    let found = false;

    while (current && !found) {
      if (data == current.data) found = true;
      current = current.next;
    }

    return found;
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert Last Node
  append(data) {
    let node = new Node(data);
    let current;

    //If empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  // Insert Before a node with value
  insertBefore(value, data) {
    // If index is out of range
    if (!value) {
      console.error('No value');
      return;
    }

    let current;
    let count = 0;
    current = this.head;
    while (current) {

         // If index is 0
      if (current.data === value) {
        this.insertAtIndex(data, count);
        return;
      }
      current = current.next;
      count++;
    }
    return - 1;
  }

  // Insert After a node with value
  insertAfter(value, data) {
    // If index is out of range
    if (!value) {
      console.error('No value');
      return;
    }

    let current;
    let count = 0;
    current = this.head;
    while (current) {

          // If index is 0
      if (current.data === value) {
        this.insertAtIndex(data, count + 1);
        return;
      }
      current = current.next;
      count++;
    }
    return - 1;
  }

  //Insert at index
  insertAtIndex(data, index) {
    // If index is out of range
    if (index < 0 || index > this.size) {
      console.error('index out of range');
      return;
    }
    // If index is 0
    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    const node = new Node(data);
    let current, previous;

    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  //Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;

    if (index < 0 || index > this.size) {
      console.error('index out of range');
      return;
    }

    while (current) {
      if (count === index) {
        return current.data;
      }
      current = current.next;
      count++;
    }
    return null;
  }

   //Get at index
  kthFromEnd(k) {
    let current = this.head;
    let count = 0;

    if (k < 0 || k > this.size) {
      console.error('k out of range');
      return -1;
    }

    let index = this.size - k;

    while (current) {
      if (count === index) {
        return current.data;
      }
      current = current.next;
      count++;
    }
    return null;
  }

  //Remove at index
  removeAt(index) {
    if (index < 0 || index > this.size) {
      console.error('index out of range');
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    //remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
  }

  //Clear List
  clearList() {
    this.head = null;
    this.size = 0;
  }

  //Print List Data
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  //Prints to string
  printToString(){
    console.log(JSON.stringify(this.head));
  }
}

module.exports = LinkedList;