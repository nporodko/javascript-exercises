const fibonacci = function(num) {
  let fibonacciArr = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040]
  if (num < 1) { return "OOPS"; }
  if (num === 0) { return 0; }
  if (num === '') { num  = parseInt(num); }

  let arr = [];
  let a = 0;
  let b = 1;

  for (let i = 1; i <= num; i++) {
    let temp = b;

    b = a + b;
    a = temp;
    arr.push(temp);
  }
   return arr[arr.length - 1];

};

// Do not edit below this line
module.exports = fibonacci;