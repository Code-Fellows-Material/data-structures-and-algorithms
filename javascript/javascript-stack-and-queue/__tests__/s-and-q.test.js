'use strict' 
const { expect } = require('@jest/globals');
const Stack = require('../stack.js');
const Queue = require('../queue.js');

describe('Tests for Stack', () => {

  it('Can successfully push onto a stack', () => {
    let stack = new Stack();
    stack.push(100);
    expect(stack.top.data).toBe(100);
  })

  it('Can successfully push multiple values onto a stack', () => {
    let stack = new Stack();
    stack.push(100);
    stack.push(200);
    stack.push(300);
    stack.push(400);
    expect(stack.top.data).toBe(400);
  })

  it('Can successfully pop off the stack', () => {
    let stack = new Stack();
    stack.push(100);
    stack.push(200);
    
    expect(stack.pop()).toBe(200);
  })

  it('Can successfully empty a stack after multiple pops', () => {
    let stack = new Stack();
    stack.push(100);
    stack.push(200);
    
    expect(stack.pop()).toBe(200);
    expect(stack.pop()).toBe(100);
    expect(stack.top).toBe(null);
  })

  it('Can successfully peek the next item on the stack', () => {
    let stack = new Stack();
    stack.push(100);
    stack.push(200);
    
    expect(stack.peek()).toBe(200);
  })

  it('Can successfully instantiate an empty stack', () => {
    let stack = new Stack();
    expect(stack).toBeDefined();
  })
  
  it('Calling pop or peek on empty stack raises exception', () => {
    let stack = new Stack();
    expect(() => {
      stack.peek()
    }).toThrow('No values in stack')
  })
})


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

  it('Can successfully peek into a queue, seeing the expected value', () => {
    let queue = new Queue();
    queue.enqueue(100);
    queue.enqueue(200);
    expect(queue.peek()).toBe(100);
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

  it('Calling dequeue or peek on empty queue raises exception', () => {
    let queue = new Queue();
    expect(()=> queue.dequeue()).toThrowError('No values in queue');
    expect(()=> queue.peek()).toThrowError('No values in queue');
  })
})
