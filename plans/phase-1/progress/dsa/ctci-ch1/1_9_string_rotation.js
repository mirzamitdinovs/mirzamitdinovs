"use strict";

// 1.9 String Rotation
// Assume you have a method isSubstring which checks if one word is a substring
// of another. Given two strings, s1 and s2, write code to check if s2 is a rotation
// of s1 using only one call to isSubstring.

function isSubstring(s1, s2) {
  return s1.includes(s2);
}

function isRotation(s1, s2) {
  throw new Error("NotImplementedError");
}

function runTests() {
  const cases = [
    ["waterbottle", "erbottlewat", true],
    ["abcd", "cdab", true],
    ["abcd", "acbd", false],
    ["", "", true],
    ["a", "a", true],
    ["a", "b", false],
    ["aaab", "abaa", true],
    ["aaab", "baaa", true],
    ["aaab", "aaba", true],
    ["aaab", "aaab", true],
    ["ab", "aba", false],
  ];

  for (const [s1, s2, expected] of cases) {
    const result = isRotation(s1, s2);
    if (result !== expected) {
      throw new Error(
        `isRotation(${JSON.stringify(s1)}, ${JSON.stringify(s2)}) => ${result}, expected ${expected}`
      );
    }
  }
}

if (require.main === module) {
  runTests();
  console.log("ok");
}

module.exports = { isRotation, isSubstring, runTests };
