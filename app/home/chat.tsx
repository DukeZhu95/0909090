import React from 'react';
import styled from 'styled-components/native';
import { Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ScreenLayout from 'src/components/ScreenLayout';
import { Svg, Path, Rect } from 'react-native-svg';
// 引入用户头像图片
import UserAvatar from 'src/assets/images/Avatar.png';
import { StackNavigationProp } from '@react-navigation/stack'

// 定义应用的路由参数
type RootStackParamList = {
  chat: undefined;
  explore: undefined;
  // 添加其他路由...
};

// 定义导航属性的类型
type ChatScreenNavigationProp = StackNavigationProp<RootStackParamList, 'chat'>;

// SVG 图标组件
const BackIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path d="M19 12H5M12 19L5 12L12 5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

const LocationIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

const DistanceIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

const MicrophoneIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path d="M12 1C11.2044 1 10.4413 1.31607 9.87868 1.87868C9.31607 2.44129 9 3.20435 9 4V12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12V4C15 3.20435 14.6839 2.44129 14.1213 1.87868C13.5587 1.31607 12.7956 1 12 1Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M19 10V12C19 13.8565 18.2625 15.637 16.9497 16.9497C15.637 18.2625 13.8565 19 12 19C10.1435 19 8.36301 18.2625 7.05025 16.9497C5.7375 15.637 5 13.8565 5 12V10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M12 19V23" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M8 23H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

const VideoIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path d="M23 7L16 12L23 17V7Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M14 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H14C15.1046 19 16 18.1046 16 17V7C16 5.89543 15.1046 5 14 5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

// 暂停图标
const PauseIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Rect x="6" y="4" width="4" height="16" fill="white"/>
    <Rect x="14" y="4" width="4" height="16" fill="white"/>
  </Svg>
);

// 完成图标
const FinishIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="white">
    <Rect x="3" y="3" width="18" height="18" rx="2" stroke="white" strokeWidth="2"/>
  </Svg>
);

// 底部栏组件
const BottomBar = () => (
  <S.BottomBar>
    <S.Button>
      <PauseIcon />
      <S.ButtonText>PAUSE</S.ButtonText>
    </S.Button>
    <S.Button>
      <FinishIcon />
      <S.ButtonText>FINISH</S.ButtonText>
    </S.Button>
  </S.BottomBar>
);

export default function ChatScreen() {
  const navigation = useNavigation<ChatScreenNavigationProp>();

  const handleBackPress = () => {
    navigation.navigate('explore');  // 确保 'explore' 匹配您的路由名称
  };

  return (
    <ScreenLayout testID="chat-screen-layout">
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <S.Content testID="chat-screen-content">
          {/* 顶部任务信息 */}
          <S.TaskInfo>
            <S.BackButton onPress={handleBackPress}>
              <BackIcon />
            </S.BackButton>
            <S.TaskDetails>
              <S.TaskTitle>Bore Inspection</S.TaskTitle>
              <S.TaskLocation>
                <LocationIcon />
                <S.LocationText>77 Cow Road, Dairytown</S.LocationText>
              </S.TaskLocation>
              <S.TaskDistance>
                <DistanceIcon />
                <S.DistanceText>Destination is 500 meters away.</S.DistanceText>
              </S.TaskDistance>
            </S.TaskDetails>
            <S.Avatar source={UserAvatar} />
          </S.TaskInfo>

          {/* 录音和录像按钮 */}
          <S.ButtonRow>
            <S.ActionButton>
              <MicrophoneIcon />
              <S.ButtonText>Record audio</S.ButtonText>
            </S.ActionButton>
            <S.ActionButton>
              <VideoIcon />
              <S.ButtonText>Record video</S.ButtonText>
            </S.ActionButton>
          </S.ButtonRow>

          {/* 检查列表 */}
          <S.CheckBoxTitle>ITEMS TO BE CHECKED</S.CheckBoxTitle>
          <S.Section>
            <S.CheckItem>
              <S.CheckBox />
              <S.CheckItemText>Approved BC documents and amendments on site</S.CheckItemText>
            </S.CheckItem>
            <S.CheckItem>
              <S.CheckBox />
              <S.CheckItemText>Correct address and Lot No.</S.CheckItemText>
            </S.CheckItem>
            <S.CheckItem>
              <S.CheckBox />
              <S.CheckItemText>Consent conditions checked</S.CheckItemText>
            </S.CheckItem>
          </S.Section>

          <S.Section>
            <S.SectionTitle>Siting</S.SectionTitle>
            <S.CheckItem>
              <S.CheckBox />
              <Text>Siting as per approved plans, pegs checked</Text>
            </S.CheckItem>

            <S.CheckItem>
              <S.CheckBox />
              <Text>
                Retaining walls: Nova flow, PS if surcharge or {'>'}1.5m HtBuilding height to boundary
                Surveyors report
              </Text>
            </S.CheckItem>

            {/* 单选按钮部分 */}
            <S.RadioGroup>
              <S.RadioItem>
                <S.RadioCircle />
                <S.RadioLabel>Received</S.RadioLabel>
              </S.RadioItem>
              <S.RadioItem>
                <S.RadioCircle />
                <S.RadioLabel>Outstanding</S.RadioLabel>
              </S.RadioItem>
              <S.RadioItem>
                <S.RadioCircle />
                <S.RadioLabel>NA</S.RadioLabel>
              </S.RadioItem>
            </S.RadioGroup>
          </S.Section>

          <S.Section>
            <S.SectionTitle>Excavations</S.SectionTitle>
            <S.CheckItem>
              <S.CheckBox />
              <Text>Ground bearing acceptable</Text>
            </S.CheckItem>
            <S.CheckItem>
              <S.CheckBox />
              <Text>Specific foundation design</Text>
            </S.CheckItem>
            <S.CheckItem>
              <S.CheckBox />
              <Text>Engineer supervision</Text>
            </S.CheckItem>
            <S.CheckItem>
              <S.CheckBox />
              <Text>Hazards: floor heights & flood levels, ground stability</Text>
            </S.CheckItem>
            <S.CheckItem>
              <S.CheckBox />
              <Text>Council drains under building</Text>
            </S.CheckItem>
            <S.CheckItem>
              <S.CheckBox />
              <Text>Excavation: safe slope</Text>
            </S.CheckItem>
          </S.Section>

          <S.Section>
            <S.SectionTitle>Foundations: Piled/Drilled/Driven foundations</S.SectionTitle>
            <S.CheckItem>
              <S.CheckBox />
              <Text>Pile heights correct for type of bracing element </Text>
            </S.CheckItem>
            <S.CheckItem>
              <S.CheckBox />
              <Text>Pile depth correct for pile type</Text>
            </S.CheckItem>
            <S.CheckItem>
              <S.CheckBox />
              <Text>Pile spacing for bearers</Text>
            </S.CheckItem>
            <S.CheckItem>
              <S.CheckBox />
              <Text>Floor height to ground level, 450mm crawl space</Text>
            </S.CheckItem>
          </S.Section>
        </S.Content>
      </ScrollView>

      {/* 使用新的 BottomBar 组件 */}
      <BottomBar />
    </ScreenLayout>
  );
}

