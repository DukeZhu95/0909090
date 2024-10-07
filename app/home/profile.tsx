import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native';
import { TextInput, TouchableOpacity, Text, Alert, ScrollView, Platform, View } from 'react-native'
import ScreenLayout from 'src/components/ScreenLayout';
import UserAvatar from 'src/assets/images/Avatar.png';
import { Modal } from 'react-native';
import { router } from 'expo-router' // Ensure the avatar image path is correct

interface EditButtonProps {
  isEditable: boolean;
  onPress: () => void;
}

interface InputProps {
  isEditable?: boolean;
  editable?: boolean;
  value: string;
  secureTextEntry?: boolean;
}

// 自定义 Shadow 组件
const Shadow = styled(View)`
  ${Platform.select({
  ios: `
      shadow-color: #000;
      shadow-offset: 0px 2px;
      shadow-opacity: 0.25;
      shadow-radius: 3.84px;
    `,
  android: `
      elevation: 5;
    `
})}
`;

export default function ProfileScreen() {
  console.log('ProfileScreen rendered');
  const [isEditable, setIsEditable] = useState(false);
  // useNavigation()
  const handleEditPress = () => {
    setIsEditable(!isEditable);
  };

  const [isModalVisible, setModalVisible] = useState(false);

  const handleLogout = () => {
    console.log('Logout button pressed');
    console.warn('Logout confirmation', 'Are you sure you want to log out?');
    setModalVisible(true);
  };

  useEffect(() => {
    Alert.alert('Test', 'This is a test alert');
  }, []);

  return (
    <ScreenLayout testID="profile-screen-layout">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
              isEditable={isEditable}
              secureTextEntry={true}
            />
          </S.ProfileField>

          <S.ProfileField>
            <S.Label>Email</S.Label>
            <S.Input
              value="1234@test.com"
              editable={isEditable}
              isEditable={isEditable}
            />
          </S.ProfileField>

          <S.ProfileField>
            <S.Label>Phone Number</S.Label>
            <S.Input
              value="xxx-xxx-4567"
              editable={isEditable}
              isEditable={isEditable}
            />
          </S.ProfileField>

          <S.ProfileField>
            <S.Label>Location</S.Label>
            <S.Input
              value="Hamilton, WAIKATO"
              editable={isEditable}
              isEditable={isEditable}
            />
          </S.ProfileField>

          {/* Logout Button */}
          <Shadow>
            <S.LogoutButton onPress={() => handleLogout()}>
              <S.LogoutButtonText>Log out</S.LogoutButtonText>
            </S.LogoutButton>
          </Shadow>
        </S.Content>

        {/* 添加 Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <S.ModalOverlay>
            <S.ModalContent>
              <S.ModalText>Are you sure you want to log out?</S.ModalText>
              <S.ModalButtonContainer>
                <S.ModalButton onPress={() => {
                  setModalVisible(false);
                  router.replace('/');
                }}>
                  <S.ModalButtonText>OK</S.ModalButtonText>
                </S.ModalButton>
                <S.ModalButton onPress={() => setModalVisible(false)}>
                  <S.ModalButtonText>Cancel</S.ModalButtonText>
                </S.ModalButton>
              </S.ModalButtonContainer>
            </S.ModalContent>
          </S.ModalOverlay>
        </Modal>
      </ScrollView>
    </ScreenLayout>
  );
}

const S = {
  Content: styled.View`
    padding: 20px;
    background-color: #E4D4FF  
  `,
  ProfileHeader: styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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
    color: ${(p) => p.theme.black};
  `,
  UserEmail: styled.Text`
    font-size: 16px;
    color: ${(p) => p.theme.black};
  `,
  ProfileField: styled.View`
    margin-bottom: 20px;
  `,
  Label: styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: ${(p) => p.theme.black};
    margin-bottom: 5px;
  `,
  Input: styled(TextInput)<InputProps>`
    border: 1px solid ${(p) => p.theme.white};
    padding: 10px;
    border-radius: 5px;
    background-color: ${(p) => (p.isEditable ? p.theme.white : 'lightgray')};
    color: ${(p) => p.theme.black};
    font-weight: ${(p) => (p.isEditable ? 'normal' : 'bold')};
  `,
  EditButton: styled(TouchableOpacity)<EditButtonProps>`
    background-color: ${(props) => (props.isEditable ? '#9352FF' : '#0022CB')};
    padding: 10px 20px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
  `,
  EditButtonText: styled(Text)`
    color: white;
    font-weight: bold;
    font-size: 24px;  
  `,
  LogoutButton: styled(TouchableOpacity)`
      background-color: #180833;
      padding: 18px;
      border-radius: 10px;
      justify-content: center;
      align-items: center;
      margin-top: 30px;
      height: 60px;
  `,
  LogoutButtonText: styled(Text)`
      color: white;
      font-weight: bold;
      font-size: 32px;
  `,
  ModalOverlay: styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
  `,
  ModalContent: styled.View`
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    align-items: center;
  `,
  ModalText: styled.Text`
    font-size: 20px;
    margin-bottom: 20px;
  `,
  ModalButtonContainer: styled.View`
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  `,
  ModalButton: styled.TouchableOpacity`
    padding: 10px 20px;
    background-color: #6366F1;
    border-radius: 5px;
  `,
  ModalButtonText: styled.Text`
    color: white;
    font-weight: bold;
  `,
};