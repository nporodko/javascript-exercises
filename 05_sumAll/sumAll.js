const sumAll = function(elem, elem2) {
  if (!Number.isInteger(elem) || !Number.isInteger(elem2)) return "ERROR"
  if (elem < 0 || elem2 < 0)  return "ERROR"

  let min = Math.min(elem, elem2);
  let max = Math.max(elem, elem2);
  let arr = [];

  for (let i = min; i <= max; i++) {
      arr.push(i);
  }
  return arr.reduce((elem, elem2) => elem + elem2)
};
// Do not edit below this line
module.exports = sumAll;