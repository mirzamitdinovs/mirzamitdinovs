"use strict";

// 1.8 Zero Matrix
// Write an algorithm such that if an element in an M x N matrix is 0, its entire
// row and column are set to 0.

function zeroMatrix(matrix) {
  throw new Error("NotImplementedError");
}

function runTests() {
  const cases = [
    [
      [
        [1, 2, 3],
        [4, 0, 6],
        [7, 8, 9],
      ],
      [
        [1, 0, 3],
        [0, 0, 0],
        [7, 0, 9],
      ],
    ],
    [
      [
        [0, 2],
        [3, 4],
      ],
      [
        [0, 0],
        [0, 4],
      ],
    ],
    [
      [[1, 2, 3]],
      [[1, 2, 3]],
    ],
    [
      [[1], [0], [3]],
      [[0], [0], [0]],
    ],
    [
      [
        [1, 0, 3, 4],
        [5, 6, 7, 8],
      ],
      [
        [0, 0, 0, 0],
        [5, 0, 7, 8],
      ],
    ],
  ];

  for (const [matrix, expected] of cases) {
    const input = matrix.map((row) => row.slice());
    const result = zeroMatrix(input);
    if (JSON.stringify(result) !== JSON.stringify(expected)) {
      throw new Error(
        `zeroMatrix(${JSON.stringify(matrix)}) => ${JSON.stringify(result)}, expected ${JSON.stringify(expected)}`
      );
    }
  }
}

if (require.main === module) {
  runTests();
  console.log("ok");
}

module.exports = { zeroMatrix, runTests };
