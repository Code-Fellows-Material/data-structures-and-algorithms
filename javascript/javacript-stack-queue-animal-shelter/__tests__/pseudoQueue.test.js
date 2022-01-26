'use strict'
const AnimalShelter = require('../index')

describe('Tests for Queue', () => {

  it('Can successfully enqueue dog into a queue', () => {
    let queue = new AnimalShelter();
    queue.enqueue('dog');
    expect(queue.dogQueue.front.data).toBeDefined();
  })

  it('Can successfully enqueue dog into a queue', () => {
    let queue = new AnimalShelter();
    queue.enqueue('cat');
    expect(queue.catQueue.front.data).toBeDefined();
  })
  
  it('Can successfully enqueue multiple cats into a queue', () => {
    let queue = new AnimalShelter();
    queue.enqueue('cat');
    queue.enqueue('cat');
    expect(queue.catQueue.front.data).toBeDefined();
    expect(queue.catQueue.back.data).toBeDefined();
  })

  it('Can successfully enqueue multiple dogs into a queue', () => {
    let queue = new AnimalShelter();
    queue.enqueue('dog');
    queue.enqueue('dog');
    expect(queue.dogQueue.front.data).toBeDefined();
    expect(queue.dogQueue.back.data).toBeDefined();
  })

  it('Can successfully dequeue out of a queue the expected value', () => {
    let queue = new AnimalShelter();
    queue.enqueue('dog');
    expect(queue.dequeue('dog')).toBeDefined();
  })

  it('Can successfully dequeue out of a queue the expected value', () => {
    let queue = new AnimalShelter();
    queue.enqueue('cat');
    expect(queue.dequeue('cat')).toBeDefined();
  })
})
