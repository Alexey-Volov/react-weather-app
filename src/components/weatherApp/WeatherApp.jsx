import React, { useState } from "react";
import "./WeatherApp.scss"

import clear_icon from "../assets/clear.png"
import cloud_icon from "../assets/cloud.png"
import drizzle_icon from "../assets/drizzle.png"
import humidity_icon from "../assets/humidity.png"
import rain_icon from "../assets/rain.png"
import search_icon from "../assets/search.png"
import snow_icon from "../assets/snow.png"
import wind_icon from "../assets/wind.png"


const WeatherApp = () => {

    let api_key = "890a3330a20811df92a2e94cbe30651d"

    const [wicon, setWicon] = useState(cloud_icon)

    const search = async () => {

        const element = document.getElementsByClassName("cityInput")
        if(element[0].value === "") return console.log(false);
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`
        
        let response = await fetch(url);
        let data = await response.json()

        const humidity = document.getElementsByClassName("humidity-percent")
        const wind = document.getElementsByClassName("wind-rate")
        const temprature = document.getElementsByClassName("weather-temp")
        const location = document.getElementsByClassName("weather-location")
        
        humidity[0].innerHTML = data.main.humidity + " %";
        wind[0].innerHTML = Math.floor(data.wind.speed) + " km/h";
        temprature[0].innerHTML = Math.floor(data.main.temp) + "°С";
        location[0].innerHTML = data.name;

        switch(data.weather[0].icon) {
            case "01d" || "01n":
                setWicon(clear_icon);
                break;
            case "02d" || "02n":
                setWicon(cloud_icon);
                break;
            case "03d" || "03n":
                setWicon(drizzle_icon);
                break;
            case "04d" || "04n":
                setWicon(drizzle_icon);
                break;
            case "09d" || "09n":
                setWicon(rain_icon);
                break;
            case "10d" || "10n":
                setWicon(rain_icon);
                break;
            case "13d" || "13n":
                setWicon(snow_icon);
                break;
            default:
                setWicon(clear_icon)
            
        }
    }
    return ( 
        <div className="container">
            <h1 className="title">Weather Online</h1>
            <div className="top-bar">
                <input type="text" placeholder="search" className="cityInput" name="" id="" />
                <div className="search-icon" onClick={()=>{search()}}>
                    <img src={search_icon} alt="" />
                </div>
            
            </div>
            <div className="weather-image">
                <img src={wicon} alt="" />
            </div>
            <div className="weather-temp">24°С</div>
            <div className="weather-location">London</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percent">64%</div>
                        <div className="text">humidity</div>
                    </div>
                
                </div>
                <div className="element">
                    <img src={wind_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="wind-rate">18 km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                
                </div>
            </div>
        
        </div>
     );
}
 
export default WeatherApp;