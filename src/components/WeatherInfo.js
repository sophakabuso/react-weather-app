import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHigh, faWind, faCloudRain, faCloud, faTint } from '@fortawesome/free-solid-svg-icons';
import styles from './WeatherInfo.module.css';

const WeatherInfo = ({ weatherData, isMetric, toggleUnit }) => {
  const { name, weather, main, dt, rain, clouds } = weatherData;
  const img = weather?.[0]?.icon ? `https://openweathermap.org/img/wn/${weather[0].icon}.png` : null;

  // Format the date and time to be displayed in the UI
  const formattedDateTime = new Date(dt * 1000).toLocaleString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  });

  // Extract rain chances, humidity, and cloud cover from the weather data
  const rainChances = rain?.['1h'] ? `${rain['1h']}%` : 'N/A';
  const humidity = main.humidity;
  const cloudCover = clouds?.all ? `${clouds.all}%` : 'N/A';

  // Determine the temperature and wind speed units based on the selected unit system (metric or imperial)
  const temperatureUnit = isMetric ? '°C' : '°F';
  const windSpeedUnit = isMetric ? 'm/s' : 'mph';

  // Function to convert temperature between Celsius and Fahrenheit
  const convertTemperature = (temp) => {
    return isMetric ? temp : (temp * 9) / 5 + 32;
  };

  // Function to convert wind speed between meters per second and miles per hour
  const convertWindSpeed = (speed) => {
    return isMetric ? speed : speed * 2.237;
  };

  return (
    <div className={styles.weatherInfo}>
      {/* Display the city name */}
      <h2>{name}</h2>
      {/* Display weather icon if available */}
      {img && <img className={styles.weatherIcon} src={img} alt="Weather Icon" />}
      <div className={styles.weatherDetails}>
        {/* Display temperature with corresponding icon */}
        <div className={`${styles.iconInfo} ${styles.temperatureIcon}`}>
          <FontAwesomeIcon
            icon={faTemperatureHigh}
            className={styles.weatherIcon}
          />
          <p className={styles.weatherInfoText}>
            Temperature: {convertTemperature(main.temp).toFixed(1)} {temperatureUnit}
          </p>
        </div>
        {/* Display wind speed with corresponding icon */}
        <div className={`${styles.iconInfo} ${styles.windIcon}`}>
          <FontAwesomeIcon
            icon={faWind}
            className={styles.weatherIcon}
          />
          <p className={styles.weatherInfoText}>
            Wind Speed: {convertWindSpeed(weatherData.wind.speed).toFixed(1)} {windSpeedUnit}
          </p>
        </div>
        {/* Display rain chances with corresponding icon */}
        <div className={`${styles.iconInfo} ${styles.rainIcon}`}>
          <FontAwesomeIcon
            icon={faCloudRain}
            className={styles.weatherIcon}
          />
          <p className={styles.weatherInfoText}>Rain: {rainChances}</p>
        </div>
        {/* Display cloud cover percentage with corresponding icon */}
        <div className={`${styles.iconInfo} ${styles.cloudIcon}`}>
          <FontAwesomeIcon
            icon={faCloud}
            className={styles.weatherIcon}
          />
          <p className={styles.weatherInfoText}>Cloud Cover: {cloudCover}</p>
        </div>
        {/* Display humidity percentage with corresponding icon */}
        <div className={`${styles.iconInfo} ${styles.humidityIcon}`}>
          <FontAwesomeIcon
            icon={faTint}
            className={styles.weatherIcon}
          />
          <p className={styles.weatherInfoText}>Humidity: {humidity}%</p>
        </div>
      </div>
      {/* Display the date and time of the weather data */}
      <p className={styles.time}>Time: {formattedDateTime}</p>
      {/* Button to toggle between metric and imperial units */}
      <div className={styles.toggleButton}>
        <button onClick={toggleUnit}>
          {isMetric ? 'Switch to Imperial' : 'Switch to Metric'}
        </button>
      </div>
    </div>
  );
};

export default WeatherInfo;
