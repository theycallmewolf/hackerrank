/*
 *
 * @param matrix 2D array of numbers
 * @returns {number} The sum of the maximum values of four numbers
 * in each quadrant of the input matrix.
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
function flippingMatrix(matrix) {
    var colsCount = matrix.length; // outer array length
    var rowsCount = matrix[0].length; // inner arrays length
    var sum = 0; // sum of max values in each quadrant
    // The loops only iterate over the first half of the columns and rows, 
    // since each quadrant is defined by the first half of the columns and rows.
    // iterates over the columns of the matrix,
    for (var i = 0; i < colsCount / 2; i++) {
        // iterates over the rows of the matrix
        for (var j = 0; j < rowsCount / 2; j++) {
            var TopLeft = matrix[i][j]; // matrix[0][0], matrix[0][1], matrix[1][0], matrix[1][1]
            var TopRight = matrix[i][rowsCount - 1 - j]; // matrix[0][3], matrix[0][2], matrix[1][3], matrix[1][2]
            var BottomLeft = matrix[colsCount - 1 - i][j]; // matrix[3][0], matrix[3][1], matrix[2][0], matrix[2][1]
            var BottomRight = matrix[colsCount - 1 - i][rowsCount - 1 - j]; // matrix[3][3], matrix[3][2], matrix[2][3], matrix[2][2]
            sum += Math.max(Math.max(TopLeft, TopRight), Math.max(BottomLeft, BottomRight));
        }
    }
    return sum;
}
function flippingMatrixAlt(matrix) {
    var n = matrix.length;
    var sum = 0;
    for (var i = 0; i < n / 2; i++) {
        for (var j = 0; j < n / 2; j++) {
            var max = Math.max(matrix[i][j], matrix[i][n - 1 - j], matrix[n - 1 - i][j], matrix[n - 1 - i][n - 1 - j]);
            sum += max;
        }
    }
    return sum;
}
var matrix = [
    [112, 42, 83, 119],
    [56, 125, 56, 49],
    [15, 78, 101, 43],
    [62, 98, 114, 108]
];
console.info('[flippingMatrix]', flippingMatrix(matrix));
console.info('[flippingMatrixAlt]', flippingMatrixAlt(matrix));
