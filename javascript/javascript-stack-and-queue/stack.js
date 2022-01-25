

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
      throw new Error('No values in stack')
    }
  }

  peek(){
    if(this.top){
      return this.top.data
    } else {
      throw new Error('No values in stack')
    }  
  }

  isEmpty(){
    return this.top ? true : false;
  }

  printToString(){
    console.log(JSON.stringify(this.top));
  }
}

module.exports = Stack;