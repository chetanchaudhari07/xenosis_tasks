


const  weatherData = {
    "weather": [
      {
        "name": "Nagpur",
        "days": [
          {
            "datetime": "2024-07-19",
            "datetimeEpoch": 1721327400,
            "tempmax": 89.5,
            "tempmin": 76.9,
            "temp": 83.3
          }
        ]
      },
      {
        "name": "Delhi",
        "days": [
          {
            "datetime": "2024-07-19",
            "datetimeEpoch": 1721327400,
            "tempmax": 95.0,
            "tempmin": 80.0,
            "temp": 87.5
          }
        ]
      },
      {
        "name": "Mumbai",
        "days": [
          {
            "datetime": "2024-07-19",
            "datetimeEpoch": 1721327400,
            "tempmax": 85.0,
            "tempmin": 77.0,
            "temp": 81.0
          }
        ]
      }
    ]
  }

localStorage.setItem("weatherData", JSON.stringify(weatherData));




async function getWeather(){


    const city = document.getElementById("nag").value;
   
    const weatherData = JSON.parse(localStorage.getItem("weatherData"));
    
        // const response = await fetch(url);
        // const data = await response.json();

        if(!weatherData){
            console.error("no weather data found in local storage")

            document.getElementById("temperature").innerText = "N/A";
            document.getElementById("weather").innerText = "N/A";
                 return;
        }


        const cityWeather = weatherData.weather.find(w=>w.name.toLowerCase()===city.toLowerCase());

        if(cityWeather){
            const weatherday = cityWeather.days[0];
            document.getElementById('temperature').innerText = weatherday.temp + "F";
            document.getElementById('weather').innerText = `Max: ${weatherday.tempmax} °F, Min: ${weatherday.tempmin} °F`;
            
            
        }else{
            document.getElementById('temperature').innerText = 'N/A';
        document.getElementById('weather').innerText = 'N/A';
        console.error('City not found');
        }

    
}

window.onload = getWeather;