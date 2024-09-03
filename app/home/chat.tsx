import styled from 'styled-components/native';
import { Text, ScrollView } from 'react-native';
import ScreenLayout from 'src/components/ScreenLayout';

// 引入用户头像图片
import UserAvatar from 'src/assets/images/Avatar.png';

export default function ChatScreen() {
  return (
    <ScreenLayout testID="home-screen-layout">
      <S.Content testID="home-screen-content">
        {/* 顶部任务信息 */}
        <S.TaskInfo>
          <S.BackButton />
          <S.TaskDetails>
            <Text>Bore Inspection</Text>
            <Text>77 Cow Road, Dairytown</Text>
            <Text>Destination is 500 meters away.</Text>
          </S.TaskDetails>
          <S.Avatar source={UserAvatar} />
        </S.TaskInfo>

        {/* 录音和录像按钮 */}
        <S.ButtonRow>
          <S.ActionButton>
            <Text>Record audio</Text>
          </S.ActionButton>
          <S.ActionButton>
            <Text>Record video</Text>
          </S.ActionButton>
        </S.ButtonRow>

        {/* 检查列表 */}
        <ScrollView>
          <S.Section>
            <S.SectionTitle>ITEMS TO BE CHECKED</S.SectionTitle>
            <S.CheckItem>
              <S.CheckBox />
              <Text>Approved BC documents and amendments on site</Text>
            </S.CheckItem>
            <S.CheckItem>
              <S.CheckBox />
              <Text>Correct address and Lot No.</Text>
            </S.CheckItem>
            <S.CheckItem>
              <S.CheckBox />
              <Text>Consent conditions checked</Text>
            </S.CheckItem>
          </S.Section>

          <S.Section>
            <S.SectionTitle>Siting</S.SectionTitle>
            <S.CheckItem>
              <S.CheckBox />
              <Text>Siting as per approved plans, pegs checked</Text>
            </S.CheckItem>
            {/* 添加更多的检查项... */}
          </S.Section>

          {/* 添加更多的 Section... */}
        </ScrollView>

        {/* 底部按钮 */}
        <S.BottomBar>
          <S.PauseButton>
            <Text>PAUSE</Text>
          </S.PauseButton>
          <S.FinishButton>
            <Text>FINISH</Text>
          </S.FinishButton>
        </S.BottomBar>
      </S.Content>
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
  `,
  TaskDetails: styled.View`
      flex: 1;
  `,
  Avatar: styled.Image`
      width: 50px;
      height: 50px;
      border-radius: 25px;
  `,
  BackButton: styled.View`
      width: 40px;
      height: 40px;
      background-color: ${(p) => p.theme.gray};
      border-radius: 20px;
      margin-right: 10px;
  `,
  ButtonRow: styled.View`
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 20px;
  `,
  ActionButton: styled.TouchableOpacity`
      flex: 1;
      height: 50px;
      background-color: #6366F1;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      margin-right: 10px;
  `,
  Section: styled.View`
      margin-bottom: 20px;
      background-color: #FFC0CB;  // 设置淡粉色背景
      padding: 15px;
      border-radius: 10px;
  `,
  SectionTitle: styled.Text`
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
      color: #333333;  // 设置深色字体，确保在淡粉色背景上清晰可见
  `,
  CheckItem: styled.View`
      flex-direction: row;
      align-items: center;
      margin-bottom: 10px;
  `,
  CheckBox: styled.View`
      width: 20px;
      height: 20px;
      border: 1px solid ${(p) => p.theme.gray};
      border-radius: 4px;
      margin-right: 10px;
  `,
  CheckItemText: styled.Text`
    color: #333333;  // 设置深色字体，确保可读性
  `,
  BottomBar: styled.View`
      flex-direction: row;
      justify-content: space-between;
      padding: 10px;
  `,
  PauseButton: styled.TouchableOpacity`
      flex: 1;
      height: 50px;
      background-color: #4B5563;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      margin-right: 10px;
  `,
  FinishButton: styled.TouchableOpacity`
      flex: 1;
      height: 50px;
      background-color: #6366F1;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
  `,
};

