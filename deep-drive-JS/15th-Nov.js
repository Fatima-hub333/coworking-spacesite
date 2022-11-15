function convertTemperature(celsius, decimalPlaces = 1) {
  // decimalPlaces = decimalPlaces || 1;
  const fahrenheit = celsius * 1.8 + 32;
  return Number(fahrenheit.toFixed(decimalPlaces));
}

console.log(convertTemperature(21))