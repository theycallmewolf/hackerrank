function diagonalDifference(arr: number[][]): number {
  const leftToRightDiagonal = arr.map((row, i) => row[i]).filter((val) => !!val);
  const rightToLeftDiagonal = arr.map((row, i) => row[arr.length - 1 - i]).filter((val) => !!val);
  
  const leftToRightDiagonalSum = SumArr(leftToRightDiagonal);
  const rightToLeftDiagonalSum = SumArr(rightToLeftDiagonal);
  
  const sum = leftToRightDiagonalSum - rightToLeftDiagonalSum;

  return Math.abs(sum);

  // utils
  function SumArr(arr: number[]) {
    return arr.reduce((prev, curr) => curr + prev);
  }
}

console.info('[diagonalDifference]', diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]))
