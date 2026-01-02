"use strict";

// 1.6 String Compression
// Implement a method to perform basic string compression using the counts of
// repeated characters. If the compressed string would not become smaller than the
// original string, return the original string.

function compressString(s) {
  throw new Error("NotImplementedError");
}

function runTests() {
  const cases = [
    ["aabcccccaaa", "a2b1c5a3"],
    ["abc", "abc"],
    ["aa", "aa"], // compression not smaller
    ["aabb", "aabb"],
    ["aabbcccc", "a2b2c4"],
    ["AabCCC", "AabCCC"],
    ["", ""],
  ];

  for (const [s, expected] of cases) {
    const result = compressString(s);
    if (result !== expected) {
      throw new Error(
        `compressString(${JSON.stringify(s)}) => ${result}, expected ${expected}`
      );
    }
  }
}

if (require.main === module) {
  runTests();
  console.log("ok");
}

module.exports = { compressString, runTests };
