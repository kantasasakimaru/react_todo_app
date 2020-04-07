import React, { Component } from 'react';
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';

class App extends Component {

  render() {
    return (
      <div>
        <TodoForm></TodoForm>
        <TodoList></TodoList>
      </div>
    );
  }
}

export default App;