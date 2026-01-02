'use strict';

// 1.2 Check Permutation
// Given two strings, write a method to decide if one is a permutation of the other.

function checkPermutation(s1, s2) {
  // v1: sort-based comparison, O(n log n) time and O(n) space.
  // const sorted1 = s1.split('').sort().join('');
  // const sorted2 = s2.split('').sort().join('');
  // return sorted1 === sorted2;

  // v2: frequency counting, O(n) time and O(n) space.
  if (s1.length !== s2.length) return false;

  const counts = new Map();
  for (const ch of s1) {
    counts.set(ch, (counts.get(ch) ?? 0) + 1);
  }

  for (const ch of s2) {
    const next = (counts.get(ch) ?? 0) - 1;
    if (next < 0) return false;
    counts.set(ch, next);
  }

  return true;
}

function runTests() {
  const cases = [
    ['', '', true],
    ['a', 'a', true],
    ['abc', 'bca', true],
    ['abc', 'abcd', false],
    ['abc', 'abC', false], // case-sensitive by default
    ['aab', 'aba', true],
    ['aab', 'abb', false],
    ['abc ', 'cab ', true],
    ['abc', 'def', false],
  ];

  for (const [s1, s2, expected] of cases) {
    const result = checkPermutation(s1, s2);
    if (result !== expected) {
      throw new Error(
        `checkPermutation(${JSON.stringify(s1)}, ${JSON.stringify(
          s2,
        )}) => ${result}, expected ${expected}`,
      );
    }
  }
}

if (require.main === module) {
  runTests();
  console.log('ok');
}

module.exports = { checkPermutation, runTests };
