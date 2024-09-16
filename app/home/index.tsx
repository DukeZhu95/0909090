import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import ScreenLayout from 'src/components/ScreenLayout';
import UserAvatar from 'src/assets/images/Avatar.png'

// 定义应用的路由参数
type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  // 添加其他路由...
};

// 定义导航属性的类型
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;


export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  // 处理头像点击
  const handleAvatarPress = () => {
    navigation.navigate('profile');
  };

  // 处理任务信息点击
  const handleTaskInfoPress = () => {
    // 这里可以添加显示任务详细信息的逻辑
  };

  // 处理任务卡片点击
  const handleTaskCardPress = () => {
    // 这里可以添加显示特定状态任务列表的逻辑
  };

  return (
    <ScreenLayout testID="home-screen-layout">
      <S.Content testID="home-screen-content">
        {/* 顶部部分 */}
        <S.TopSection>
          <S.TopLeftContent>
            <S.DateText>Thursday</S.DateText>
            <S.DateBigText>29 August</S.DateBigText>
            <S.GreetingText>Hi Duke.</S.GreetingText>
            <S.TaskText>5 Tasks are pending</S.TaskText>
          </S.TopLeftContent>
          {/* 可点击的头像 */}
          <TouchableOpacity onPress={handleAvatarPress}>
            <S.Avatar source={UserAvatar} />
          </TouchableOpacity>
        </S.TopSection>

        {/* 可点击的任务信息 */}
        <TouchableOpacity onPress={handleTaskInfoPress}>
          <S.TaskInfoBox>
            <Text>Information Architecture</Text>
            <Text>Saber & Oro</Text>
            <Text>Now</Text>
          </S.TaskInfoBox>
        </TouchableOpacity>

        {/* 月度预览 */}
        <S.MonthlyPreview>
          <S.TaskCard color="#22C55E" onPress={() => handleTaskCardPress()}>
            <Text>22</Text>
            <Text>Done</Text>
          </S.TaskCard>
          <S.TaskCard color="#F59E0B" onPress={() => handleTaskCardPress()}>
            <Text>7</Text>
            <Text>In Progress</Text>
          </S.TaskCard>
          <S.TaskCard color="#EF4444" onPress={() => handleTaskCardPress()}>
            <Text>12</Text>
            <Text>Pending</Text>
          </S.TaskCard>
          <S.TaskCard color="#3B82F6" onPress={() => handleTaskCardPress()}>
            <Text>14</Text>
            <Text>Waiting For Review</Text>
          </S.TaskCard>
        </S.MonthlyPreview>
      </S.Content>
    </ScreenLayout>
  );
}

// 更新 TaskCard 组件定义
const TaskCard = styled(TouchableOpacity)<{ color: string }>`
    background-color: ${(p) => p.color};
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 10px;
    width: 48%;
`;

const S = {
  Content: styled.View`
      padding: 20px;
  `,
  TopSection: styled.View`
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 20px;
  `,
  TopLeftContent: styled.View`
      flex: 1;
  `,
  Avatar: styled.Image`
      width: 80px;
      height: 80px;
      border-radius: 40px;
  `,
  DateText: styled.Text`
      color: ${(p) => p.theme.white};
      font-size: 16px;
  `,
  DateBigText: styled.Text`
      color: ${(p) => p.theme.white};
      font-size: 32px;
      font-weight: bold;
  `,
  GreetingText: styled.Text`
      color: ${(p) => p.theme.white};
      font-size: 24px;
      margin-top: 10px;
  `,
  TaskText: styled.Text`
      font-size: 16px;
      color: ${(p) => p.theme.white};
  `,
  TaskInfoBox: styled.View`
      background-color: #6366F1;
      padding: 20px;
      border-radius: 10px;
      margin-bottom: 20px;
  `,
  MonthlyPreview: styled.View`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
  `,
  TaskCard,
};