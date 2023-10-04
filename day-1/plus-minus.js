function plusMinus(arr) {
    var arrLength = arr.length;
    var positiveLength = arr.filter(function (n) { return n > 0; }).length;
    var negativeLength = arr.filter(function (n) { return n < 0; }).length;
    var zeroLength = arr.filter(function (n) { return n === 0; }).length;
    console.info(positiveLength / arrLength);
    console.info(negativeLength / arrLength);
    console.info(zeroLength / arrLength);
}
var arr = [1, 1, 0, -1, -1];
plusMinus(arr);
