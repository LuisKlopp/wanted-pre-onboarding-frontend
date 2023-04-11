import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from './token/token';

const Main = () => {
  const navigate = useNavigate();
  useEffect(() => {
    getToken() ? navigate('/todo') : navigate('/signin');
  }, [navigate]);

  return <div></div>;
};

export default Main;
