import styled from 'styled-components/native'
import ScreenLayout from 'src/components/ScreenLayout'
import TextInputWrapper from 'src/components/TextInputWrapper'
import ButtonWrapper from 'src/components/ButtonWrapper'
import StackScreenHeader from 'src/components/StackScreenHeader'
import { useState } from 'react'
const baseUrl = process.env.EXPO_PUBLIC_API_URL;

export default function ForgetPwdScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/User/forgotPwd`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password }),
      });
      console.log("handleSubmit====res:",response);
      console.log('Password reset link sent to your email.');
      // router.push('/login'); // Navigate to login screen or wherever appropriate
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScreenLayout >
      <S.Content>
        <StackScreenHeader  />
        <S.Title>
          Forgot Password
        </S.Title>
        <TextInputWrapper
          placeholder='Email Address'
          value={email}
          onChangeText={setEmail}
          keyboardType='email-address'
        />
        <TextInputWrapper
          placeholder='Password'
          textContentType='password'
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <ButtonWrapper title='Submit' onPress={handleSubmit} />
      </S.Content>
    </ScreenLayout>
  )
}

const S = {
  Content: styled.View`
      padding: 0 ${(p) => p.theme.size(45, 'px')};
  `,
  Title: styled.Text`
      color: ${(p) => p.theme.black};
      font-family: helvetica;
      font-weight: 900;
      font-size: ${(p) => p.theme.size(36, 'px')};
      margin-bottom: ${(p) => p.theme.size(90, 'px')};
  `
}



  