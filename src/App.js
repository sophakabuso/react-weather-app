// App.js (Main component that holds the application)
import React, { useState } from 'react';
import WeatherService from './components/WeatherService';
import WeatherInfo from './components/WeatherInfo';
import styles from './App.module.css';
import earthpic from './assets/images/earthpic.png';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [isMetric, setIsMetric] = useState(true);

  const handleWeatherData = (data) => {
    // Function to handle the weather data received from the WeatherService component
    setWeatherData(data);
  };

  const toggleUnit = () => {
    // Function to toggle the unit between metric and imperial
    setIsMetric((prev) => !prev);
  };

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={earthpic} alt="Weather App Logo" className={styles.logo} />
        <h1>Weather Status</h1>
      </div>
      {/* WeatherService component responsible for fetching and displaying weather data */}
      <WeatherService onWeatherData={handleWeatherData} />
      {/* WeatherInfo component to display weather information */}
      {weatherData && (
        <WeatherInfo
          weatherData={weatherData}
          isMetric={isMetric}
          toggleUnit={toggleUnit}
        />
      )}
    </div>
  );
};

export default App;

