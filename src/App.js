import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import { fetchWeather } from './utils/api';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async (query) => {
    const data = await fetchWeather(query);
    setWeatherData(data);
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <WeatherDisplay weatherData={weatherData} />
    </div>
  );
};

export default App;