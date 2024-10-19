//placeholder

const currentTemp = document.querySelector('#current-temp');

const weatherIcon = document.querySelector('#weather-icon');

const captionDesc = document.querySelector('figcaption');

const myKey = "0c63d582f7628117ae63a49299dfbd53";
const latitude = 49.74902187246025;
const longitude = 6.633769895206869;

const url = `//api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${myKey}&units=imperial`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();