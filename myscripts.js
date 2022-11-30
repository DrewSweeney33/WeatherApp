function getCity()
{
    city = document.getElementById("searchBoxInput").value;
    return city;
}

//APIKEY: 76f0e5a362aa73602dc0d38ecbda4216

async function getWeather ()
{
    let city = await getCity();
    console.log(city);

    apiKey = "76f0e5a362aa73602dc0d38ecbda4216"

    response = await fetch 
    ("https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=metric&appid=" +
    this.apiKey)
    console.log(response);

    data = await response.json();
    //console.log(data);

    const description = data.weather[0].description;
    console.log("Descripton: " + description);
    const temp = data.main.temp;
    console.log("Temp: " + temp);
    const windSpeed = data.wind.speed;
    console.log("Wind Speed: " + windSpeed);
    const tempMin = data.main.temp_min;
    console.log("Min temp: " + tempMin);
    const tempMax = data.main.temp_max;
    console.log("Max temp: " + tempMax);
    const icon = data.weather[0].icon;
    
    //document.getElementById("1").innerHTML = description;
    //document.getElementById("2").innerHTML = temp;
    //document.getElementById("3").innerHTML = windSpeed;
    //document.getElementById("4").innerHTML = tempMin;
    //document.getElementById("5").innerHTML = tempMax;
    //document.getElementById("6").innerHTML = icon;  
}

