Weather Status Web Application

The Weather Status Web Application is a user-friendly platform that allows users to check real-time weather information for any city around the world. This application provides a seamless user experience with features such as weather data retrieval, unit conversion (metric/imperial), and dynamic weather updates.
Features

    Weather Data Retrieval: Enter the name of a city and click the "Search" button to instantly retrieve up-to-date weather data for that location.

    Unit Conversion: Toggle between metric and imperial units to view temperature in Celsius or Fahrenheit and wind speed in meters per second or miles per hour.

    Real-time Updates: The Weather Service component fetches live weather data from an external API, ensuring that you receive the most current weather information.

    Error Handling: The application handles errors gracefully and provides clear error messages if any issues arise during data retrieval.

Technologies Used

    React: The front-end of the application is built using React, a powerful JavaScript library for creating interactive user interfaces.

    CSS Modules: CSS Modules are used for styling components, offering a scoped and maintainable approach to styling.

    External API: The app integrates with an external weather API (not included in this code) to retrieve real-time weather data.

    State Management: React's state management is employed to handle user input, weather data, loading states, and error messages.

    Component-Based Architecture: The application is organized into modular components (App, WeatherService, WeatherInfo) for improved code maintainability and reusability.

    Asynchronous Data Fetching: The WeatherService component utilizes asynchronous data fetching to retrieve weather data from the external API.

    Unit Conversion: Users can easily switch between metric and imperial units to customize their weather data view.

    Dynamic UI Updates: Weather data is dynamically updated in the user interface as users search for different cities and toggle between units.

Getting Started

To run the Weather Status Web Application locally on your machine, follow these steps:

    Clone this repository to your local machine.

    shell

git clone https://github.com/your-username/weather-app.git

Navigate to the project directory.

shell

cd weather-app

Install dependencies using npm or yarn.

shell

npm install

or

shell

yarn install

Start the development server.

shell

npm start

or

shell

    yarn start

    Open your web browser and go to http://localhost:3000 to access the Weather Status Web Application.

Contribution

Contributions to this project are welcome! If you have any issues to report or enhancements to propose, please feel free to submit pull requests.
