import React from 'react';
import styled from 'styled-components/native';

const WeatherContainer = styled.View`
  background-color: #e6f2ff;
  padding: 15px;
  border-radius: 10px;
  margin-top: 15px;
`;

const WeatherText = styled.Text`
  font-size: 16px;
  color: #333;
`;

const TemperatureText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #0066cc;
`;

export default function WeatherModule() {
  // 这里应该集成实际的天气 API
  // 现在我们使用模拟数据
  const weatherData = {
    temperature: 22,
    condition: 'Sunny',
  };

  return (
    <WeatherContainer>
      <WeatherText>Today's Weather</WeatherText>
        <TemperatureText>{weatherData.temperature}°C</TemperatureText>
        <WeatherText>{weatherData.condition}</WeatherText>
    </WeatherContainer>
  );
}