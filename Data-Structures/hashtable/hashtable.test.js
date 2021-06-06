'use strict';

const { Hashmap } = require('./hashtable');

describe('Hashtable data structure tests', () => {
  it('Adding a key/value to your hashtable results in the value being in the data structure', () => {
    let hm = new Hashmap(3);
    hm.set('test', 'value');
    expect(hm.contains('test')).toEqual(true);
  });

  it('Retrieving based on a key returns the value stored', () => {
    let hm = new Hashmap(3);
    hm.set('test', 'value');
    expect(hm.get('test')).toEqual('value');
  });

  it('Successfully returns null for a key that does not exist in the hashtable', () => {
    let hm = new Hashmap(3);
    hm.set('test', 'value');
    expect(hm.get('test2')).toEqual(null);
  });

  it('Successfully handle a collision within the hashtable', () => {
    let hm = new Hashmap(1);
    hm.set('test', 'value1');
    hm.set('test', 'value2');
    expect(hm.storage[0].length).toEqual(2);
  });

  it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    let hm = new Hashmap(1);
    hm.set('test1', 'value1');
    hm.set('test2', 'value2');
    expect(hm.get('test1')).toEqual('value1');
    expect(hm.get('test2')).toEqual('value2');
  });

  it('Successfully hash a key to an in-range value', () => {
    let hm = new Hashmap(10);
    let hash = hm.hash('key');
    expect(hash <= 10).toEqual(true);
  });

  it('Returns correct value when contains method is called', () => {
    let hm = new Hashmap(10);
    expect(hm.contains('test')).toEqual(false);
    hm.set('test', 'value');
    expect(hm.contains('test')).toEqual(true);
  });
});
