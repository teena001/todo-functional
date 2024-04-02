import React, { useState } from 'react'

const EditTodoForm = ({updateTaskList, task}) => {

    
    const [value, setValue] =useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTaskList(value, task.id); 
  }


  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input type='text' 
        className='todo-input' 
        placeholder='Update task' 
        onChange={(e) => setValue(e.target.value)}
        value={value}
        />
        <button type='submit' className='todo-btn' >Update Task</button>
    </form>
  )
}

export default EditTodoForm