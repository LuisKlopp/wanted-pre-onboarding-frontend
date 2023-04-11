import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useTodo from './hooks/useTodo';
import * as St from '../account/style';
import { getToken } from '../token/token';

const Todo = () => {
  const navigate = useNavigate();
  const {
    inputs,
    editMode,
    setEditMode,
    todoList,
    getTodos,
    checkComplete,
    createTodo,
    deleteTodo,
    updateTodo,
    handleEditMode,
    onChange
  } = useTodo();

  useEffect(() => {
    if (!getToken()) {
      window.alert('로그인 해주세요!');
      navigate('/signin');
    } else {
      getTodos();
    }
  }, []);

  return (
    <St.Container>
      <St.InnerBox style={{ height: '700px', justifyContent: 'flex-start' }}>
        <St.CenterBox style={{ flexDirection: 'column' }}>
          <St.Title>Todo List</St.Title>
          <St.CenterBox>
            <St.Input
              data-testid='new-todo-input'
              placeholder='할일을 입력해주세요'
              onChange={onChange}
              name='todoInput'
              value={inputs.todoInput}
            />
            <St.Button data-testid='new-todo-add-button' onClick={createTodo}>
              추가
            </St.Button>
          </St.CenterBox>
        </St.CenterBox>
        <ul style={{ width: '100%' }}>
          {todoList.map((todo) => (
            <li key={todo.id}>
              <label>
                <input
                  type='checkbox'
                  onClick={() => {
                    checkComplete(todo);
                  }}
                />
                {editMode === todo.id ? (
                  <>
                    <St.Input
                      defaultValue={todo.todo}
                      data-testid='modify-input'
                      name='editInput'
                      onChange={onChange}
                      style={{ width: '250px' }}
                    />
                    <div>
                      <St.Button
                        data-testid='submit-button'
                        onClick={() => updateTodo(todo)}
                      >
                        제출
                      </St.Button>
                      <St.Button
                        data-testid='cancel-button'
                        onClick={() => setEditMode(0)}
                      >
                        취소
                      </St.Button>
                    </div>
                  </>
                ) : (
                  <>
                    <span>{todo.todo}</span>
                    <div>
                      <St.Button
                        data-testid='modify-button'
                        onClick={() => handleEditMode(todo)}
                      >
                        수정
                      </St.Button>
                      <St.Button
                        data-testid='delete-button'
                        onClick={() => deleteTodo(todo.id)}
                      >
                        삭제
                      </St.Button>
                    </div>
                  </>
                )}
              </label>
            </li>
          ))}
        </ul>
      </St.InnerBox>
    </St.Container>
  );
};

export default Todo;
function getTodos() {
  throw new Error('Function not implemented.');
}
