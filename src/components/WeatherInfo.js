import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHigh, faWind, faCloudRain, faCloud, faTint } from '@fortawesome/free-solid-svg-icons';
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
      <div className={styles.weatherDetails}>
        <div className={`${styles.iconInfo} ${styles.temperatureIcon}`}>
          <FontAwesomeIcon
            icon={faTemperatureHigh}
            className={styles.weatherIcon}
          />
          <p className={styles.weatherInfoText}>
            Temperature: {convertTemperature(main.temp).toFixed(1)} {temperatureUnit}
          </p>
        </div>
        <div className={`${styles.iconInfo} ${styles.windIcon}`}>
          <FontAwesomeIcon
            icon={faWind}
            className={styles.weatherIcon}
          />
          <p className={styles.weatherInfoText}>
            Wind Speed: {convertWindSpeed(weatherData.wind.speed).toFixed(1)} {windSpeedUnit}
          </p>
        </div>
        <div className={`${styles.iconInfo} ${styles.rainIcon}`}>
          <FontAwesomeIcon
            icon={faCloudRain}
            className={styles.weatherIcon}
          />
          <p className={styles.weatherInfoText}>Rain: {rainChances}</p>
        </div>
        <div className={`${styles.iconInfo} ${styles.cloudIcon}`}>
          <FontAwesomeIcon
            icon={faCloud}
            className={styles.weatherIcon}
          />
          <p className={styles.weatherInfoText}>Cloud Cover: {cloudCover}</p>
        </div>
        <div className={`${styles.iconInfo} ${styles.humidityIcon}`}>
          <FontAwesomeIcon
            icon={faTint}
            className={styles.weatherIcon}
          />
          <p className={styles.weatherInfoText}>Humidity: {humidity}%</p>
        </div>
      </div>
      <p className={styles.time}>Time: {formattedDateTime}</p>
      <div className={styles.toggleButton}>
        <button onClick={toggleUnit}>
          {isMetric ? 'Switch to Imperial' : 'Switch to Metric'}
        </button>
      </div>
    </div>
  );
};

export default WeatherInfo;
