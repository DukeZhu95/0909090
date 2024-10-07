import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Alert, Pressable, ScrollView } from 'react-native'
import ScreenLayout from 'src/components/ScreenLayout';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// 定义应用的路由参数
type RootStackParamList = {
  home: undefined;
  chat: undefined;
  // 添加其他路由...
};

type NavigationProp = StackNavigationProp<RootStackParamList>;

// Styled components
const Content = styled.View`
    padding: 20px;
    background-color: #E4D4FF;
    flex: 1;
`;

const TopSection = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

const MonthText = styled.Text`
    font-size: 28px;
    font-weight: bold;
    color: ${(p) => p.theme.black};
    text-align: center;
`;

const NavButton = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${(p) => p.theme.ELECTRIC_BLUE_PLUS3};
`;

const DatePicker = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
`;

const DateCard = styled.View<{ isSelected: boolean }>`
    background-color: ${(p) => p.isSelected ? p.theme.DATASCAPE_PLUS2 : 'white'};
    padding: 10px;
    border-radius: 20px;
    align-items: center;
    width: 50px;
    height: 70px;
    justify-content: center;
    // elevation: 2;
`;
styled(DateCard)`
    background-color: ${(p) => p.theme.DATASCAPE_MINUS3};
`
const DateText = styled.Text<{ isSelected: boolean }>`
    color: ${(p) => p.isSelected ? 'white' : p.theme.black};
    font-size: 24px;
    font-weight: bold;
`;

const DayText = styled.Text<{ isSelected: boolean }>`
    color: ${(p) => p.isSelected ? 'white' : p.theme.GRAY};
    font-size: 14px;
`;

// 时间轴
const TimelineContainer = styled.View`
    flex: 1;
    height: 500px; // 增加高度
    border: 1px solid red;
`;

const TimelineScrollView = styled.ScrollView`
  flex: 1;
`;

const TimelineContent = styled.View`
    flex-direction: row;
    width: 100%;
    min-height: 600px;
`;

const TimeColumn = styled.View`
  width: 60px;
`;

const TaskColumn = styled.View`
  flex: 1;
  position: relative;
`;
const TimeSlot = styled.Text`
    height: 60px;
    text-align: right;
    color: ${(p) => p.theme.GRAY};
    line-height: 60px;
    padding-right: 10px;
`;
const TaskItem = styled(Pressable)<{ top: number; height: number; color: string }>`
    position: absolute;
    left: 0;
    right: 0;
    background-color: ${(p) => p.color};
    border-radius: 5px;
    padding: 5px;
    top: ${(p) => p.top}px;
    height: ${(p) => p.height}px;
    z-index: 1;
`;

const TaskTitle = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 16px;
`;


const TaskDetails = styled.Text`
    color: white;
    font-size: 12px;
`;

// Update BackgroundGrid component:
const BackgroundGrid = () => (
  <>
    {Array.from({ length: 10 }, (_, i) => (
      <GridLine key={i} style={{ top: i * 60 }} />
    ))}
  </>
);

const GridLine = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  background-color: #BC93FF;
`;

// Interfaces
interface Task {
  id: string;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  location?: string;
  color: string;
}

// Mock data
const taskData: Task[] = [
  { id: '1', title: 'Bore Inspection', date: '2024-09-22', startTime: '09:00', endTime: '10:00', location: '77 Cow Road, Dairytown', color: '#9352FF' },
  { id: '2', title: 'Dairy Discharge Monitoring', date: '2024-09-22', startTime: '11:00', endTime: '12:00', location: '592 Ohauiti Road, Ohauiti 3171', color: '#9352FF' },
  { id: '3', title: 'Noxious Weed Control', date: '2024-09-22', startTime: '14:00', endTime: '15:00', location: '', color: '#9352FF' },
];

