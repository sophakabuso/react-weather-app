import React, { useState, useEffect, useCallback } from 'react';
import WeatherInfo from './WeatherInfo';
import styles from './WeatherService.module.css';
import { fetchWeatherData } from './api';

const WeatherService = ({ onWeatherData }) => {
  // State variables to manage component data and behavior
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isMetric, setIsMetric] = useState(true);

  // Fetch weather data from the API based on the selected city and unit type (metric or imperial)
  const fetchData = useCallback(async () => {
    // Return early if the city is not provided
    if (!city) return;

    // Set loading state to true and clear any previous errors
    setLoading(true);
    setError(null);

    try {
      // Fetch weather data using the utility function from 'api.js'
      const data = await fetchWeatherData(city, isMetric);
      // Set the weather data in the state
      setWeather(data);
    } catch (error) {
      // If there's an error during the API call, set the error state and log the error
      setError('Error fetching weather data. Please try again.');
      console.error(error);
    } finally {
      // Set loading state back to false once the API call is completed
      setLoading(false);
    }
  }, [city, isMetric]);

  // Call the 'fetchData' function when the component mounts or when 'fetchData' function changes (dependency array)
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Function to toggle between metric and imperial units
  const toggleUnit = () => {
    setIsMetric((prev) => !prev);
  };

  return (
    <div className={styles.weatherService}>
      <form onSubmit={(e) => e.preventDefault()}>
        {/* Input field to enter the city name */}
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          required
        />
        {/* Button to initiate the weather data fetch */}
        <button onClick={fetchData}>Search</button>
      </form>
      {/* Display "Loading..." message when data is being fetched */}
      {loading && <p>Loading...</p>}
      {/* Display error message if there's an error during the API call */}
      {error && <p>{error}</p>}
      {/* Display weather information when data is available */}
      {weather && (
        <WeatherInfo
          weatherData={weather}
          isMetric={isMetric}
          toggleUnit={toggleUnit}
        />
      )}
    </div>
  );
};

export default WeatherService;
