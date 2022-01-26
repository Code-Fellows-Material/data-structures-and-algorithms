'use strict'

const Queue = require('./queue')

class AnimalShelter {
  constructor(){
    this.dogQueue = new Queue();
    this.catQueue = new Queue();
  }

  enqueue(animal){
    if(!(animal === 'cat' || animal === 'dog')) return null
    animal === 'cat' ? 
      this.catQueue.enqueue(`Cat #${Math.floor(Math.random() * 10) + 1}`) : 
      this.dogQueue.enqueue(`Dog #${Math.floor(Math.random() * 10) + 1}`);

  }

  dequeue(perf){
    if(!(perf === 'cat' || perf === 'dog')) return null

    return perf === 'cat' ? 
      this.catQueue.dequeue() : 
      this.dogQueue.dequeue();
  }
}


module.exports = AnimalShelter;