import React from "react"; 

class TodoForm extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      id:  0, 
      title: '', 
      body: ''
    }; 
  
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  } 

  updateTitle(e) {
    this.setState({
      title: e.currentTarget.value 
    });
  }

  updateBody(e) {
    this.setState({
      body: e.currentTarget.value 
    });
  }

  handleSubmit(e) {
    e.preventDefault(); 
    this.props.receiveTodo(this.state);
    this.setState({
      id: this.state.id + 1,
      title: '',
      body: ''
    });
  }

  render() { 
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Add Todo</h2>
        <label>Title:
          <input
            type="text"
            value={this.state.title}
            onChange={this.updateTitle}
          />
        </label>
        <label>Body:
          <input
            type="text"
            value={this.state.body}
            onChange={this.updateBody}
          />
        </label>
        <input type="submit" value="Add New Todo!!" />
      </form>
    );
  }
}


export default TodoForm; 