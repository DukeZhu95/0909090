import styled from 'styled-components/native';
import { Text, ScrollView } from 'react-native';
import ScreenLayout from 'src/components/ScreenLayout';

// 引入用户头像图片
import UserAvatar from 'src/assets/images/Avatar.png';

export default function ChatScreen() {
  return (
    <ScreenLayout testID="home-screen-layout">
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}> {/* Enable scrolling and add padding to the bottom */}
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
          <S.CheckBoxTitle>ITEMS TO BE CHECKED</S.CheckBoxTitle>
          <S.Section>
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

      {/* 底部按钮 */}
      <S.BottomBar>
        <S.PauseButton>
          <Text>PAUSE</Text>
        </S.PauseButton>
        <S.FinishButton>
          <Text>FINISH</Text>
        </S.FinishButton>
      </S.BottomBar>
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
      background-color: #FFFFFF;
      padding: 15px;
      border-radius: 10px;
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
      background-color: ${(p) => p.theme.white};
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
      background-color: #FFC0CB;
      padding: 20px;
      border-radius: 10px;
  `,
  CheckBoxTitle: styled.Text`
      font-size: 18px;
      font-weight: bold;
      margin-top: 5px;
      margin-bottom: 10px;
      padding-left: 10px;
      color: beige;
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
