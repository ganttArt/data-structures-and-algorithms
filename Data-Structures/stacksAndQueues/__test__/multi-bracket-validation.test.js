'use strict';

let mbv = require('../challenges/multi-bracket-validation');

describe('Multi Bracket Validation code challenge', () => {
  it('Returns true when the input string is balanced', () => {
    expect(mbv('{}')).toEqual(true);
    expect(mbv('{}(){}')).toEqual(true);
    expect(mbv('()[[Extra Characters]]')).toEqual(true);
    expect(mbv('(){}[[]]')).toEqual(true);
    expect(mbv('{}{Code}[Fellows](())')).toEqual(true);
  });

  it('Returns false when the input string is not balanced', () => {
    expect(mbv('[({}]')).toEqual(false);
    expect(mbv('(](')).toEqual(false);
    expect(mbv('{(})')).toEqual(false);
  });
});
