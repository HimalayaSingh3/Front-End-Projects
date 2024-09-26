const temperature=document.getElementById("temp");
const place=document.getElementById("place");
const humidity=document.getElementById("humidity");
const wind=document.getElementById("wind");
const search=document.getElementById("locationInput");
const btn=document.querySelector("#getWeatherBtn");
const image=document.querySelector(".icon");

const apiKey="8b0e1404e3ab7dc4970c2a8dd4166272";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.getElementById("weatherResult").style.display="none"
    }
    else{
        var data = await response.json();

        place.innerHTML=data.name;
        temperature.innerHTML=Math.round(data.main.temp) + "°C";
        humidity.textContent=data.main.humidity + "%";
        wind.innerHTML=data.wind.speed + "km/h";
    
        console.log(data);
    
        if(data.weather[0].main=="Clouds"){
            image.src="images/clouds.png";
        }
        else if(data.weather[0].main=="Clear"){
            image.src="images/clear.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            image.src="images/drizzle.png";
        }
        else if(data.weather[0].main=="Mist"){
            image.src="images/mist.png";
        }
        else if(data.weather[0].main=="Rain"){
            image.src="images/rain.png";
        }
        else if(data.weather[0].main=="Snow"){
            image.src="images/snow.png";
        }

        document.getElementById("weatherResult").style.display="block";
        document.querySelector(".error").style.display="none";
    }
    

}

btn.addEventListener("click" ,()=>{
    checkWeather(search.value);
})