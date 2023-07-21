import React, { useState, useEffect, useCallback } from 'react';
import WeatherInfo from './WeatherInfo';
import styles from './WeatherService.module.css';

const WeatherService = ({ onWeatherData }) => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isMetric, setIsMetric] = useState(true); // Define isMetric state here
  const apiKey = '31a0db93dbf047c29a0cfc60ca42964a'; // Replace with your OpenWeatherMap API key

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );

      if (!response.ok) {
        throw new Error('Error fetching weather data. Please try again.');
      }

      const data = await response.json();
      setWeather(data);
    } catch (error) {
      setError('Error fetching weather data. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [apiKey, city]);

  useEffect(() => {
    if (city) {
      fetchData();
    }
  }, [city, fetchData]);

  const toggleUnit = () => {
    setIsMetric((prev) => !prev);
  };

  return (
    <div className={styles.weatherService}>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          required
        />
        <button onClick={fetchData}>Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {weather && (
        <WeatherInfo
          weatherData={weather}
          isMetric={isMetric}
          toggleUnit={toggleUnit} // Pass the toggleUnit function as a prop
        />
      )}
    </div>
  );
};

export default WeatherService;
