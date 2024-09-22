import React, { useEffect, useState } from 'react'
import { TouchableOpacity, ScrollView, View } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import ScreenLayout from 'src/components/ScreenLayout';
import UserAvatar from 'src/assets/images/Avatar.png'
import WeatherModule from 'src/components/weatherModule';

// 定义应用的路由参数
type RootStackParamList = {
  Home: undefined;
  profile: undefined;
  // 添加其他路由...
};

// 定义导航属性的类型
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const DynamicCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000); // 每分钟更新一次

    return () => clearInterval(timer);
  }, []);

  const dayOfWeek = currentDate.toLocaleString('en-US', { weekday: 'long' });
  const month = currentDate.toLocaleString('en-US', { month: 'long' });
  const date = currentDate.getDate();
  const year = currentDate.getFullYear();

  return (
    <S.CalendarContainer>
      <S.DayText>{dayOfWeek}</S.DayText>
      <S.DateContainer>
        <S.DateNumber>{date}</S.DateNumber>
        <S.MonthYearContainer>
          <S.MonthText>{month}</S.MonthText>
          <S.YearText>{year}</S.YearText>
        </S.MonthYearContainer>
      </S.DateContainer>
    </S.CalendarContainer>
  );
};

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleAvatarPress = () => {
    navigation.navigate('profile');
  };

  return (
    <ScreenLayout testID="home-screen-layout">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <S.Content testID="home-screen-content">
          <S.TopSection>
            <View>
              <DynamicCalendar />
              <WeatherModule />
            </View>
            <S.UserSection>
              <TouchableOpacity onPress={handleAvatarPress}>
                <S.Avatar source={UserAvatar} />
              </TouchableOpacity>
              <S.GreetingText>Hi Duke.</S.GreetingText>
              <S.TaskText>5 Tasks are pending</S.TaskText>
            </S.UserSection>
          </S.TopSection>

          <S.MonthlyPreviewTitle>Monthly Preview</S.MonthlyPreviewTitle>
          <S.MonthlyPreview>
            <S.TaskCard1 color="#4C49ED">
              <S.TaskCardNumber>22</S.TaskCardNumber>
              <S.TaskCardText>Done</S.TaskCardText>
            </S.TaskCard1>
            <S.TaskCard2 color="#2D60FF">
              <S.TaskCardNumber>7</S.TaskCardNumber>
              <S.TaskCardText>In Progress</S.TaskCardText>
            </S.TaskCard2>
            <S.TaskCard3 color="#0A06F4">
              <S.TaskCardNumber>12</S.TaskCardNumber>
              <S.TaskCardText>Pending</S.TaskCardText>
            </S.TaskCard3>
            <S.TaskCard4 color="#60a5fa">
              <S.TaskCardNumber>14</S.TaskCardNumber>
              <S.TaskCardText>Waiting For Review</S.TaskCardText>
            </S.TaskCard4>
          </S.MonthlyPreview>
        </S.Content>
      </ScrollView>
    </ScreenLayout>
  );
}

const S = {
  CalendarContainer: styled.View`
    background-color: #f0f0f0;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 15px;
  `,
  DayText: styled.Text`
    font-size: 16px;
    color: #333;
    margin-bottom: 5px;
  `,
  DateContainer: styled.View`
    flex-direction: row;
    align-items: center;
  `,
  DateNumber: styled.Text`
    font-size: 40px;
    font-weight: bold;
    color: #000;
    margin-right: 10px;
  `,
  MonthYearContainer: styled.View`
    flex-direction: column;
  `,
  MonthText: styled.Text`
    font-size: 18px;
    color: #333;
  `,
  YearText: styled.Text`
    font-size: 14px;
    color: #666;
  `,
  Content: styled.View`
      padding: 20px;
      background-color: #fffefe;
  `,
  TopSection: styled.View`
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 20px;
  `,
  UserSection: styled.View`
    align-items: flex-end;
  `,
  TopLeftContent: styled.View`
      flex: 1;
  `,
  Avatar: styled.Image`
      width: 100px;
      height: 100px;
      border-radius: 20px;
  `,
  DateText: styled.Text`
      color: black;
      font-size: 14px;
      opacity: 0.7;
  `,
  DateBigText: styled.Text`
      color: black;
      font-size: 28px;
      font-weight: bold;
  `,
  GreetingText: styled.Text`
      color: black;
      font-size: 18px;
      margin-top: 10px;
  `,
  TaskText: styled.Text`
      font-size: 14px;
      color: black;
      opacity: 0.7;
      // margin-bottom: 30px;
  `,
  TaskTitle: styled.Text`
      color: black;
      font-size: 18px;
      font-weight: bold;
  `,
  TaskSubtitle: styled.Text`
      color: black;
      font-size: 14px;
      opacity: 0.8;
  `,
  TaskStatus: styled.Text`
      color: black;
      font-size: 12px;
      opacity: 0.8;
      position: absolute;
      right: 15px;
      top: 15px;
  `,
  MonthlyPreviewTitle: styled.Text`
      font-size: 24px;
      font-weight: bold;
      color: black;
      margin-bottom: 15px;
  `,
  MonthlyPreview: styled.View`
      position: relative;
      width: 100%;
      height: 320px; // 调整这个值以适应您的设计
  `,
  TaskCard1: styled(TouchableOpacity)<{ color: string }>`
      position: absolute;
      top: 0;
      left: 0;
      background-color: ${(p) => p.color};
      padding: 20px;
      border-radius: 20px;
      width: 48%;
      height: 48%;
      justify-content: space-between;
  `,
  TaskCard2: styled(TouchableOpacity)<{ color: string }>`
      position: absolute;
      top: 0;
      right: 0;
      background-color: ${(p) => p.color};
      padding: 20px;
      border-radius: 20px;
      width: 48%;
      height: 48%;
      justify-content: space-between;
  `,
  TaskCard3: styled(TouchableOpacity)<{ color: string }>`
      position: absolute;
      bottom: 0;
      right: 0;
      background-color: ${(p) => p.color};
      padding: 20px;
      border-radius: 20px;
      width: 48%;
      height: 48%;
      justify-content: space-between;
  `,
  TaskCard4: styled(TouchableOpacity)<{ color: string }>`
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: ${(p) => p.color};
      padding: 20px;
      border-radius: 20px;
      width: 48%;
      height: 48%;
      justify-content: space-between;
  `,
  TaskCardNumber: styled.Text`
    color: #FFFFFF;
    font-size: 36px;
    font-weight: bold;
  `,
  TaskCardText: styled.Text`
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 500;
  `,
};