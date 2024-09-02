import styled from 'styled-components/native'
import { Text } from 'react-native'
import ScreenLayout from 'src/components/ScreenLayout'
// 引入头像图片
import UserAvatar from 'src/assets/images/Avatar.png';

export default function HomeScreen() {
  return (
    <ScreenLayout testID="home-screen-layout">
      <S.Content testID="home-screen-content">
        {/* 顶部部分 */}
        <S.TopSection>
          <S.DateText>Thursday</S.DateText>
          <S.DateBigText>29 August</S.DateBigText>
          <S.GreetingText>Hi Duke.</S.GreetingText>
          <S.TaskText>5 Tasks are pending</S.TaskText>
          {/* 添加用户头像 */}
          <S.Avatar source={UserAvatar} />
        </S.TopSection>

        {/* 任务信息 */}
        <S.TaskInfoBox>
          <Text>Information Architecture</Text>
          <Text>Saber & Oro</Text>
          <Text>Now</Text>
        </S.TaskInfoBox>

        {/* 月度预览 */}
        <S.MonthlyPreview>
          <S.TaskCard color="#22C55E">
            <Text>22</Text>
            <Text>Done</Text>
          </S.TaskCard>
          <S.TaskCard color="#F59E0B">
            <Text>7</Text>
            <Text>In Progress</Text>
          </S.TaskCard>
          <S.TaskCard color="#EF4444">
            <Text>12</Text>
            <Text>Pending</Text>
          </S.TaskCard>
          <S.TaskCard color="#3B82F6">
            <Text>14</Text>
            <Text>Waiting For Review</Text>
          </S.TaskCard>
        </S.MonthlyPreview>
      </S.Content>
    </ScreenLayout>
  )
}

// 定义 TaskCard 组件时，明确指定它接受 color 属性
const TaskCard = styled.View<{ color: string }>`
  background-color: ${(p) => p.color};
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 10px;
  width: 48%;  /* 确保两行排列，适应小屏幕 */
`;

const S = {
  Avatar: styled.Image`
      position: absolute;
      top: 0;
      right: 0;
      width: 100px;
      height: 100px;
      border-radius: 25px; /* 圆形头像 */
  `,
  Content: styled.View`
      padding: 20px;
  `,
  TopSection: styled.View`
      margin-bottom: 20px;
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
}
