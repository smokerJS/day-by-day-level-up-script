class LinkedList {
  constructor() {
    this._length = 0;
    this._head = null;
    this._tail = null;
  }

  append(data) {
    let node = new Node(data);
    if(this._head) {
      let currNode = this._head;
      while(currNode.next) {
        currNode = currNode.next;
      }
      currNode.next = node;
      this._tail = currNode.next;
    }else {
      this._head = node;
      this._tail = this._head;
    }
    this._length++;
  }

  insert(index, data) {
    if(index && !isNaN(index)) {

      let node = new Node(data);
      if(index === this._length) {
        this._tail.next = node;
      }else {
        let currNode = this._head;
        let prevNode = this._head;
        for(let i = 1 ; i < index; i++) {
          prevNode = currNode;
          currNode = currNode.next;
        }
        node.next = currNode;
        prevNode.next = node;
      }
      this._length++;
      return true;
    }
    return false;
  }

  indexOf(data){
    let currNode = this._head;
    let index = 1;
    while(currNode.getData() != data){
      currNode = currNode.next;
      index++;
    }
    return index;
  }

  find(data){
    let currNode = this._head;
    while(currNode.getData() != data){
      currNode = currNode.next;
    }
    return currNode;
  }

  findOfindex(index) {
    if(index > this._length || isNaN(index)) return -1;
    let currNode = this._head;
    for(let i = 1 ; i < index; i++) {
      currNode = currNode.next;
    }
    return currNode;
  }

  findLast() {
    return this._tail;
  }

  removeAt(index) {
    if(index && index <= this._length) {
      if(index === 1) {
        this._head = this._head.next;
      }else {
        let currNode = this._head;
        let prevNode = this._head;
        let lastIndex = false;
        if(index === this._length) {
          index = index -1;
          lastIndex = true;
        }
        for(let i = 0 ; i < index; i++) {
          prevNode = currNode;
          currNode = currNode.next;
        }
        prevNode.next = null;
        if(lastIndex) this._tail = prevNode;
        else prevNode.next = currNode.next;
      }
      this._length--;
      return true;
    }
    return false;
  }

  remove(data) {
    let index = this.indexOf(data);
    return this.removeAt(index);
  }

  clear() {
    this._length = 0;
    this._head = null;
    this._tail = null;
  }

  size() {
    return this._length;
  }

  isEmpty() {
    return this._length ? false : true;
  }

}

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
  getData() {
    return this.data;
  }
}