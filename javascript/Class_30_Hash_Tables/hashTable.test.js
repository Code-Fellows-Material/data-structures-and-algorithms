
const Hashtable = require('./Hashtable');
const { expect } = require('@jest/globals');

describe('Tests linked list functionality.', () => {

  let hTable = new Hashtable;

  it('Setting a key/value to your hashtable results in the value being in the data structure', () => {
    const key = 'key';
    const value = 'value';
    hTable.set(key, value);
    expect(hTable.get(key)).toEqual('value');
  })

  it('Retrieving based on a key returns the value stored', () => {
    const key = 'key';
    expect(hTable.get(key)).toEqual('value');
  })

  it('Successfully returns undefined for a key that does not exist in the hashtable', () => {
    const key = 'NonExistentKey';
    expect(hTable.get(key)).toEqual(undefined);
  })

  it('Successfully returns a list of all unique keys that exist in the hashtable', () => {
    const key1 = 'key1';
    const value1 = 'value1';
    hTable.set(key1, value1);
    expect(hTable.keys()).toEqual(['key1', 'key']);
  })

  it('Successfully handle a collision within the hashtable', () => {
    const key1 = 'key1';
    const value1 = 'value2';
    hTable.set(key1, value1);
    expect(hTable.get(key1)).toEqual('value2');
  })

  it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    const key1 = 'key1';
    const value1 = 'value1';
    hTable.set(key1, value1);
    expect(hTable.get(key1)).toEqual('value1');
  })

  it('Successfully hash a key to an in-range value', () => {
    const keyToHash = 'key1';
    expect( hTable._hash(keyToHash)).toBeLessThanOrEqual(53);
  })
})