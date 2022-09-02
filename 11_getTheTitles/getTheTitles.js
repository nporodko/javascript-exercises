const getTheTitles = function(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let book = arr[i];
    newArr.push(book.title);
  }
  return newArr;
};

// Do not edit below this line
module.exports = getTheTitles;