class LinkedList {
    _head;

  constructor(head = null) {
    this._head = head;
  }

  get size() {
    let size = 0;
    if (this._head === null) {
        return size;
    } else {
        size = 1;
        let temp = this._head;
        while (temp.nextNode !== null) {
          temp = temp.nextNode;
          size++;
        }
        return size;
    }
  }
  get head() {
    return this._head;
  }
  get tail() {
    let temp = this._head;
    while (temp.nextNode !== null) {
      temp = temp.nextNode;
    }
    return temp;
  }

  append(value) {
    if (this._head === null) {
      this._head = new Node(value);
    } else {
      let temp = this._head;
      while (temp.nextNode !== null) {
        temp = temp.nextNode;
      }
      temp.nextNode = new Node(value);
    }
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this._head;
    this._head = newNode;
  }
  at(index) {
    let temp = this._head;
    let tempIndex = 0;
    while (tempIndex != index && temp !== null) {
      temp = temp.nextNode;
      tempIndex++;
    }
    if (temp === null) {
      console.error('Value not in Linked List');
      return;
    } 
    return temp;
  }
  pop() {
    if (this._head === null) {
      console.error("Linked List is Empty");
    } else if (this._head.nextNode === null) {
      this._head = null;
    } else {
      let temp = this._head;
      //Set temp to be 2nd last node in list
      while (temp.nextNode.nextNode !== null) {
        temp = temp.nextNode;
      }
      temp.nextNode = null;
    }
  }
  contains(value) {
    let temp = this._head;
    while(temp !== null) {
      if (temp.value == value) {
      return true;
      }
      temp = temp.nextNode;
    }
    return false;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const list = new LinkedList();
list.append("Jake");
list.append("Horm");
list.append("Fac");
list.prepend("Man");
console.log(list.contains("Fac"));