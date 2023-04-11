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

const useTodo = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    todoInput: '',
    editInput: ''
  });
  const [editMode, setEditMode] = useState(0);
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const getTodos = useCallback(async () => {
    await axiosInstance.get('/todos').then((res) => setTodoList(res.data));
  }, []);

  const createTodo = async () => {
    if (inputs.todoInput !== '') {
      await axiosInstance.post('/todos', { todo: inputs.todoInput });
      setInputs({
        ...inputs,
        todoInput: ''
      });
      getTodos();
    }
  };
  const checkAuth = useCallback(() => {
    if (!getToken()) {
      window.alert('로그인 해주세요!');
      navigate('/signin');
    } else {
      getTodos();
    }
  }, []);

  const checkComplete = (todo: Todo) => {
    setTodoList(
      todoList.map((item) => {
        return item.id === todo.id
          ? { ...item, isCompleted: !item.isCompleted }
          : item;
      })
    );
  };

  const deleteTodo = async (id: number) => {
    await axiosInstance.delete(`/todos/${id}`);
    getTodos();
  };

  const updateTodo = async (todo: Todo) => {
    await axiosInstance.put(`/todos/${todo.id}`, {
      todo: inputs.editInput,
      isCompleted: todo.isCompleted
    });
    setInputs({ ...inputs, editInput: '' });
    getTodos();
    setEditMode(0);
  };

  const handleEditMode = (todo: Todo) => {
    setInputs({ ...inputs, editInput: todo.todo });
    setEditMode(todo.id);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  return {
    inputs,
    editMode,
    setEditMode,
    todoList,
    checkAuth,
    checkComplete,
    createTodo,
    deleteTodo,
    updateTodo,
    handleEditMode,
    onChange
  };
};

export default useTodo;
