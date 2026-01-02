'use strict';

// 1.3 URLify
// Write a method to replace all spaces in a string with %20.
// You may assume that the string has sufficient space at the end to hold the
// additional characters, and that you are given the true length of the string.

function urlify(s, trueLength) {
  // JS strings are immutable, so we build a new string; O(n) time and O(n) space.
  const parts = [];
  for (let i = 0; i < trueLength; i++) {
    parts.push(s[i] === ' ' ? '%20' : s[i]);
  }
  return parts.join('');
}

function urlifyInPlace(chars, trueLength) {
  // In-place style: work from the end of a char array to avoid extra shifting.
  let spaceCount = 0;
  for (let i = 0; i < trueLength; i++) {
    if (chars[i] === ' ') spaceCount += 1;
  }

  let write = trueLength - 1 + spaceCount * 2;
  for (let read = trueLength - 1; read >= 0; read--) {
    if (chars[read] === ' ') {
      chars[write] = '0';
      chars[write - 1] = '2';
      chars[write - 2] = '%';
      write -= 3;
    } else {
      chars[write] = chars[read];
      write -= 1;
    }
  }

  return chars;
}

function runTests() {
  const cases = [
    ['Mr John Smith    ', 13, 'Mr%20John%20Smith'],
    ['Mr John Smith ', 13, 'Mr%20John%20Smith'],
    ['Hello World  ', 11, 'Hello%20World'],
    ['Hello  World    ', 12, 'Hello%20%20World'],
    ['', 0, ''],
    ['NoSpaces', 8, 'NoSpaces'],
  ];

  for (const [s, trueLength, expected] of cases) {
    const result = urlify(s, trueLength);
    if (result !== expected) {
      throw new Error(
        `urlify(${JSON.stringify(
          s,
        )}, ${trueLength}) => ${result}, expected ${expected}`,
      );
    }
  }

  for (const [s, trueLength, expected] of cases) {
    const chars = s.split('');
    const result = urlifyInPlace(chars, trueLength).join('');
    if (result !== expected) {
      throw new Error(
        `urlifyInPlace(${JSON.stringify(
          s,
        )}, ${trueLength}) => ${result}, expected ${expected}`,
      );
    }
  }
}

if (require.main === module) {
  runTests();
  console.log('ok');
}

module.exports = { urlify, urlifyInPlace, runTests };
