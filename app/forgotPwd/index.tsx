import styled from 'styled-components/native'
import ScreenLayout from 'src/components/ScreenLayout'
import TextInputWrapper from 'src/components/TextInputWrapper'
import ButtonWrapper from 'src/components/ButtonWrapper'
import StackScreenHeader from 'src/components/StackScreenHeader'
import { useState } from 'react'
import axios from 'axios'
const baseUrl = process.env.EXPO_PUBLIC_API_URL;

export default function ForgetPwdScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${baseUrl}/api/User/forgotPwd`,
        { email, password },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      console.log("handleSubmit====res:", response.data);
      console.log('Password reset link sent to your email.');
      // router.push('/login'); // Navigate to log in screen or wherever appropriate
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // 处理Axios特定的错误
        console.error('Axios error:', error.response?.data || error.message);
      } else {
        // 处理其他类型的错误
        console.error('An unexpected error occurred:', error);
      }
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
      color: ${(p) => p.theme.DATASCAPE_PLUS1};
      font-family: helvetica;
      font-weight: 900;
      font-size: ${(p) => p.theme.size(36, 'px')};
      margin-bottom: ${(p) => p.theme.size(90, 'px')};
  `
}



  