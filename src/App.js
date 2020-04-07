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

  componentDidMount() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    this.setState({ todos: todos })
  }

  // リストの追加処理を行なっている.
  addTodo(newTodo) {
    const todos = this.state.todos;
    todos.push(newTodo);
    this.setState({ todos: todos });
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }

  // 削除処理を実行している.
  deleteTodo(i) {
    const todos = this.state.todos;
    todos.splice(i, 1);
    this.setState({ todos: todos });
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
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