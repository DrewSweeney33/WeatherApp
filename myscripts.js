//APIKEY: 76f0e5a362aa73602dc0d38ecbda4216

async function getWeather (city)
{
    apiKey = "76f0e5a362aa73602dc0d38ecbda4216"
    response = await fetch 
    ("https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=metric&appid=" +
    this.apiKey)

    data = await response.json();
    //console.log(data);

    description = data.weather[0].description;
    //console.log(description);
    temp = data.main.temp;
    //console.log(temp);
    windSpeed = data.wind.speed;
    //console.log(windSpeed);
    humidity = data.main.humidity;
    //console.log(humidity);
    tempFeelsLike = data.main.feels_like;
    //console.log(tempFeelsLike);


    document.getElementById("1").innerHTML = description
    document.getElementById("2").innerHTML = temp
    document.getElementById("3").innerHTML = windSpeed
    document.getElementById("4").innerHTML = humidity
    document.getElementById("5").innerHTML = tempFeelsLike
}