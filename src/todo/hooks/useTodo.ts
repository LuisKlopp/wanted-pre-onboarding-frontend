import React, { useState, useCallback, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../account/data/axiosInstance';
import { getToken } from '../../token/token';

type Todo = {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
};

const headers = {
  Authorization: 'Bearer ' + getToken()
};

const useTodo = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    todoInput: '',
    editInput: ''
  });
  const [editMode, setEditMode] = useState(0);
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const getTodos = useCallback(async () => {
    const response = await axiosInstance.get('/todos', { headers });
    setTodoList(response.data);
  }, []);

  const createTodo = async () => {
    if (inputs.todoInput !== '') {
      await axiosInstance.post(
        '/todos',
        { todo: inputs.todoInput },
        { headers }
      );
      setInputs({
        ...inputs,
        todoInput: ''
      });
      getTodos();
    }
  };

  const checkComplete = (todo: Todo) => {
    setTodoList(
      todoList.map((item) => {
        return item.id === todo.id
          ? { ...item, isCompleted: !item.isCompleted }
          : item;
      })
    );
    console.log(todoList);
  };

  const checkAuth = useCallback(() => {
    if (!getToken()) {
      window.alert('로그인 해주세요!');
      navigate('/signin');
    } else {
      getTodos();
    }
  }, [getTodos, navigate]);

  const deleteTodo = async (id: number) => {
    await axiosInstance.delete(`/todos/${id}`, { headers });
    getTodos();
  };

  const updateTodo = async (todo: Todo) => {
    await axiosInstance.put(
      `/todos/${todo.id}`,
      {
        todo: inputs.editInput,
        isCompleted: todo.isCompleted
      },
      { headers }
    );
    getTodos();
    setEditMode(0);
  };

  const handleEditMode = (id: number) => {
    setEditMode(id);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  return {
    inputs,
    setInputs,
    editMode,
    setEditMode,
    todoList,
    setTodoList,
    checkAuth,
    checkComplete,
    getTodos,
    createTodo,
    deleteTodo,
    updateTodo,
    handleEditMode,
    onChange
  };
};

export default useTodo;
