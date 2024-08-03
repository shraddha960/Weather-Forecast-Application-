import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeatherData } from '../redux/weatherSlice';
import '../App.css'; 

const SearchInput = () => {
  const [location, setLocation] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(fetchWeatherData(location));
  };

  return (
    <div className="weather-container">
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter location"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchInput;
