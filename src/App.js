import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';

class App extends Component {

  render() {
    return (
      <div>
        <h3>My Todo</h3>
        <Route path="/" component={TodoList} exact={true} />
        <Route path="/todos/add" component={TodoForm} />
      </div>
    );
  }
}

export default App;