import styled from 'styled-components/native'
import { Text } from 'react-native'
import ScreenLayout from 'src/components/ScreenLayout'

const Content = styled.View`
    padding: 20px;
`;

const TopSection = styled.View`
    flex-direction: row;
    justify-content: center; /* 中心对齐 */
    align-items: center;
    margin-bottom: 20px;
    position: relative; /* 允许绝对定位子元素 */
`;

const NavButton = styled.Text<{ position?: 'left' | 'right' }>`
    font-size: 16px;
    color: ${(p) => p.theme.white};
    position: absolute;
    ${(props) => (props.position === 'left' ? 'left: 10px;' : 'right: 10px;')};
`;

const MonthText = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: ${(p) => p.theme.white};
    text-align: center;
`;

const ProfilePicture = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 20px;
`;

const DatePicker = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
`;

const DateCard = styled.View`
    background-color: ${(p) => p.theme.gray434343};
    padding: 10px;
    border-radius: 10px;
    align-items: center;
    width: 20%;
`;

const DateCardSelected = styled(DateCard)`
    background-color: ${(p) => p.theme.white};
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

const S = {
  Content,
  TopSection,
  NavButton,
  MonthText,
  ProfilePicture,
  DatePicker,
  DateCard,
  DateCardSelected,
  Schedule,
  TaskCard,
};

export default function ExploreScreen() {
  return (
    <ScreenLayout testID="explore-screen-layout">
      <S.Content testID="explore-screen-content">

        {/* 顶部部分 */}
        <S.TopSection>
          <S.NavButton position="left">{`← Aug`}</S.NavButton>
          <S.MonthText>Sep</S.MonthText>
          <S.NavButton position="right">{`Oct →`}</S.NavButton>
        </S.TopSection>

        {/* 日期选择器 */}
        <S.DatePicker>
          <S.DateCard><Text>1 Sun</Text></S.DateCard>
          <S.DateCardSelected><Text>2 Mon</Text></S.DateCardSelected>
          <S.DateCard><Text>3 Tue</Text></S.DateCard>
          <S.DateCard><Text>4 Wed</Text></S.DateCard>
        </S.DatePicker>

        {/* 日程安排 */}
        <S.Schedule>
          <S.TaskCard color="#EF4444">
            <Text>Bore Inspection</Text>
            <Text>05/04/2024</Text>
            <Text>77 Cow Road, Dairytown</Text>
          </S.TaskCard>
          <S.TaskCard color="#3B82F6">
            <Text>Dairy Discharge Monitoring</Text>
            <Text>05/04/2024</Text>
            <Text>592 Ohauiti Road, Ohauiti 3171</Text>
          </S.TaskCard>
          <S.TaskCard color="#EF4444">
            <Text>Noxious Weed Control</Text>
            <Text>05/04/2024</Text>
          </S.TaskCard>
        </S.Schedule>

      </S.Content>
    </ScreenLayout>
  )
}
