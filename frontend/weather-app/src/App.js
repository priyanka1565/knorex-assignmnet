import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DropdownSelector from './components/DropdownSelector';
import WeatherDisplay from './components/WeatherDisplay';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

const App = () => {
  const cities = ['Ho Chi Minh', 'Singapore', 'Kuala Lumpur', 'Tokyo', 'Athens'];
  const [selectedCity, setSelectedCity] = useState(
    localStorage.getItem('selectedCity') || ''
  );
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (selectedCity) {
      localStorage.setItem('selectedCity', selectedCity);
      fetchWeatherData(selectedCity);
    }
  }, [selectedCity]);

  const fetchWeatherData = async (city) => {
    try {
      const API_KEY = '3c7505e12f85205dbd9d9671b74536b8';
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
      );

      const current = response.data.list[0];
      const forecast = response.data.list.slice(1, 4).map((item) => ({
        temp: item.main.temp,
        description: item.weather[0].description,
        icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`,
      }));

      setWeatherData({
        current: {
          temp: current.main.temp,
          description: current.weather[0].description,
          icon: `https://openweathermap.org/img/wn/${current.weather[0].icon}.png`,
        },
        forecast,
      });
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <Container className="text-center">
      <h1>🌈 Stylish Weather App</h1>
      <Row className="justify-content-center mt-4">
        <Col md={6}>
          <DropdownSelector cities={cities} onCityChange={setSelectedCity} />
        </Col>
      </Row>
      <WeatherDisplay weatherData={weatherData} />
    </Container>
  );
};

export default App;
