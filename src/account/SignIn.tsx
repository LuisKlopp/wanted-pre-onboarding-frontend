import React from 'react';
import * as St from './style';

const SignIn = () => {
  return (
    <St.Container>
      <St.InnerBox>
        <St.Title>로그인</St.Title>
        <St.Input />
        <St.Input />
        <St.Button>로그인</St.Button>
      </St.InnerBox>
    </St.Container>
  );
};

export default SignIn;
