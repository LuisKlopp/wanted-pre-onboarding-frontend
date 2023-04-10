import React, { useState, useEffect, ChangeEvent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../account/data/axiosInstance';
import * as St from '../account/style';
import { getToken } from '../token/token';

type Todo = {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
};

const headers = {
  Authorization: 'Bearer ' + getToken()
};

const Todo = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const getTodos = useCallback(async () => {
    const response = await axiosInstance.get('/todos', { headers });
    setTodoList(response.data);
  }, []);

  const createTodo = async () => {
    if (input !== '') {
      await axiosInstance.post('/todos', { todo: input }, { headers });
      setInput('');
      getTodos();
    }
  };

  console.log(input);

  const deleteTodo = async (id: number) => {
    await axiosInstance.delete(`/todos/${id}`, { headers });
    getTodos();
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (!getToken()) {
      window.alert('로그인 해주세요!');
      navigate('/signin');
    } else {
      getTodos();
    }
  }, [getTodos, navigate]);

  return (
    <St.Container>
      <St.InnerBox>
        <St.Title>Todo List</St.Title>
        <div
          style={{
            display: 'flex',
            justifyItems: 'center',
            alignItems: 'center'
          }}
        >
          <St.Input
            data-testid='new-todo-input'
            placeholder='할일을 입력해주세요'
            onChange={onChange}
            value={input}
            style={{ width: '150px' }}
          />
          <button data-testid='new-todo-add-button' onClick={createTodo}>
            추가
          </button>
        </div>
        <ul>
          {todoList.map((todo) => (
            <li key={todo.id}>
              <label>
                <input type='checkbox' />
                <span>{todo.todo}</span>
              </label>
              <button data-testid='modify-button'>수정</button>
              <button
                data-testid='delete-button'
                onClick={() => deleteTodo(todo.id)}
              >
                삭제
              </button>
            </li>
          ))}
        </ul>
      </St.InnerBox>
    </St.Container>
  );
};

export default Todo;
