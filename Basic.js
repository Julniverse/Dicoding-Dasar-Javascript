// FUNCTION

function convertCelsiusToFahrenheit(temperature) {
    const temperatureInFahrenheit = (9 / 5) * temperature + 32;
  
    console.log('Hasil konversi:', temperatureInFahrenheit);
  }
  
  const temperatureInCelsius = 90;
  
  // Hanya menampilkan nilai function
  console.log(convertCelsiusToFahrenheit);
  // Output => [Function: convertCelciusToFahrenheit]
  
  // Akan menjalankan isi function
  convertCelsiusToFahrenheit(temperatureInCelsius);
  // Output => Hasil konversi: 194

// FUNCTION EXPRESSION
function multiply(a, b) {
    return a * b;
  }
  function sum(a, b) {
    return a + b;
  }
  
  function calculate(operation, numA, numB) {
    return operation(numA, numB);
  }
  const resultmultiply = calculate(multiply, 2, 4);
  console.log(resultmultiply);
  
  const resultsum = calculate(sum, 2, 4);
  console.log(resultsum);
  
  /* Output:
  8
  */

// ARROW FUNCTION

    //REGULAR FUNCTION
  const convertCelsiusToFahrenheitUsingRegularFunction = function (temperature) {
    const result = (9 / 5) * temperature + 32;
    return result;
  };
let temperatureInFahrenheit;

    // Arrow function
const convertCelsiusToFahrenheit = (temperature) => {
  const result = (9 / 5) * temperature + 32;
  return result;
};

temperatureInFahrenheit = convertCelsiusToFahrenheit(90);
console.log('Hasil konversi:', temperatureInFahrenheit);

    // Arrow function versi ringkas
const convertCelsiusToFahrenheitInConciseSyntax = 
  (temperature) => (9 / 5) * temperature + 32;

temperatureInFahrenheit = convertCelsiusToFahrenheitInConciseSyntax(90);
console.log('Hasil konversi:', temperatureInFahrenheit);

// Parameter

function convertCelsiusToFahrenheit(temperature = 50) {
    const temperatureInFahrenheit = 9 / 5 * temperature + 32;
  
    console.log('Hasil konversi:', temperatureInFahrenheit);
  }
  
  // Menggunakan default value
convertCelsiusToFahrenheit(); // output: Hasil konversi: 122
  
  // Menggantikan default value
convertCelsiusToFahrenheit(90); // output: Hasil konversi: 194

// Return Value

function sumNumbers(a, b) {
    const result = a + b;
    return result;
  }
  
  const result = sumNumbers(2, 4);
  console.log('2 + 4:', result);
  
  /* Output:
  2 + 4: 6
  */


  