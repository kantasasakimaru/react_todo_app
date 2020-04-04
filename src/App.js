import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: "1", text: "todo1" },
        { id: "2", text: "todo2" },
        { id: "3", text: "todo3" }
      ]
    };
  }

  deleteTodo(id) {
    let todos = this.state.todos;
    todos = todos.filter((todo) => todo.id !== id);
    this.setState({ todos: todos });
  }

  render() {
    return (
      <ul>
        {
          this.state.todos.map((todo) => {
            return (
              <il key={todo.id}>{todo.text}
                <button onClick={this.deleteTodo.bind(this, todo.id)} x></button>

              </il>
            )
          })
        }
      </ul>
    );
  }
}

export default App;