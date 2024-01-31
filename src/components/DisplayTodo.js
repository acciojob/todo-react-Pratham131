import React from 'react'

const DisplayTodo = ({todoList, setTodoList}) => {

  function deleteTodo(id){
    setTodoList(todoList.filter(todo=>todo.id != id))
  }

  return (
    <div>
      {/* <h1>Display Todo</h1> */}
      <ul>
        {
            todoList.map(todo => (
                <li key={todo.id}>{todo.title}
                <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default DisplayTodo
