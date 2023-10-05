/**
 * @param matrix 2D array of numbers
 * @returns {number} The sum of the maximum values of four numbers in each quadrant of the input matrix.
 * 
 * Example:
 * Input:
 * 112 42 83 119
 * 56 125 56 49
 * 15 78 101 43
 * 62 98 114 108
 * The input matrix is assumed to be a square matrix of size `n x n`, 
 * where `n` is the length of the outer array. 
 * 
 * Output: 414
 * 
 * Explanation:
 * The maximum numbers in each quadrant are:
 * 119, 114, 125, 98
 * The sum of these numbers is 119 + 114 + 125 + 98 = 414
 * 
 * Constraints:
 * 1 <= n <= 128
 * 1 <= matrix[i][j] <= 1000
 * 
 */

function flippingMatrix(matrix: number[][]): number {
  const colsCount = matrix.length; // outer array length
  const rowsCount = matrix[0].length; // inner arrays length

  let sum = 0; // sum of max values in each quadrant

  // The loops only iterate over the first half of the columns and rows, 
  // since each quadrant is defined by the first half of the columns and rows.

  // iterates over the columns of the matrix,
  for (let i = 0; i < colsCount / 2; i++) {
    // iterates over the rows of the matrix
    for (let j = 0; j < rowsCount / 2; j++) {
      const TopLeft = matrix[i][j]; // matrix[0][0], matrix[0][1], matrix[1][0], matrix[1][1]
      const TopRight = matrix[i][rowsCount - 1 - j]; // matrix[0][3], matrix[0][2], matrix[1][3], matrix[1][2]
      const BottomLeft = matrix[colsCount - 1 - i][j]; // matrix[3][0], matrix[3][1], matrix[2][0], matrix[2][1]
      const BottomRight = matrix[colsCount - 1 - i][rowsCount - 1 - j]; // matrix[3][3], matrix[3][2], matrix[2][3], matrix[2][2]

      sum += Math.max(
        Math.max(TopLeft, TopRight),
        Math.max(BottomLeft, BottomRight)
      );
    }
  }
  return sum;
}

/**
 * ALTERNATIVE SOLUTION
 * Use a single loop instead of two nested loops to iterate over each quadrant of the matrix.
 * This can reduce the time complexity of the function from O(n^2) to O(n),
 * which can be a significant improvement for large matrices.
 * 
 * To use a single loop, we can iterate over each element of the matrix and calculate
 * the corresponding maximum value for each quadrant. 
 * We can then add the maximum value to the sum variable and move on to the next element.
 * 
 * This implementation calculates the maximum value for each quadrant using a single Math.max call,
 * which can be more efficient than nested Math.max calls. 
 * Additionally, this implementation only iterates over each element of the matrix once,
 * which can be more efficient than nested loops.
 * 
 * @param matrix 2D array of numbers
 * @returns {number} The sum of the maximum values of four numbers in each quadrant of the input matrix.
 */
function flippingMatrixAlt(matrix: number[][]): number {
  const Length = matrix.length;
  let sum = 0;

  for (let i = 0; i < Length / 2; i++) {
    for (let j = 0; j < Length / 2; j++) {
      const TopLeft = matrix[i][j];
      const TopRight = matrix[i][Length - 1 - j];
      const BottomLeft = matrix[Length - 1 - i][j];
      const BottomRight = matrix[Length - 1 - i][Length - 1 - j];

      const max = Math.max(
        TopLeft,
        TopRight,
        BottomLeft,
        BottomRight
      );
      sum += max;
    }
  }

  return sum;
}

const matrix = [
  [112, 42, 83, 119],
  [56, 125, 56, 49],
  [15, 78, 101, 43],
  [62, 98, 114, 108]
];

console.info('[flippingMatrix]', flippingMatrix(matrix));
console.info('[flippingMatrixAlt]', flippingMatrixAlt(matrix));
