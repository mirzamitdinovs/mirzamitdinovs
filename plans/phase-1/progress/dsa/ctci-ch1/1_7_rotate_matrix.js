"use strict";

// 1.7 Rotate Matrix
// Given an image represented by an N x N matrix, rotate the image by 90 degrees.
// Can you do this in place?

function rotateMatrix(matrix) {
  throw new Error("NotImplementedError");
}

function runTests() {
  const cases = [
    [[[1]], [[1]]],
    [
      [
        [1, 2],
        [3, 4],
      ],
      [
        [3, 1],
        [4, 2],
      ],
    ],
    [
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      [
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3],
      ],
    ],
    [
      [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
      ],
      [
        [13, 9, 5, 1],
        [14, 10, 6, 2],
        [15, 11, 7, 3],
        [16, 12, 8, 4],
      ],
    ],
  ];

  for (const [matrix, expected] of cases) {
    const input = matrix.map((row) => row.slice());
    const result = rotateMatrix(input);
    if (JSON.stringify(result) !== JSON.stringify(expected)) {
      throw new Error(
        `rotateMatrix(${JSON.stringify(matrix)}) => ${JSON.stringify(result)}, expected ${JSON.stringify(expected)}`
      );
    }
  }
}

if (require.main === module) {
  runTests();
  console.log("ok");
}

module.exports = { rotateMatrix, runTests };
