// function to convert farehnheit to celsius
function fToC(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
// Driver code
let fahrenheit = 100;
console.log("Temperature in celsius is: " + fToC(fahrenheit));