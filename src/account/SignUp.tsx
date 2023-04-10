import React from 'react';
import * as St from './style';

const SignIn = () => {
  return (
    <St.Container>
      <St.InnerBox>
        <St.Title>회원가입</St.Title>
        <St.Input />
        <St.Input />
        <St.Button>회원가입</St.Button>
      </St.InnerBox>
    </St.Container>
  );
};

export default SignIn;
