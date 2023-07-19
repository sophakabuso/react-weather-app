import React, { useState } from 'react';
import WeatherSearch from './components/WeatherSearch';
import WeatherDisplay from './components/WeatherDisplay';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const handleWeatherData = (data) => {
    setWeatherData(data);
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch onWeatherData={handleWeatherData} />
      {weatherData && <WeatherDisplay weatherData={weatherData} />}
    </div>
  );
}

export default App;
