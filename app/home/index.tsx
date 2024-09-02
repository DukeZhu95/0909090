import styled from 'styled-components/native'
import { Text } from 'react-native'
import ScreenLayout from 'src/components/ScreenLayout'

export default function HomeScreen() {
  return (
    <ScreenLayout testID="home-screen-layout">
      <S.Content testID="home-screen-content">
        {/* 顶部部分 */}
        <S.TopSection>
          <S.LeftNavButton>{`< Mar`}</S.LeftNavButton>
          <S.MonthText>April</S.MonthText>
          <S.RightNavButton>{`May >`}</S.RightNavButton>
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

const S = {
  Content: styled.View`
      padding: 20px;
  `,
  TopSection: styled.View`
      flex-direction: row;
      justify-content: space-between; /* 使左右按钮和中间文本之间的距离均等 */
      align-items: center;
      margin-bottom: 20px;
  `,
  LeftNavButton: styled.Text`
      font-size: 16px;
      color: ${(p) => p.theme.white};
  `,
  RightNavButton: styled.Text`
      font-size: 16px;
      color: ${(p) => p.theme.white};
      padding-right: 20px; /* 向右移动 */
  `,
  MonthText: styled.Text`
      font-size: 24px;
      font-weight: bold;
      color: ${(p) => p.theme.white};
      text-align: center;
      flex: 1; /* 确保月份文本占据可用空间，从而实现居中 */
      padding-left: 10px; /* 向右移动 */
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
  TaskCard: styled.View`
      background-color: ${(p) => p.color};
      width: 48%;
      padding: 20px;
      border-radius: 10px;
      margin-bottom: 20px;
  `,
}
