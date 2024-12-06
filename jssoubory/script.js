function convertAndChangeBackground() {
    const celsiusInput = document.getElementById('celsius');
    const celsius = parseFloat(celsiusInput.value);
    const resultElement = document.getElementById('result');

    if (isNaN(celsius)) {
        resultElement.innerText = 'Zadejte platné číslo.';
        return;
    }

    const fahrenheit = (celsius * 9 / 5) + 32;
    resultElement.innerText = `${celsius} °C = ${fahrenheit.toFixed(2)} °F`;

    const body = document.body;

    // Změna pozadí podle teploty
    if (celsius < 0) {
        body.style.backgroundColor = '#ADD8E6'; // Světle modrá pro chladno
    } else if (celsius >= 0 && celsius <= 20) {
        body.style.backgroundColor = '#87CEEB'; // Nebeská modrá pro mírně chladné počasí
    } else {
        body.style.backgroundColor = '#FFD700'; // Zlatožlutá pro teplé počasí
    }
}
