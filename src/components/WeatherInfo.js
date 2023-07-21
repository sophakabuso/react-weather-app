import React from 'react';
import styles from './WeatherInfo.module.css';

const WeatherInfo = ({ weatherData, isMetric, toggleUnit }) => {
  const { name, weather, main, dt, rain, clouds } = weatherData;
  const img = weather?.[0]?.icon ? `https://openweathermap.org/img/wn/${weather[0].icon}.png` : null;

  const formattedDateTime = new Date(dt * 1000).toLocaleString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  });

  const rainChances = rain?.['1h'] ? `${rain['1h']}%` : 'N/A';
  const humidity = main.humidity;
  const cloudCover = clouds?.all ? `${clouds.all}%` : 'N/A';

  const temperatureUnit = isMetric ? '°C' : '°F';
  const windSpeedUnit = isMetric ? 'm/s' : 'mph';

  const convertTemperature = (temp) => {
    return isMetric ? temp : (temp * 9) / 5 + 32;
  };

  const convertWindSpeed = (speed) => {
    return isMetric ? speed : speed * 2.237;
  };

  return (
    <div className={styles.weatherInfo}>
      <h2>{name}</h2>
      {img && <img className={styles.weatherIcon} src={img} alt="Weather Icon" />}
      <div className={styles.weatherConverterContainer}>
        <div className={styles.unitButtons}>
          <button
            className={`${styles.weatherConverterButton} ${isMetric ? styles.active : ''}`}
            onClick={toggleUnit} // Use the toggleUnit function directly
          >
            Metric
          </button>
          <button
            className={`${styles.weatherConverterButton} ${!isMetric ? styles.active : ''}`}
            onClick={toggleUnit} // Use the toggleUnit function directly
          >
            Imperial
          </button>
        </div>
        <p className={styles.weatherConverterInfo}>
          Temperature: {convertTemperature(main.temp)} {temperatureUnit}
        </p>
        <p className={styles.weatherConverterInfo}>
          Wind Speed: {convertWindSpeed(weatherData.wind.speed)} {windSpeedUnit}
        </p>
      </div>
      <p className={styles.time}>Time: {formattedDateTime}</p>
      <p>Cloud Cover: {cloudCover}</p>
      <p>Humidity: {humidity}%</p>
      <p>Rain: {rainChances}</p>
      <p>Cloudiness: {weather?.[0]?.description || 'N/A'}</p>
    </div>
  );
};

export default WeatherInfo;
