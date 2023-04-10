import React, { useEffect } from 'react';
import useAuth from './hooks/useAuth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../url/baseUrl';
import * as St from './style';

const SignUp = () => {
  const { inputs, setInputs, checkAuth, validationCheck, onChange } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, []);

  const onSubmit = async (): Promise<void> => {
    await axios
      .post(`${baseUrl}auth/signup`, {
        email: inputs.email,
        password: inputs.password
      })
      .then(() => {
        window.alert('회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.');
        navigate('/signin');
      })
      .catch((err) => window.alert(err.response.data.message));
  };

  return (
    <St.Container>
      <St.InnerBox>
        <St.Title>회원가입</St.Title>
        <St.Input
          data-testid='email-input'
          placeholder='이메일을 입력해주세요'
          onChange={onChange}
          name='email'
          autoComplete='off'
        />
        <St.Input
          data-testid='password-input'
          placeholder='비밀번호를 입력해주세요'
          onChange={onChange}
          type='password'
          name='password'
          autoComplete='off'
        />
        <St.Button
          data-testid='signin-button'
          onClick={onSubmit}
          disabled={validationCheck}
          style={{ backgroundColor: validationCheck ? 'grey' : '#5555ff' }}
        >
          회원가입
        </St.Button>
      </St.InnerBox>
    </St.Container>
  );
};

export default SignUp;
