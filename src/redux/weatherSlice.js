import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchWeatherData = createAsyncThunk(
  'weather/fetchWeatherData',
  async (location) => {
    const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=66ed07218ead46e98da71033240308&q=${location}&days=1&aqi=no&alerts=no`);
    return response.data;
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    currentWeather: null,
    forecast: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentWeather = action.payload;
        state.forecast = action.payload.forecast;
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default weatherSlice.reducer;
