'use strict';

const repeatedWord = require('./repeated-word');

describe('Testing strings for repeated words', () => {
  it('Should handle repeated words with a different case (upper/lower)', () => {
    let input = 'It was the best of times, it was the worst of times,';
    expect(repeatedWord(input)).toEqual('it');
  });

  it('Should handle repeated words with the same casing', () => {
    let input = 'Once upon a time, there was a brave princess who...';
    expect(repeatedWord(input)).toEqual('a');
  });

  it('Should handle repeated words that are next to punctuation marks', () => {
    let input = 'It was a queer, sultry summer, the summer they';
    expect(repeatedWord(input)).toEqual('summer');
  });

  it('Should handle a string with no repeated words', () => {
    let input = 'This is a sentence with no repeating words.';
    expect(repeatedWord(input)).toEqual(false);
  });
});
