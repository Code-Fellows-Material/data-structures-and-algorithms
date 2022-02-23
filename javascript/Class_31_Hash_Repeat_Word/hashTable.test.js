
const RepeatHashtable = require('./Hashtable');
const testDataArr = require('./testData')
const { expect } = require('@jest/globals');

describe('Tests linked list functionality.', () => {

  let hTable = new RepeatHashtable();

  it('To find match in test 1', () => {
    expect(hTable.repeatCheck(testDataArr[0])).toEqual('a')
  })

})