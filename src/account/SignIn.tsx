import React, { useEffect } from 'react';
import useAuth from './hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import * as St from '../style/style';
import { axiosInstance } from './data/axiosInstance';

const SignIn = () => {
  const { inputs, checkAuth, validationCheck, onChange } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const onSubmit = async (): Promise<void> => {
    await axiosInstance
      .post('auth/signin', {
        email: inputs.email,
        password: inputs.password
      })
      .then((res) => {
        localStorage.setItem('access_token', res.data.access_token);
        window.alert('로그인이 완료되었습니다. TodoList페이지로 이동합니다.');
        navigate('/todo');
      })
      .catch((err) => window.alert(err.response.data.message));
  };

  return (
    <St.Container>
      <St.InnerBox>
        <St.Title>로그인</St.Title>
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
        <St.SignButton
          data-testid='signin-button'
          onClick={onSubmit}
          disabled={validationCheck}
          style={{ backgroundColor: validationCheck ? 'grey' : '#5555ff' }}
        >
          로그인
        </St.SignButton>
      </St.InnerBox>
    </St.Container>
  );
};

export default SignIn;
