import React from "react"; 

const TodoListItem = props =>  (
  <li>
    <h2>{props.todo.title}</h2>
    <p>{props.todo.body}</p>
  </li>
)

export default TodoListItem
