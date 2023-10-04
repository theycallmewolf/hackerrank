function plusMinus(arr: number[]): void {
  const arrLength = arr.length;
  const positiveLength = arr.filter(n => n > 0).length;
  const negativeLength = arr.filter(n => n < 0).length;
  const zeroLength = arr.filter(n => n === 0).length;

  console.info(positiveLength / arrLength);
  console.info(negativeLength / arrLength);
  console.info(zeroLength / arrLength);
}

const arr = [1, 1, 0, -1, -1];
plusMinus(arr);