import React, { useEffect, useState } from "react";

const SearchComponent = ({ getWeatherInfoProp }) => {
  const [cityName, setCityName] = useState("");
  const nameHandler = (event) => {
    setCityName(event.target.value);
  };

  const clickHandler = () => {
    const city = cityName;
    if (city.trim() !== "") {
      getWeatherInfoProp(city);
    }
    setCityName("");
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter the City Name"
        aria-label="City name"
        aria-describedby="city-button"
        onChange={nameHandler}
        value={cityName}
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="city-button"
        onClick={clickHandler}
      >
        Search
      </button>
    </div>
  );
};

export default SearchComponent;
