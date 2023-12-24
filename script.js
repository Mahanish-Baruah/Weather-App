const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "fef95a1731msh6dd27fe4a0e199cp1e4b16jsn8e223e39c021",
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
};

const fetchWeather = async (city) => {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        city_name.innerHTML = city.charAt(0).toUpperCase() + city.slice(1)
        cloud_pct.innerHTML = result.cloud_pct;
        temp.innerHTML = result.temp;
        feels_like.innerHTML = result.feels_like;
        humidity.innerHTML = result.humidity;
        min_temp.innerHTML = result.min_temp;
        max_temp.innerHTML = result.max_temp;
        wind_speed.innerHTML = result.wind_speed;
        wind_degrees.innerHTML = result.wind_degrees;
        sunrise.innerHTML = result.sunrise;
        sunset.innerHTML = result.sunset;
    } catch (error) {
        console.error(error);
    }
};

submit.addEventListener("click", (e) => {
    e.preventDefault();
    fetchWeather(city.value);
});
