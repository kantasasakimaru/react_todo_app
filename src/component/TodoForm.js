import React, { Component } from 'react';

class TodoForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newTodo: ""
        };
    }

    handleChange(e) {
        this.setState({ newTodo: e.target.value });
    }

    // proprsに新しい予定を渡している.
    // 一方でStateに新しい予定の追加は行なっていない.
    addTodo() {
        if (this.state.newTodo === "") return;
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.push(this.state.newTodo);
        localStorage.setItem('todos', JSON.stringify(todos));
        this.setState({ newTodo: "" });
    }

    render() {
        return (
            <div>
                <h3>My Todo</h3>
                <input value={this.state.newTodo}
                    onChange={this.handleChange.bind(this)}
                    placeholder="Input here..."
                />

                <button onClick={this.addTodo.bind(this)}>ADD</button>
            </div>
        );
    }
}

export default TodoForm;