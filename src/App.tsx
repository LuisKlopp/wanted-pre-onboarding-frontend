import React, { useEffect } from 'react';
import SignUp from './account/SignUp';
import SignIn from './account/SignIn';
import Todo from './todo/Todo';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { getToken } from './token/token';

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (getToken()) {
      navigate('/todo');
    } else {
      navigate('/signin');
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path='/signup' element={<SignUp />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/todo' element={<Todo />} />
    </Routes>
  );
}

export default App;
