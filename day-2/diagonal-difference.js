function diagonalDifference(arr) {
    var leftToRightDiagonal = arr.map(function (row, i) { return row[i]; }).filter(function (val) { return !!val; });
    var rightToLeftDiagonal = arr.map(function (row, i) { return row[arr.length - 1 - i]; }).filter(function (val) { return !!val; });
    var leftToRightDiagonalSum = SumArr(leftToRightDiagonal);
    var rightToLeftDiagonalSum = SumArr(rightToLeftDiagonal);
    var sum = leftToRightDiagonalSum - rightToLeftDiagonalSum;
    return Math.abs(sum);
    // utils
    function SumArr(arr) {
        return arr.reduce(function (prev, curr) { return curr + prev; });
    }
}
console.info('[diagonalDifference]', diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]));
