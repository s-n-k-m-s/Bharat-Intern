let celcius = document.getElementById("celcius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");

celcius.oninput = function () {
  let f = (parseFloat(celcius.value) * 9 / 5) + 32;
  let k = parseFloat(celcius.value) + 273.15;
  fahrenheit.value = f.toFixed(2);
  kelvin.value = k.toFixed(2);
}
fahrenheit.oninput = function () {
  let c = (parseFloat(fahrenheit.value) - 32) * 5 / 9;
  let k = (parseFloat(fahrenheit.value) - 32) * 5 / 9 + 273.15;
  celcius.value = c.toFixed(2);
  kelvin.value = k.toFixed(2);
}
kelvin.oninput = function () {
  let c = parseFloat(kelvin.value) - 273.15;
  let f = (parseFloat(kelvin.value) - 273.15) * 9 / 5 + 32;
  celcius.value = c.toFixed(2);
  fahrenheit.value = f.toFixed(2);
}
