import React, { useState } from 'react'

const TodoForm = ({addTodoList}) => {

  const [value, setValue] =useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoList(value);
    setValue('')
  }
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input type='text' 
        className='todo-input' 
        placeholder='Enter Task Name' 
        onChange={(e) => setValue(e.target.value)}
        value={value}
        />
        <button type='submit' className='todo-btn' >Add Task</button>
    </form>
  )
}

export default TodoForm