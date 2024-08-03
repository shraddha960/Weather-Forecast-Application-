import React from 'react';
import '../App.css'; 
import { useSelector } from 'react-redux';

const Forecast = () => {
    const forecast = useSelector((state) => state.weather.forecast);
  
    if (!forecast || !forecast.forecastday || forecast.forecastday.length === 0) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className="weather-container">
        <h2>Forecast</h2>
        <table className="weather-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Condition</th>
              <th>Temperature</th>
            </tr>
          </thead>
          <tbody>
            {forecast.forecastday.map((day) => (
              <tr key={day.date}>
                <td>{day.date}</td>
                <td>{day.day.condition.text}</td>
                <td>{day.day.avgtemp_c}°C</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  

export default Forecast;
