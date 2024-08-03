import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchWeather = (location) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=66ed07218ead46e98da71033240308&q=${location}&days=1&aqi=no&alerts=no`);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (location) {
      fetchData();
    }
  }, [location]);

  return { data, loading, error };
};

export default useFetchWeather;
