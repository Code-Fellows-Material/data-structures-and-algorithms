'use strict'

const { expect } = require('@jest/globals');
const mergeSort = require('./mergeSort');

// test
describe('Tests linked list functionality.', () => {

  let testArr1 = [ 2, 5, 1, 8, 3]
  let testArr2 = [ 4, 6, 7, 9]

  it('Can successfully sort an array', () => {
    expect(mergeSort(testArr1)).toEqual([ 1, 2, 3, 5, 8 ]);
  })

  it('Returns false if not passed an array', () => {
    expect(mergeSort('testArr1')).toEqual(false);
  })

})