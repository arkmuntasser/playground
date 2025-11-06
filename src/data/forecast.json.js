const longitude = -110.87;
const latitude = 32.25;

async function json(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}

const station = await json(`https://api.weather.gov/points/${latitude},${longitude}`)
const forecast = await json(station.properties.forecastHourly);

process.stdout.write(JSON.stringify(forecast));