const S = {
  Content: styled.View`
    padding: 20px;
  `,
  TaskInfo: styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    background-color: #4C49ED;
    padding: 15px;
    border-radius: 10px;
  `,
  BackButton: styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    background-color: ${(p) => p.theme.white};
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  `,
  TaskDetails: styled.View`
    flex: 1;
  `,
  TaskTitle: styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: white;
    margin-bottom: 5px;
  `,
  TaskLocation: styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 5px;
  `,
  LocationText: styled.Text`
    color: white;
    margin-left: 5px;
  `,
  TaskDistance: styled.View`
    flex-direction: row;
    align-items: center;
  `,
  DistanceText: styled.Text`
    color: white;
    margin-left: 5px;
  `,
  Avatar: styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
  `,
  // BackButton: styled.View`
  //     width: 40px;
  //     height: 40px;
  //     background-color: ${(p) => p.theme.white};
  //     border-radius: 20px;
  //     margin-right: 10px;
  // `,
  // ButtonText: styled.Text`
  //   color: white;
  //   font-size: 16px;
  //   margin-left: 10px;
  // `,
  ButtonRow: styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
  `,
  ActionButton: styled.TouchableOpacity`
    flex: 1;
    height: 50px;
    background-color: #6366F1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-right: 10px;
  `,
  Section: styled.View`
      margin-bottom: 20px;
      background-color: #8dbff5;
      padding: 20px;
      border-radius: 10px;
  `,
  // ... 其他样式保持不变 ...
  CheckBoxTitle: styled.Text`
      font-size: 18px;
      font-weight: bold;
      margin-top: 5px;
      margin-bottom: 10px;
      padding-left: 10px;
      color: black;
  `,
  SectionTitle: styled.Text`
      font-size: 18px;
      font-weight: bold;
      margin-top: 5px;
      margin-bottom: 10px;
      padding-left: 10px;
      color: #333333;
  `,
  CheckItem: styled.View`
      flex-direction: row;
      align-items: center;
      margin-top: 20px;
      margin-bottom: 20px;
      padding-left: 10px;
  `,
  CheckBox: styled.View`
      width: 20px;
      height: 20px;
      border: 2px solid ${(p) => p.theme.black};
      border-radius: 4px;
      margin-right: 10px;
      margin-left: 10px;
  `,
  CheckItemText: styled.Text`
      color: #333333;
  `,
  RadioGroup: styled.View`
      flex-direction: row;
      justify-content: space-between;
      margin-top: 10px;
  `,
  RadioItem: styled.TouchableOpacity`
      flex-direction: row;
      align-items: center;
      margin-right: 15px;
  `,
  RadioCircle: styled.View`
      width: 20px;
      height: 20px;
      border-radius: 10px;
      border: 2px solid #333333;
      margin-right: 10px;
  `,
  RadioLabel: styled.Text`
      color: #333333;
  `,
  // BottomBar: styled.View`
  //   flex-direction: row;
  //   justify-content: space-between;
  //   padding: 20px;
  //   background-color: #6366F1;
  // `,
  PauseButton: styled.TouchableOpacity`
    flex: 1;
    height: 50px;
    background-color: #FFC0CB;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-right: 10px;
  `,
  FinishButton: styled.TouchableOpacity`
    flex: 1;
    height: 50px;
    background-color: #FF69B4;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  `,
  BottomBar: styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: white;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  `,
  Button: styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #6366F1;
    padding: 10px 20px;
    border-radius: 25px;
    width: 48%;
  `,
  ButtonText: styled.Text`
    color: white;
    font-weight: bold;
    margin-left: 10px;
  `,
};