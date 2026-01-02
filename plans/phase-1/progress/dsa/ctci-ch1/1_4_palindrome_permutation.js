'use strict';

// 1.4 Palindrome Permutation
// Given a string, write a function to check if it is a permutation of a palindrome.
// The palindrome does not need to be limited to just dictionary words.

function isPalindromePermutation(s) {
  let left = 0,
    right = s.length - 1;
  while (left <= right) {
    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
    left += 1;
    right -= 1;
  }
  return true;
}

function runTests() {
  const cases = [
    ['Tact Coa', true], // ignore spaces/case: "taco cat"
    ['TacoCat', true],
    ['', true],
    ['a', true],
    ['aa', true],
    ['ab', false],
    ['aab', true],
    ['aabb', true],
    ['aabbc', true],
    ['aabbcd', false],
    ['Never odd or even', true], // ignore spaces/case
  ];

  for (const [s, expected] of cases) {
    const result = isPalindromePermutation(s);
    if (result !== expected) {
      throw new Error(
        `isPalindromePermutation(${JSON.stringify(
          s,
        )}) => ${result}, expected ${expected}`,
      );
    }
  }
}

if (require.main === module) {
  runTests();
  console.log('ok');
}

module.exports = { isPalindromePermutation, runTests };
