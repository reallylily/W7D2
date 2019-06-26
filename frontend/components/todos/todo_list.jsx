import React from 'react'
import TodoListItem from './todo_list_item'; 

 const ToDoList = props => (
  <div>
    <h1>Tasks: </h1>
    <ul>
      {props.todos.map(todo => <TodoListItem todo={todo} key={todo.id} />)}
    </ul>
  </div>
)

export default ToDoList;

// class ToDoList extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <h1>Tasks: </h1>
//         <ul>
//           {this.props.todos.map(todo => <TodoListItem todo={todo} key={todo.id}/>)}
//         </ul>
//       </div>
//     );
//   }
// }

// export default ToDoList;
