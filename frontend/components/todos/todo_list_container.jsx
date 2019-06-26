import { connect } from 'react-redux';
import { receiveTodos } from '../../actions/todo_actions';

import ToDoList from './todo_list';
import allTodos from '../../reducers/selectors'

const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchProps = dispatch => ({
  receiveTodos: todo => dispatch(receiveTodos(todo))
});

export default connect(mapStateToProps, mapDispatchProps)(ToDoList);