export default function ExploreScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [currentMonth, setCurrentMonth] = useState(new Date(2024, 8, 22)); // September 2024
  const [selectedDate, setSelectedDate] = useState(new Date(2024, 8, 22)); // September 22, 2024
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
    setSelectedDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1));
  }, [currentMonth]);

  // Update renderTimeSlots function:
  const renderTimeSlots = () => (
    <>
      {Array.from({ length: 10 }, (_, i) => (
        <TimeSlot key={i + 8}>{`${i + 8}:00`}</TimeSlot>
      ))}
    </>
  );

  const getMinutes = (time: string) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  // 在 renderTasks 函数中添加日期过滤
  const renderTasks = () => {
    const startHour = 8;
    const hourHeight = 60;

    const filteredTasks = tasks.filter(task => {
      const taskDate = new Date(task.date);
      const selectedDateStr = selectedDate.toISOString().split('T')[0];
      const taskDateStr = taskDate.toISOString().split('T')[0];
      return taskDateStr === selectedDateStr;
    });

    return filteredTasks.map(task => {
      const startMinutes = getMinutes(task.startTime) - startHour * 60;
      const endMinutes = getMinutes(task.endTime) - startHour * 60;

      const top = Math.floor(startMinutes / 60) * hourHeight;
      const height = Math.ceil((endMinutes - startMinutes) / 60) * hourHeight;

      return (
        <TaskItem
          key={task.id}
          top={top}
          height={height}
          color={task.color}
          onPress={() => handleTaskPress(task.id, task.title)}
        >
          <TaskTitle>{task.title}</TaskTitle>
          <TaskDetails>{`${task.startTime} - ${task.endTime}`}</TaskDetails>
          {task.location && <TaskDetails>{task.location}</TaskDetails>}
        </TaskItem>
      );
    });
  };

  const handleTaskPress = (taskId: string, title: string) => {
    console.log(`Task ${taskId} pressed`);
    if (title === 'Bore Inspection') {
      navigation.navigate('chat');
    } else {
      // 对于其他事件，我们只打印一条消息
      console.log(`Clicked on task: ${title}`);
      // 可以添加一些视觉反馈，比如 Alert
      Alert.alert('Task Clicked', `You clicked on ${title}`);
    }
  };

  const renderDateCard = (date: Date) => {
    const isSelected = date.toDateString() === selectedDate.toDateString();
    return (
      <Pressable key={date.toISOString()} onPress={() => setSelectedDate(date)}>
        <DateCard isSelected={isSelected}>
          <DayText isSelected={isSelected}>{date.toLocaleString('en-US', { weekday: 'short' })}</DayText>
          <DateText isSelected={isSelected}>{date.getDate()}</DateText>
        </DateCard>
      </Pressable>
    );
  };

  console.log('Selected date:', selectedDate.toDateString()); // 调试信息

  return (
    <ScreenLayout testID="explore-screen-layout">
      <Content testID="explore-screen-content">
        <TopSection>
          <Pressable onPress={() => handleMonthChange('prev')}>
            <NavButton>{'< '}{new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1).toLocaleString('en-US', { month: 'short' })}</NavButton>
          </Pressable>
          <MonthText>{currentMonth.toLocaleString('en-US', { month: 'long' })}</MonthText>
          <Pressable onPress={() => handleMonthChange('next')}>
            <NavButton>{new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1).toLocaleString('en-US', { month: 'short' })}{' >'}</NavButton>
          </Pressable>
        </TopSection>

        <DatePicker>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {getMonthDates().map(renderDateCard)}
          </ScrollView>
        </DatePicker>

        <TimelineContainer>
          <TimelineScrollView>
            <TimelineContent>
              <TimeColumn>
                {renderTimeSlots()}
              </TimeColumn>
              <TaskColumn>
                <BackgroundGrid />
                {renderTasks()}
              </TaskColumn>
            </TimelineContent>
          </TimelineScrollView>
        </TimelineContainer>
      </Content>
    </ScreenLayout>
  );
}

