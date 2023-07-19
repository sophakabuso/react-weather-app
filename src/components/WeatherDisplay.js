import React from 'react';
import styles from './WeatherDisplay.module.css'; // Import CSS module

const WeatherDisplay = ({ weatherData }) => {
  return (
    <div className={styles.weatherDisplay}> {/* Apply CSS module class */}
      <h2>{weatherData.name}</h2>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Weather Conditions: {weatherData.weather[0].description}</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherDisplay;
