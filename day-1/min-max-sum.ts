function miniMaxSum(arr: number[]): void {
  const sortedArr = arrSort(arr);
  
  const minArr = sortedArr.slice(0, -1);
  const maxArr = sortedArr.slice(1);
  
  console.log(`${arrSum(minArr)} ${arrSum(maxArr)}`);
  
  // utils
  function arrSort (arr: number[]) {
     return arr.sort((a, b) => {
          switch(true) {
              case a > b:
              return 1;

              case a < b:
              return -1;

              default:
              return 0;
          }
      })
  }
  
  function arrSum (arr: number[]) {
      return arr.reduce((a, c) => a +c);
  }
};

const arr = [1, 3, 5, 7, 9];
miniMaxSum(arr); // 16 24