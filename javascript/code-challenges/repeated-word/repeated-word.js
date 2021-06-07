'use strict';

function repeatedWord(text) {
  // text remove puntuation, https://stackoverflow.com/questions/4328500/how-can-i-strip-all-punctuation-from-a-string-in-javascript-using-regex
  text = text.replace(/[^\w\s]|_/g, '').replace(/\s+/g, ' ');
  text = text.split(' ');

  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < i; j++) {
      if (text[i].toLowerCase() === text[j].toLowerCase()) return text[i].toLowerCase();
    }
  }
  return false;
}

module.exports = repeatedWord;
