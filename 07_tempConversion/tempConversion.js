const ftoc = function(fahrenheit) {
  let fahrenheitToCelsius = (fahrenheit - 32)/1.8;
  return Math.round(fahrenheitToCelsius * 10)/10;
};

const ctof = function(celsius) {
  let celsiusToFahrenheit = (celsius * 1.8) + 32
  return Math.round(celsiusToFahrenheit * 10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};