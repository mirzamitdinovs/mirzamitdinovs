"use strict";

// 1.5 One Away
// There are three types of edits that can be performed on strings: insert a
// character, remove a character, or replace a character. Given two strings, write a
// function to check if they are one edit (or zero edits) away.

function oneAway(s1, s2) {
  throw new Error("NotImplementedError");
}

function runTests() {
  const cases = [
    ["pale", "ple", true],
    ["pales", "pale", true],
    ["pale", "bale", true],
    ["pale", "bake", false],
    ["", "", true],
    ["a", "", true],
    ["", "ab", false],
    ["abcd", "abxd", true],
    ["abcd", "abxcd", true],
    ["abcd", "abxyd", false],
  ];

  for (const [s1, s2, expected] of cases) {
    const result = oneAway(s1, s2);
    if (result !== expected) {
      throw new Error(
        `oneAway(${JSON.stringify(s1)}, ${JSON.stringify(s2)}) => ${result}, expected ${expected}`
      );
    }
  }
}

if (require.main === module) {
  runTests();
  console.log("ok");
}

module.exports = { oneAway, runTests };
