import React from 'react';
import { useSelector } from 'react-redux';
import '../App.css'; 

const CurrentWeather = () => {
  const weather = useSelector((state) => state.weather.currentWeather);

  if (!weather || !weather.current) {
    return <div>Loading...</div>;
  }

  return (
    <div className="weather-container">
    <h2>{weather.location.name}</h2>
    <table className="weather-table">
      <thead>
        <tr>
          <th>Condition</th>
          <th>Temperature</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{weather.current.condition.text}</td>
          <td>{weather.current.temp_c}°C</td>
        </tr>
      </tbody>
    </table>
  </div>
  );
};

export default CurrentWeather;
