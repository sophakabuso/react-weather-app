import React, { useState } from 'react';
import axios from 'axios';
import styles from './WeatherSearch.module.css'; // Import CSS module

const WeatherSearch = ({ onWeatherData }) => {
  const [city, setCity] = useState('');
  const [error, setError] = useState(null);

  const API_KEY = 'c30a38e4e6b32b0258d81fa6294913f6'; // Replace with your OpenWeatherMap API key

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      onWeatherData(response.data);
      setError(null);
    } catch (error) {
      onWeatherData(null);
      setError('Error fetching weather data. Please try again.');
    }
  };

  return (
    <div className={styles.weatherSearch}> {/* Apply CSS module class */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          required
        />
        <button type="submit">Search</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default WeatherSearch;
