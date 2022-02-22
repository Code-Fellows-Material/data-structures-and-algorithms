'use strict'

const { expect } = require('@jest/globals');
const quickSort = require('./quickSort');

// test
describe('Tests linked list functionality.', () => {

  let testArr1 = [ 2, 5, 1, 8, 3]

  it('Can successfully sort an array', () => {
    expect(quickSort(testArr1, 0, testArr1.length - 1)).toEqual([ 1, 2, 3, 5, 8 ]);
  })

  it('Returns false if not passed an array', () => {
    expect(quickSort('testArr1')).toEqual(false);
  })

})