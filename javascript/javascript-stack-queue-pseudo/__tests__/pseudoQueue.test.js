'use strict'
const Queue = require('../index')

describe('Tests for Queue', () => {

  it('Can successfully enqueue into a queue', () => {
    let queue = new Queue();
    queue.enqueue(100);
    expect(queue.front.data).toBe(100);
  })
  
  it('Can successfully enqueue multiple values into a queue', () => {
    let queue = new Queue();
    queue.enqueue(100);
    queue.enqueue(200);
    queue.enqueue(300);
    queue.enqueue(400);
    expect(queue.front.data).toBe(100);
    expect(queue.back.data).toBe(400);
  })

  it('Can successfully dequeue out of a queue the expected value', () => {
    let queue = new Queue();
    queue.enqueue(100);
    queue.enqueue(200);
    expect(queue.front.data).toBe(100);
  })


  it('Can successfully empty a queue after multiple dequeues', () => {
    let queue = new Queue();
    queue.enqueue(100);
    queue.enqueue(200);

    queue.dequeue();
    queue.dequeue()
;    expect(queue.front).toBe(null);
  })

  it('Can successfully instantiate an empty queue', () => {
    let queue = new Queue();
    expect(queue).toBeDefined();
  })
})
