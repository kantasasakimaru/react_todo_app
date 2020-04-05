import React, { Component } from 'react';
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  addTodo(newTodo) {
    const todos = this.state.todos;
    todos.push(newTodo);
    this.setState({ todos: todos });
  }

  deleteTodo(i) {
    const todos = this.state.todos;
    todos.splice(i, 1);
    this.setState({ todos: todos });
  }

  render() {
    return (
      <div>
        <TodoForm add={this.addTodo.bind(this)}></TodoForm>
        <TodoList todos={this.state.todos} del={this.deleteTodo.bind(this)}></TodoList>
      </div>
    );
  }
}

export default App;