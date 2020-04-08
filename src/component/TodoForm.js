import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardAction from '@material-ui/core/CardContent';
import TextFild from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './TodoForm.css'

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
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Link to="/" className="tolbar-left">
                            <ArrowBack style={{ color: 'white' }} />
                        </Link>
                        <Typography variant="title" color="inherit" className="toolbar-center">
                            My Todo
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Card>
                    <CardContent>
                        <TextFild value={this.state.newTodo}
                            onChange={this.handleChange.bind(this)}
                            placeholder="Input here..."
                            className="input-field" />
                    </CardContent>
                    <CardAction>
                        <Button variant="contained" color="primary"
                            onClick={this.addTodo.bind(this)}>
                            ADD
                        </Button>
                    </CardAction>
                </Card>
            </div>
        );
    }
}

export default TodoForm;