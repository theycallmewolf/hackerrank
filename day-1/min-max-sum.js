function miniMaxSum(arr) {
    var sortedArr = arrSort(arr);
    var minArr = sortedArr.slice(0, -1);
    var maxArr = sortedArr.slice(1);
    console.log("".concat(arrSum(minArr), " ").concat(arrSum(maxArr)));
    // utils
    function arrSort(arr) {
        return arr.sort(function (a, b) {
            switch (true) {
                case a > b:
                    return 1;
                case a < b:
                    return -1;
                default:
                    return 0;
            }
        });
    }
    function arrSum(arr) {
        return arr.reduce(function (a, c) { return a + c; });
    }
}
;
var arr = [1, 3, 5, 7, 9];
miniMaxSum(arr); // 16 24
