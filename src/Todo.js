import React from 'react'
import '../src/style.css'

export default function Todo({ todo, toggleTodo}) {
    function handleTodoClick() {
        toggleTodo(todo.id)
    }

  return (
    <div>
        <label class="check-box">
            <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>
            {todo.name}
        </label>
    </div>
  )
}
