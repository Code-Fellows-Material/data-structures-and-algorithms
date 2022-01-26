'use strict'

const Stack = require('./stack')

class AnimalShelter {
  constructor(){
    this.dogStack = new Stack();
    this.catStack = new Stack();
  }

  enqueue(animal){
    if(!(animal === 'cat' || animal === 'dog')) return null
    animal === 'cat' ? 
      this.catStack.push(`Cat #${Math.floor(Math.random() * 10) + 1}`) : 
      this.dogStack.push(`Dog #${Math.floor(Math.random() * 10) + 1}`);

  }

  dequeue(perf){
    if(!(perf === 'cat' || perf === 'dog')) return null

    return perf === 'cat' ? 
      this.catStack.pop() : 
      this.dogStack.pop();
  }
}


module.exports = AnimalShelter;