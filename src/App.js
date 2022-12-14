import React, { useEffect, useState } from "react";
import "./App.css";
import SearchComponent from "./Components/SearchComponent";
import WeatherCard from "./Components/WeatherCard";

function App() {
  const [city, setCity] = useState("Chennai");
  const [tempInfo, setTempInfo] = useState({});
  const getWeatherInfoProp = (city) => {
    setCity((prev) => {
      return city;
    });
  };
  const getWeatherInfo = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const weatherData = {
        weatherType: data.weather[0].main,
        weatherDescription: data.weather[0].description,
        temp: data.main.temp,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        feels_like: data.main.feels_like,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        wind: data.wind.speed,
        visibility: data.visibility,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        country: data.sys.country,
        city: data.name,
      };
      setTempInfo(weatherData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, [city]);
  return (
    <div className="container m-5 d-flex align-items-center justify-content-center flex-column">
      <WeatherCard getWeatherInfoProp={getWeatherInfoProp} {...tempInfo} />
    </div>
  );
}

export default App;
