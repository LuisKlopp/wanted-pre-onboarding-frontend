import { useState, useCallback, ChangeEvent } from 'react';
import { getToken } from '../../token/token';
import { useNavigate } from 'react-router-dom';

const emailCheckReg = /.*@.*/;
const passwordCheckReg = /^\S{8,}$/;

const useAuth = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });

  const checkAuth = useCallback(() => {
    if (getToken()) {
      navigate('/todo');
    }
  }, [navigate]);

  const validationCheck =
    !emailCheckReg.test(inputs.email) ||
    !passwordCheckReg.test(inputs.password);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.value
      });
    },
    [inputs]
  );

  return {
    inputs,
    setInputs,
    checkAuth,
    validationCheck,
    onChange
  };
};

export default useAuth;
