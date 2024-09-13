import styled from 'styled-components/native';
import { TextInput, TouchableOpacity, Text } from 'react-native';
import ScreenLayout from 'src/components/ScreenLayout';
import UserAvatar from 'src/assets/images/Avatar.png'; // Ensure the avatar image path is correct
import { useState } from 'react';

export default function ProfileScreen() {
  const [isEditable, setIsEditable] = useState(false);

  const handleEditPress = () => {
    setIsEditable(!isEditable);
  };

  return (
    <ScreenLayout testID="profile-screen-layout">
      <S.Content testID="profile-screen-content">
        {/* User Avatar and Name */}
        <S.ProfileHeader>
          <S.Avatar source={UserAvatar} />
          <S.UserInfo>
            <S.UserName>Duke Zhu</S.UserName>
            <S.UserEmail>1234@test.com</S.UserEmail>
          </S.UserInfo>
          {/* Edit Button */}
          <S.EditButton onPress={handleEditPress} isEditable={isEditable}>
            <S.EditButtonText>{isEditable ? 'Save' : 'Edit'}</S.EditButtonText>
          </S.EditButton>
        </S.ProfileHeader>

        {/* Profile Fields */}
        <S.ProfileField>
          <S.Label>Name</S.Label>
          <S.Input
            value="Duke Zhu"
            editable={isEditable}
            isEditable={isEditable}
          />
        </S.ProfileField>

        <S.ProfileField>
          <S.Label>Password</S.Label>
          <S.Input
            value="••••••••"
            editable={isEditable}
            secureTextEntry={true}
          />
        </S.ProfileField>

        <S.ProfileField>
          <S.Label>Email</S.Label>
          <S.Input
            value="1234@test.com"
            editable={isEditable}
          />
        </S.ProfileField>

        <S.ProfileField>
          <S.Label>Phone Number</S.Label>
          <S.Input
            value="xxx-xxx-4567"
            editable={isEditable}
          />
        </S.ProfileField>

        <S.ProfileField>
          <S.Label>Location</S.Label>
          <S.Input
            value="Hamilton, WAIKATO"
            editable={isEditable}
          />
        </S.ProfileField>
      </S.Content>
    </ScreenLayout>
  );
}

const S = {
  Content: styled.View`
      padding: 20px;
  `,
  ProfileHeader: styled.View`
      flex-direction: row;
      align-items: center;
      justify-content: space-between; /* Align items properly */
      margin-bottom: 30px;
  `,
  Avatar: styled.Image`
      width: 80px;
      height: 80px;
      border-radius: 40px;
      margin-right: 20px;
  `,
  UserInfo: styled.View`
      flex-direction: column;
  `,
  UserName: styled.Text`
      font-size: 20px;
      font-weight: bold;
      color: ${(p) => p.theme.white};
  `,
  UserEmail: styled.Text`
      font-size: 16px;
      color: ${(p) => p.theme.white};
  `,
  ProfileField: styled.View`
      margin-bottom: 20px;
  `,
  Label: styled.Text`
      font-size: 16px;
      font-weight: bold;
      color: ${(p) => p.theme.white};
      margin-bottom: 5px;
  `,
  Input: styled(TextInput)`
      border: 1px solid ${(p) => p.theme.white};
      padding: 10px;
      border-radius: 5px;
      background-color: ${(p) => (p.editable ? p.theme.white : 'lightgray')};
      color: ${(p) => p.theme.black};
      font-weight: ${(p) => (p.editable ? 'normal' : 'bold')}; /* Font is bold when not editable */
  `,
  EditButton: styled(TouchableOpacity)`
      background-color: ${(props) => (props.isEditable ? '#6366F1' : '#FFC0CB')}; /* Changes background to blue for Save */
      padding: 10px 20px; /* Increased button size */
      border-radius: 10px; /* Rounded corners */
      justify-content: center;
      align-items: center;
  `,
  EditButtonText: styled(Text)`
      color: white;
      font-weight: bold;
  `,
};
