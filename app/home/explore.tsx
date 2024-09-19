import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, FlatList, ScrollView } from 'react-native';
import ScreenLayout from 'src/components/ScreenLayout';

const Content = styled.View`
    padding: 20px;
`;

const TopSection = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

const MonthText = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: ${(p) => p.theme.white};
    text-align: center;
`;

const NavButton = styled.Text`
    font-size: 16px;
    color: ${(p) => p.theme.white};
`;

const DatePicker = styled.View`
    margin-bottom: 20px;
`;

const DateRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const DateCard = styled.View`
    background-color: ${(p) => p.theme.gray434343};
    padding: 10px;
    border-radius: 10px;
    align-items: center;
    width: 40px;
    height: 60px;
    justify-content: center;
    margin-right: 5px;
`;

const DateCardSelected = styled(DateCard)`
    background-color: ${(p) => p.theme.white};
`;

const DateText = styled.Text`
    color: ${(p) => p.theme.white};
    font-size: 16px;
`;

const DayText = styled.Text`
    color: ${(p) => p.theme.white};
    font-size: 12px;
`;

const Schedule = styled.View`
    margin-top: 20px;
`;

const TaskCard = styled.View<{ color: string }>`
    background-color: ${(p) => p.color};
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 10px;
`;

const TaskText = styled.Text`
    color: ${(p) => p.theme.white};
    margin-bottom: 5px;
`;

const S = {
  Content,
  TopSection,
  MonthText,
  NavButton,
  DatePicker,
  DateRow,
  DateCard,
  DateCardSelected,
  DateText,
  DayText,
  Schedule,
  TaskCard,
  TaskText,
};

// Mock task data
const taskData = [
  { id: '1', title: 'Bore Inspection', date: '2024-04-05', location: '77 Cow Road, Dairytown', color: '#EF4444' },
  { id: '2', title: 'Dairy Discharge Monitoring', date: '2024-04-05', location: '592 Ohauiti Road, Ohauiti 3171', color: '#3B82F6' },
  { id: '3', title: 'Noxious Weed Control', date: '2024-04-05', location: '', color: '#EF4444' },
];

interface Task {
  id: string;
  title: string;
  date: string;
  location?: string;
  color: string;
}

export default function ExploreScreen() {
  const [currentMonth, setCurrentMonth] = useState(new Date(2024, 8, 1)); // September 2024
  const [selectedDate, setSelectedDate] = useState(new Date(2024, 8, 1)); // First day of September 2024
  const [tasks] = useState<Task[]>(taskData);

  const handleMonthChange = (direction: 'prev' | 'next') => {
    setCurrentMonth(prevMonth => {
      const newMonth = new Date(prevMonth);
      newMonth.setMonth(prevMonth.getMonth() + (direction === 'next' ? 1 : -1));
      return newMonth;
    });
  };

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getMonthDates = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const dates = [];

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      dates.push(date);
    }

    return dates;
  };

  useEffect(() => {
    // Update selected date when month changes
    setSelectedDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1));
  }, [currentMonth]);

  const handleTaskPress = (taskId: string) => {
    console.log(`Task ${taskId} pressed`);
    // Add navigation logic to task detail page here
  };

  const renderTaskItem = ({ item }: { item: Task }) => (
    <TouchableOpacity onPress={() => handleTaskPress(item.id)}>
      <S.TaskCard color={item.color}>
        <S.TaskText>{item.title}</S.TaskText>
        <S.TaskText>{item.date}</S.TaskText>
        {item.location && <S.TaskText>{item.location}</S.TaskText>}
      </S.TaskCard>
    </TouchableOpacity>
  );

  const renderDateCard = (date: Date) => {
    const isSelected = date.toDateString() === selectedDate.toDateString();
    const CardComponent = isSelected ? S.DateCardSelected : S.DateCard;
    return (
      <TouchableOpacity key={date.toISOString()} onPress={() => setSelectedDate(date)}>
        <CardComponent>
          <S.DateText style={isSelected ? {color: 'black'} : {}}>{date.getDate()}</S.DateText>
          <S.DayText style={isSelected ? {color: 'black'} : {}}>{date.toLocaleString('en-US', { weekday: 'short' })}</S.DayText>
        </CardComponent>
      </TouchableOpacity>
    );
  };

  return (
    <ScreenLayout testID="explore-screen-layout">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <S.Content testID="explore-screen-content">
          <S.TopSection>
            <TouchableOpacity onPress={() => handleMonthChange('prev')}>
              <S.NavButton>{'< '}{new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1).toLocaleString('en-US', { month: 'short' })}</S.NavButton>
            </TouchableOpacity>
            <S.MonthText>{currentMonth.toLocaleString('en-US', { year: 'numeric', month: 'long' })}</S.MonthText>
            <TouchableOpacity onPress={() => handleMonthChange('next')}>
              <S.NavButton>{new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1).toLocaleString('en-US', { month: 'short' })}{' >'}</S.NavButton>
            </TouchableOpacity>
          </S.TopSection>

          <S.DatePicker>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {getMonthDates().map(renderDateCard)}
            </ScrollView>
          </S.DatePicker>

          <S.Schedule>
            <FlatList
              data={tasks}
              renderItem={renderTaskItem}
              keyExtractor={item => item.id}
            />
          </S.Schedule>
        </S.Content>
      </ScrollView>
    </ScreenLayout>
  );
}