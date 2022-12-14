import React, { useEffect, useState } from "react";
import SearchComponent from "./SearchComponent";

const WeatherCard = ({
  getWeatherInfoProp,
  weatherType,
  weatherDescription,
  temp,
  temp_min,
  temp_max,
  feels_like,
  humidity,
  pressure,
  wind,
  visibility,
  sunrise,
  sunset,
  country,
  city,
}) => {
  const [weatherState, setWeatherState] = useState("");

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  let dateSunset = new Date(sunset * 1000);
  let sunsetTime = `${dateSunset.getHours() - 12}:${dateSunset.getMinutes()}`;
  let dateSunrise = new Date(sunrise * 1000);
  let sunriseTime = `${dateSunrise.getHours()}:${dateSunrise.getMinutes()}`;

  useEffect(() => {
    if (weatherType) {
      switch (weatherType) {
        case "Rain":
          setWeatherState("wi-day-rain");
          break;
        case "Haze":
          setWeatherState("wi-day-haze");
          break;
        case "Mist":
          setWeatherState("wi-day-fog");
          break;
        case "Clouds":
          setWeatherState("wi-day-cloudy");
          break;
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;
        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }
  }, [weatherType]);

  return (
    <>
      <div className="weather-box d-flex justify-content-center flex-column">
        <div className="text-center">
          <div className="dateTime">
            {new Date().toLocaleDateString("en-US", options)}
          </div>
          <div className="place">
            {city}, {country}
          </div>
        </div>
        <div className="search-box">
          <SearchComponent getWeatherInfoProp={getWeatherInfoProp} />
        </div>
        <div className="major-widget d-flex align-items-center flex-row justify-content-between">
          <div>
            <div>
              {temp}
              <i className="wi wi-celsius"></i>
            </div>
            <div style={{ fontSize: "10px" }}>
              {temp_min} - {temp_max}
            </div>
          </div>
          <div>
            <i className={`wi ${weatherState}`}></i>
            <div style={{ fontSize: "10px" }} className="weatherCondition">
              {weatherDescription}
            </div>
          </div>
        </div>
        <div>
          <div className="otherTemperatureDetails d-flex justify-content-center align-items-center flex-row ">
            <div>
              <div className="sunrise weather-cube">
                <i
                  style={{
                    color: "#E67451",
                  }}
                  className={"wi wi-sunrise widget-icon"}
                ></i>
                <span className="">Sunrise</span>
                <span className="">{sunriseTime} AM</span>
              </div>
              <div className="sunset weather-cube">
                <i
                  style={{ color: "#FA5F55" }}
                  className={"wi wi-sunset widget-icon"}
                ></i>
                <span className="">Sunset</span>
                <span className="">{sunsetTime} PM</span>
              </div>
            </div>
            <div>
              <div className="humidity weather-cube">
                <i
                  style={{ color: "#dbe9f4" }}
                  className={"wi wi-humidity widget-icon"}
                ></i>
                <span className="">Humidity</span>
                <span className="">{humidity}%</span>
              </div>
              <div className="visibility weather-cube">
                <i
                  style={{ color: "#30D5C8" }}
                  className={"wi wi-alien widget-icon"}
                ></i>
                <span className="">Visibility</span>
                <span className="">{visibility}</span>
              </div>
            </div>
            <div>
              <div className="rain weather-cube">
                <i
                  style={{ color: "#83d7ee" }}
                  className={"wi wi-windy widget-icon"}
                ></i>
                <span className="">Pressure</span>
                <span className="">{pressure}</span>
              </div>
              <div className="wind-speed weather-cube">
                <i
                  style={{ color: "#cabec0" }}
                  className={"wi wi-day-windy widget-icon"}
                ></i>
                <span className="">Wind</span>
                <span className="">{wind} Km/h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
