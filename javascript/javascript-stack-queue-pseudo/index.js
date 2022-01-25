const { throwStatement } = require("@babel/types");


class Node{
  constructor(data, next){
    this.data = data,
    this.next = next
  }
}

class Stack{
  constructor(){
    this.top = null;
  }

  push(data){
    if(!this.top){
      this.top = new Node(data, null);
    } else {
      const nodePtr = this.top;
      this.top = new Node(data, null);
      this.top.next = nodePtr;
    }
  }

  pop(){
    if(this.top){
      let poppedNodePtr = this.top;
      this.top = poppedNodePtr.next;
      return poppedNodePtr.data;
    } else {
      return null
    }
  }

  peek(){
      return this.top.data 
  }

  printToString(){
    console.log(JSON.stringify(this.top));
  }
}


class PseudoQueue {
  constructor(){
    this.addStack = new Stack();
    this.callStack = new Stack();
    this.front = null;
    this.back = null;
  }

  enqueue(data){
    if(!this.addStack.top){
      this.addStack.push(data);
      this.front = this.addStack.top;
    } else {
      this.addStack.push(data);
    }
    this.back = this.addStack.top;
  }

  dequeue(){
    while(this.addStack.top){
      this.callStack.push(this.addStack.pop());
    }
    let returnVar = this.callStack.pop();
    this.front = this.callStack.top;
    while(this.callStack.top){
      this.addStack.push(this.callStack.pop());
    }
    this.back = this.addStack.top;
    return returnVar;
  }
}

module.exports = PseudoQueue;