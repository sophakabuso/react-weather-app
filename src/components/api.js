

const fetchWeatherData = async (city, isMetric) => {
  const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${isMetric ? 'metric' : 'imperial'}`
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error response from API:', errorData);
      throw new Error('Error fetching weather data. Please try again.');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

export { fetchWeatherData };
