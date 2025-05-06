const apiKey="2731493f7e611f98f8e747537168173c";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weatherImg=document.querySelector(".weather img");


async function checkWeather(city){
    const response= await fetch(apiUrl+city+`&appid=${apiKey}`);
    let data =await response.json();
    console.log(data);

    document.querySelector(".temp").innerText=Math.round(data.main.temp)+"°c";
    document.querySelector(".city").innerText=data.name;
    document.querySelector(".humidity").innerTex=data.main.humidity;
    document.querySelector(".wind").innerText=Math.round(data.wind.speed)+" Km/hr";
    if (data.weather[0].main=="Clouds"){
        weatherImg.src="http://127.0.0.1:5500/project/Weather%20App/clouds.png";

    } else if (data.weather[0].main=="Clear"){
        weatherImg.src="http://127.0.0.1:5500/project/Weather%20App/clear.png";

    }else if (data.weather[0].main=="Drizzle"){
        weatherImg.src="http://127.0.0.1:5500/project/Weather%20App/drizzle.png";

    }else if (data.weather[0].main=="Mist"){
        weatherImg.src="http://127.0.0.1:5500/project/Weather%20App/mist.png";

    }else {
        weatherImg.src="http://127.0.0.1:5500/project/Weather%20App/rain.png";
    }
}

searchbtn.addEventListener("click",()=>{
    checkWeather(searchbox.value);
})






// async function demo() {
//     const response= await fetch(apiUrl+`&appid=${apiKey}`);
//     let data =await response.json();
//     console.log(data);
//     console.log(data.weather[0].main);
    
// }
