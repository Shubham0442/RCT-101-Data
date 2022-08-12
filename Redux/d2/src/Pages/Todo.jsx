import React from 'react'
import TodoInput from '../Components/TodoInput'
import TodoList from './TodoList'

const Todo = () => {
  return (
    <div>
        <h2>Todo</h2>
        <TodoInput/>
        <br />
        <TodoList/>
    </div>
  )
}

export default Todo