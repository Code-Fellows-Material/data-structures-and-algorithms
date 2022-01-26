'use strict'



class Node{
  constructor(data, next){
    this.data = data,
    this.next = next
  }
}

class Queue{
  constructor(){
    this.front = null;
    this.back = null;
  }

  enqueue(data){
    if(!this.front){
      this.front = new Node(data, null);
      this.back = this.front;
    } else {
      const tempNode = this.back;
      this.back = new Node(data, null);
      tempNode.next = this.back;
    }
  }

  dequeue(){
    if(this.front){
      let dequeueNodePtr = this.front;
      this.front = dequeueNodePtr.next;
      return dequeueNodePtr.data;
    } else {
      throw new Error('No values in queue')
    }
  }

  peek(){
    if(this.front){
      return this.front.data
    } else {
      throw new Error('No values in queue')
    }  
  }

  isEmpty(){
    return this.front ? true : false;
  }

  printToString(){
    console.log(JSON.stringify(this.front));
  }
}

module.exports = Queue;