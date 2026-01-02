'use strict';

// 1.1 Is Unique
// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

function isUniqueNoExtraDS(s) {
  // O(n^2), O(1) extra space — use when extra data structures are disallowed.
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) return false;
    }
  }
  return true;
}

function isUnique(s) {
  // O(n) time, O(n) space — fastest general-purpose approach.
  const seen = new Set();
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (seen.has(ch)) return false;
    seen.add(ch);
  }
  return true;
}

function runTests() {
  const cases = [
    ['', true],
    ['a', true],
    ['abc', true],
    ['abca', false],
    ['aa', false],
    ['Aa', true], // case-sensitive by default
    ['abc ABC', true], // space counts as a character
  ];

  for (const [s, expected] of cases) {
    const result = isUnique(s);
    if (result !== expected) {
      throw new Error(
        `isUnique(${JSON.stringify(s)}) => ${result}, expected ${expected}`,
      );
    }
  }
}

if (require.main === module) {
  runTests();
  console.log('ok');
}

module.exports = { isUnique, isUniqueNoExtraDS, runTests };
