import React from 'react';

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) return <div>Data will be displayed here once entered</div>;

  // url for weather icons
  const iconUrl = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

  return (
    <div>
      <h2>{weatherData.name}</h2>
      <img src={iconUrl} alt="Weather Icon" />
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Weather: {weatherData.weather[0].main}</p>
      {/* Add more weather details as needed */}
    </div>
  );
};

export default WeatherDisplay;