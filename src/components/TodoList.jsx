import React from 'react'

const TodoList = ({task, toggleCompleted,deleteTask, editTodo}) => {
  return (
    <div className='todo-list'>
        

        <div className='list-block'>
            <h4 onClick={() => toggleCompleted(task.id)} className={`${task.completed ? 'completed' : ''}`}>{task.task}</h4>
            <span className='text-primary'  onClick={() => editTodo(task.id)}><i className='fa fa-edit'></i></span>
            <span className='text-danger' onClick={() => deleteTask(task.id)}><i className='fa fa-trash'></i></span>
        </div>
    </div>
  )
}

export default TodoList