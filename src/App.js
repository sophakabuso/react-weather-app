// App.js
import React, { useState } from 'react';
import WeatherService from './components/WeatherService';
import WeatherInfo from './components/WeatherInfo';

import styles from './App.module.css';
import earthpic from './assets/images/earthpic.png';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [isMetric, setIsMetric] = useState(true);

  const handleWeatherData = (data) => {
    setWeatherData(data);
  };

  // Function to update the isMetric state
  const toggleUnit = () => {
    setIsMetric((prev) => !prev);
  };

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={earthpic} alt="Weather App Logo" className={styles.logo} />
        <h1>Weather Status</h1>
      </div>
      <WeatherService onWeatherData={handleWeatherData} />
      {weatherData && (
        <WeatherInfo
          weatherData={weatherData}
          isMetric={isMetric}
          toggleUnit={toggleUnit} // Pass the toggleUnit function as a prop
        />
      )}
    </div>
  );
};

export default App;
