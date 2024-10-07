import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { View, Text, ActivityIndicator } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

const WeatherContainer = styled.View`
    background-color: #ffffff;
    padding: 15px;
    border-radius: 10px;
    margin-top: 15px;
`;

const CityContainer = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
`;

const CityText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #000933;
    margin-left: 5px;
`;

const WeatherText = styled.Text`
  font-size: 16px;
  font-weight: bold;  
  color: #000933;
`;

const TemperatureText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #3C1480;
`;

const WeatherInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

interface WeatherData {
  temperature: number;
  condition: string;
  city: string;
}

const getWeatherIcon = (condition: string) => {
  switch (condition.toLowerCase()) {
    case 'clear':
      return <FontAwesome5 name="sun" size={24} color="#FFD700" />;
    case 'rain':
      return <FontAwesome5 name="cloud-rain" size={24} color="#4169E1" />;
    case 'clouds':
      return <FontAwesome5 name="cloud" size={24} color="#708090" />;
    case 'snow':
      return <FontAwesome5 name="snowflake" size={24} color="#FFFFFF" />;
    default:
      return <FontAwesome5 name="cloud-sun" size={24} color="#87CEEB" />;
  }
};

export default function WeatherModule() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Hamilton,nz&units=metric&appid=c9dce10acf700eeec58217700ab7c59a`
      );
      const data = await response.json();

      if (response.ok) {
        setWeather({
          temperature: Math.round(data.main.temp),
          condition: data.weather[0].main,
          city: data.name,
        });
      } else {
        setError('Failed to fetch weather data');
      }
    } catch (err) {
      setError('An error occurred while fetching weather data');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <WeatherContainer>
        <ActivityIndicator size="small" color="#0000ff" />
      </WeatherContainer>
    );
  }

  if (error) {
    return (
      <WeatherContainer>
        <WeatherText>{error}</WeatherText>
      </WeatherContainer>
    );
  }

  return (
    <WeatherContainer>
      {weather && (
        <>
          <CityContainer>
            <Ionicons name="location-sharp" size={24} color="#0066cc" />
            <CityText>{weather.city}</CityText>
          </CityContainer>
          <TemperatureText>{weather.temperature}°C</TemperatureText>
          <WeatherInfoContainer>
            <WeatherText>{weather.condition}</WeatherText>
            {getWeatherIcon(weather.condition)}
          </WeatherInfoContainer>
        </>
      )}
    </WeatherContainer>
  );
}