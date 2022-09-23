function celsiusToFahrenheit ( celsius) {
    let calcFahrenheit = ((celsius / 5)*9)+32;
    console.log( celsius + ' degrees celsius are ' + calcFahrenheit + ' degress fahrenheit.')
    return calcFahrenheit;
}

let celsius1 = celsiusToFahrenheit (30);

function fahrenheitToCelsius ( fahrenheit ) {
    let calcCelsius =  ((fahrenheit - 32) * 5) / 9;
    console.log( fahrenheit + ' degress fahrenheit are ' + calcCelsius + ' degress celsius')
}

let fahrenheit1 = fahrenheitToCelsius (110);