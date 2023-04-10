import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../token/token';

const Todo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!getToken()) {
      window.alert('로그인 해주세요!');
      navigate('/signin');
    }
  }, []);

  return <div>todotodo</div>;
};

export default Todo;
