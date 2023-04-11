import React, { useEffect } from 'react';
import useTodo from './hooks/useTodo';
import * as St from '../account/style';

const Todo = () => {
  const {
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
  } = useTodo();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

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
            name='todoInput'
            value={inputs.todoInput}
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
                <input
                  type='checkbox'
                  onClick={() => {
                    checkComplete(todo);
                  }}
                />
                {editMode === todo.id ? (
                  <>
                    <input
                      defaultValue={todo.todo}
                      data-testid='modify-input'
                      name='editInput'
                      onChange={onChange}
                    />
                    <button
                      data-testid='submit-button'
                      onClick={() => updateTodo(todo)}
                    >
                      제출
                    </button>
                    <button
                      data-testid='cancel-button'
                      onClick={() => handleEditMode(0)}
                    >
                      취소
                    </button>
                  </>
                ) : (
                  <>
                    <span>{todo.todo}</span>
                    <button
                      data-testid='modify-button'
                      onClick={() => handleEditMode(todo.id)}
                    >
                      수정
                    </button>
                    <button
                      data-testid='delete-button'
                      onClick={() => deleteTodo(todo.id)}
                    >
                      삭제
                    </button>
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
