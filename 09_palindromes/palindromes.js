const palindromes = function (str) {
  let lowerStr = str.toLowerCase();
  const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g;
  const resultStr = lowerStr.replace(regex, '');
  const reverseStr = resultStr.split('').reverse().join('');

  return resultStr === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;