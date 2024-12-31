class LinkedList {
    _head;

  constructor(head = null) {
    this._head = head;
  }

  get size() {
    let size = 0;
    if (this._head == null) {
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
    if (this._head == null) {
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
console.log(list.size);
