import React from 'react';
import SignUp from './account/SignUp';
import SignIn from './account/SignIn';
import Todo from './todo/Todo';
import { Routes, Route } from 'react-router-dom';
import Main from './Main';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/todo' element={<Todo />} />
    </Routes>
  );
}

export default App;
