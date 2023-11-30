import axios from 'axios';

const API_KEY = '9e908c1b80b497042e5f15d54b098339'; // api key from openweathermap
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async (query) => {
  const { data } = await axios.get(BASE_URL, {
    params: {
      q: query,
      units: 'metric',
      APPID: API_KEY,
    },
  });
  return data;
};