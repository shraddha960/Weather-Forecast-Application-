import React from 'react';
import SearchInput from './SearchInput';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import '../App.css'; 

const WeatherApp = () => {
    return (
      <div className="weather-container">
        <SearchInput />
        <CurrentWeather />
        <Forecast />
      </div>
    );
  };

export default WeatherApp;
