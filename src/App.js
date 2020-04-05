import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: ""
    };
  }

  // テキストボックスの内容が変化した場合にnewTodoという変数のStateが変更される
  handleChange(e) {
    this.setState({ newTodo: e.target.value });
  }

  // ADDボタンが押された時にもし内容がからだったらtodoをそのまま返し値があった場合はtodoにnewTodoを代入しtodosの値を更新する
  // またnewTodoをからに戻す
  addTodo() {
    if (this.state.newTodo === "") return;
    const todos = this.state.todos;
    todos.push(this.state.newTodo);
    this.setState({ todos: todos });
    this.setState({ newTodo: "" });
  }

  // 引数番号の要素を削除し, todosのStateを変更する.
  deletTodo(i) {
    const todos = this.state.todos;
    // spliceで消す配列番号を指定する. １をつけないとごそっとなくなるらいい
    todos.splice(i, 1);
    this.setState({ todos: todos });
  }

  render() {
    return (
      <div>
        <h3>My ToDo</h3>
        <input value={this.state.newTodo}
          onChange={this.handleChange.bind(this)}
          placeholder="Input here..." />
        <button onClick={this.addTodo.bind(this)}>ADD</button>

        <h5>ToDo List</h5>
        <ul>
          {
            this.state.todos.map((todo, i) => {
              return (
                <li key={i}>
                  {todo}
                  <button onClick={this.deletTodo.bind(this, i)}>DEL</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default App;