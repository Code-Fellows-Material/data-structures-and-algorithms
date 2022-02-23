
const RepeatHashtable = require('./Hashtable');
const testDataArr = require('./testData');
const { expect } = require('@jest/globals');

describe('Tests ability to find first repeat word.', () => {

  it('To find "a" in test 1', () => {
    let hTable = new RepeatHashtable();
    expect(hTable.repeatCheck(testDataArr[0])).toEqual('a');
  });

  it('To find "it" in test 2', () => {
    let hTable = new RepeatHashtable();
    expect(hTable.repeatCheck(testDataArr[1])).toEqual('it');
  });

  it('To find "summer" in test 3', () => {
      let hTable = new RepeatHashtable();
    expect(hTable.repeatCheck(testDataArr[2])).toEqual('summer');
  });

});

describe('Tests ability of helper functions.', () => {

  it('To hash a string', () => {
    let hTable = new RepeatHashtable();
    expect(hTable._hash('test')).toEqual(2931);
  });

  it('To add a key to the hashtable and return false if no match', () => {
    let hTable = new RepeatHashtable();
    expect(hTable.addAndCheck('test')).toEqual(false);
  });

  it('To add a key to the hashtable and return true if match', () => {
    let hTable = new RepeatHashtable();
    hTable.addAndCheck('test')
    expect(hTable.addAndCheck('test')).toEqual('test');
  });

  it('To remove puntuation from a string', () => {
      let hTable = new RepeatHashtable();
    expect(hTable.removePunctuation("t!e@st!")).toEqual('test');
  });

});
