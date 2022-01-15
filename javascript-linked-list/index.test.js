const { expect } = require('@jest/globals');
const LinkedList = require('./index');

// Create a new linked list.
const testList = new LinkedList();

// add items to linked list
testList.insertFirst(100);
testList.insertFirst(200);
testList.insertFirst(300);

// test
describe('Tests linked list functionality.', () => {

  it('Can successfully instantiate an empty linked list', () => {
    const TestLinkedList = new LinkedList();
    expect(TestLinkedList.head).toBe(null);
  })
  
  it('Can properly insert into the linked list', () => {
    const TestLinkedList = new LinkedList();
    TestLinkedList.insertFirst('test');
    expect(TestLinkedList.includes('test')).toBe(true);
  })

  it('The head property will properly point to the first node in the linked list', () => {
    expect(testList.head.data).toBe(testList.getAt(0));
  })

  it('Can properly insert multiple nodes into the linked list', () => {
    const TestLinkedList = new LinkedList();
    TestLinkedList.insertFirst('test1');
    TestLinkedList.insertLast('test2');
    expect(TestLinkedList.getAt(0)).toBe('test1');
    expect(TestLinkedList.getAt(1)).toBe('test2');
    
  })

  it('Will return true when finding a value within the linked list that exists', () => {
    expect(testList.includes('100')).toBe(true);
  })

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    expect(testList.includes('whoops')).toBe(false);
  })

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    testList.printToString();
    expect(consoleSpy).toHaveBeenCalledWith('{\"data\":300,\"next\":{\"data\":200,\"next\":{\"data\":100,\"next\":null}}}');
  })
  
})

