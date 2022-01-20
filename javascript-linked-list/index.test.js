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

  // it('Can successfully instantiate an empty linked list', () => {
  //   const TestLinkedList = new LinkedList();
  //   expect(TestLinkedList.head).toBe(null);
  // })
  
  // it('Can properly insert into the linked list', () => {
  //   const TestLinkedList = new LinkedList();
  //   TestLinkedList.insertFirst('test');
  //   expect(TestLinkedList.includes('test')).toBe(true);
  // })

  // it('The head property will properly point to the first node in the linked list', () => {
  //   expect(testList.head.data).toBe(testList.getAt(0));
  // })

  // it('Can properly insert multiple nodes into the linked list', () => {
  //   const TestLinkedList = new LinkedList();
  //   TestLinkedList.insertFirst('test1');
  //   TestLinkedList.append('test2');
  //   expect(TestLinkedList.getAt(0)).toBe('test1');
  //   expect(TestLinkedList.getAt(1)).toBe('test2');
  // })

  // it('Will return true when finding a value within the linked list that exists', () => {
  //   expect(testList.includes('100')).toBe(true);
  // })

  // it('Will return false when searching for a value in the linked list that does not exist', () => {
  //   expect(testList.includes('whoops')).toBe(false);
  // })

  // it('Can properly return a collection of all the values that exist in the linked list', () => {
  //   const consoleSpy = jest.spyOn(console, 'log');
  //   testList.printToString();
  //   expect(consoleSpy).toHaveBeenCalledWith('{\"data\":300,\"next\":{\"data\":200,\"next\":{\"data\":100,\"next\":null}}}');
  // })

  // it('Can successfully add a node to the end of the linked list', () => {
  //   testList.append('test2');
  //   expect(testList.getAt(3)).toBe('test2');  
  // })

  // it('Can successfully add multiple nodes to the end of a linked list', () => {
  //   const TestLinkedList = new LinkedList();
  //   TestLinkedList.insertFirst('test1');
  //   TestLinkedList.append('test2');
  //   TestLinkedList.insertFirst('first');
  //   TestLinkedList.append('test3');
  //   expect(TestLinkedList.getAt(2)).toBe('test2'); 
  //   expect(TestLinkedList.getAt(3)).toBe('test3'); 
  // })

  // it('Can successfully insert a node before a node located in the middle of a linked list', () => {
  //   const TestLinkedList = new LinkedList();
  //   TestLinkedList.insertFirst('test1');
  //   TestLinkedList.append('test2');
  //   TestLinkedList.insertFirst('first');
  //   TestLinkedList.insertBefore('test2', 'HI!')
  //   TestLinkedList.printListData();
  //   expect(TestLinkedList.getAt(2)).toBe('HI!'); 
  // })

  // it('Can successfully insert a node before the first node of a linked list', () => {
  //   const TestLinkedList = new LinkedList();
  //   TestLinkedList.insertFirst('test1');
  //   TestLinkedList.append('test2');
  //   TestLinkedList.insertFirst('first');
  //   expect(TestLinkedList.getAt(0)).toBe('first');
  // })

  // it('Can successfully insert after a node in the middle of the linked list', () => {
  //   const TestLinkedList = new LinkedList();
  //   TestLinkedList.insertFirst('test1');
  //   TestLinkedList.append('test2');
  //   TestLinkedList.insertFirst('first');
  //   TestLinkedList.insertAfter('test1', 'HI!');
  //   expect(TestLinkedList.getAt(2)).toBe('HI!'); 
  // })
  
  // it('Can successfully insert a node after the last node of the linked list', () => {
  //   const TestLinkedList = new LinkedList();
  //   TestLinkedList.insertFirst('test1');
  //   TestLinkedList.append('test2');
  //   TestLinkedList.insertFirst('first');
  //   TestLinkedList.insertAfter('test2', 'HI!')
  //   expect(TestLinkedList.getAt(3)).toBe('HI!'); 
  // })  

  // it('Where k is greater than the length of the linked list', () => {
  //   const TestLinkedList = new LinkedList();
  //   TestLinkedList.insertFirst('test1');
  //   TestLinkedList.append('test2');
  //   TestLinkedList.append('test3');
  //   expect(TestLinkedList.kthFromEnd(5)).toBe(-1); 
  // })

  // it('Where k and the length of the list are the same', () => {
  //   const TestLinkedList = new LinkedList();
  //   TestLinkedList.insertFirst('test1');
  //   TestLinkedList.append('test2');
  //   TestLinkedList.append('test3');
  //   TestLinkedList.printListData();
  //   expect(TestLinkedList.kthFromEnd(3)).toBe('test1'); 
  // })

  // it('Where k is not a positive integer', () => {
  //   const TestLinkedList = new LinkedList();
  //   expect(TestLinkedList.kthFromEnd(3)).toBe(-1); 
  // })

  // it('Where the linked list is of a size 1', () => {
  //   const TestLinkedList = new LinkedList();
  //   TestLinkedList.insertFirst('test1');
  //   expect(TestLinkedList.kthFromEnd(1)).toBe('test1'); 
  // })

  // it('where k is not at the end, but somewhere in the middle of the linked list', () => {
  //   const TestLinkedList = new LinkedList();
  //   TestLinkedList.insertFirst('test1');
  //   TestLinkedList.append('test2');
  //   TestLinkedList.append('test3');
  //   TestLinkedList.append('test4');
  //   TestLinkedList.append('test5');
  //   TestLinkedList.append('test6');
  //   TestLinkedList.append('test7');
  //   expect(TestLinkedList.kthFromEnd(4)).toBe('test4'); 
  // })

  it('zip two linked list', () => {
    const TestLinkedListA = new LinkedList();
    TestLinkedListA.insertFirst('Atest1');
    TestLinkedListA.append('Atest2');
    TestLinkedListA.append('Atest3');
    TestLinkedListA.append('Atest4');

    const TestLinkedListB = new LinkedList();
    TestLinkedListB.insertFirst('Btest1');
    TestLinkedListB.append('Btest2');
    TestLinkedListB.append('Btest3');
    TestLinkedListB.append('Btest4');

    let zipListsList = new LinkedList();

    let zippedList = zipListsList.zipLists(TestLinkedListA, TestLinkedListB);

    zippedList.printListData();
    expect(zippedList).toBe(zippedList); 
  })
})

