import React, { Component } from 'react';
import Child from './component/Child'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentValue: 100
    };
  }

  addValueParent(value) {
    const newValue = this.state.parentValue + value;
    this.setState({ parentValue: newValue });
  }

  deleteTodo(id) {
    let todos = this.state.todos;
    todos = todos.filter((todo) => todo.id !== id);
    this.setState({ todos: todos });
  }

  render() {
    return (
      <Child pval={this.state.parentValue}
        add={this.addValueParent.bind(this)}></Child>
    );
  }
}

export default App;