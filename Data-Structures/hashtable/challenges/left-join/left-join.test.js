'use strict';

const { Hashmap } = require('../../hashtable');
const leftJoin = require('./left-join');

describe('Tests for combining two hashmaps using leftJoin approach', () => {
  it('Returns the first hash map unchanged if there are no values in hashmap2', () => {
    let hm1 = new Hashmap(10);
    hm1.set('test', 'value1');
    hm1.set('test', 'value2');
    let hm2 = new Hashmap(10);
    expect(leftJoin(hm1, hm2)).toEqual(hm1);
  });

  it('Returns a hashmap1 with the values from hashmap2 added to it', () => {
    let hm1 = new Hashmap(1);
    hm1.set('test', 'value1');
    let hm1Copy = new Hashmap(1);
    hm1Copy.set('test', 'value1');
    let hm2 = new Hashmap(10);
    hm2.set('test', 'value2');
    console.log(leftJoin(hm1, hm2));
    expect(leftJoin(hm1, hm2)).not.toEqual(hm1Copy);
  });
});
