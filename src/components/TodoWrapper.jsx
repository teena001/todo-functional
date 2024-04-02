import React, { useState } from 'react'
import TodoForm from './TodoForm'
import {v4 as uuidv4} from 'uuid';
import TodoList from './TodoList';
import EditTodoForm from './EditTodoForm';
uuidv4();

const TodoWrapper = () => {

  const [todoLists, setTodoLists] = useState([]);

  const addTodoList = todo => {
    setTodoLists([...todoLists, {id:uuidv4(), 
      task:todo, completed: false, 
      isEditing: false}])
  }

  const toggleCompleted = (id) => {
    setTodoLists(todoLists.map(todo => 
      todo.id === id ? {...todo, completed: !todo.completed } : todo
  ))
  }

  const deleteTask =(id) => {
    setTodoLists(todoLists.filter((todo) => todo.id !== id ))
  }

  const editTodo = (id) => {
    setTodoLists(
      todoLists.map(todo=>
        todo.id === id ? 
      {...todo, isEditing: !todo.isEditing}
       : todo ))
  }

  const updateTaskList = (task,id) =>{
    setTodoLists(
      todoLists.map(
        todo=>todo.id === id ? 
      {...todo,task,  isEditing: !todo.isEditing} 
      : todo))
  }
  return (
    <div className='todo-wrapper'>
      <TodoForm addTodoList={addTodoList} />
      <h2> Todo Lists</h2> 

     {
      todoLists.map((todo, index) => {
        return (

          todo.isEditing ? (
            <EditTodoForm  task={todo} updateTaskList={updateTaskList}/>
          ) : (
          <TodoList key={index} 
          task={todo} 
          toggleCompleted={toggleCompleted} 
          deleteTask={deleteTask}
         editTodo = {editTodo}
          />
          )
        )
      })
     }

     {todoLists.length <1 && 
     
     <div className='empty-list'>Please Add List</div>
     }
     
      
     
      
    </div>
  )
}

export default TodoWrapper