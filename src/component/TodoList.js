import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Divider from '@material-ui/core/Divider';
import './TodoList.css'
import TodoDetails from './TodoDetails'

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }

    componentDidMount() {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        this.setState({ todos: todos });
    }

    addTodo() {
        this.props.history.push('/todos/add')
    }

    // 削除するリスト番号をpropsに送っている？
    deleteTodo(i) {
        const todos = this.state.todos;
        todos.splice(i, 1)
        this.setState({ todos: todos });
        localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }

    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <div className="toolbar-left"></div>
                        <Typography variant="title" color="inherit" className="toolbar-center">
                            My Todo
                        </Typography>
                    </Toolbar>
                </AppBar>
                {this.state.todos !== null &&
                    <List>
                        {this.state.todos.map((todo, i) => {
                            return (
                                <div>
                                    <ListItem key={i}>
                                        <ListItemText>{todo}</ListItemText>
                                        <TodoDetails />
                                        <IconButton aria-label="Delete"
                                            onClick={this.deleteTodo.bind(this, i)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </ListItem>
                                    <Divider />
                                </div>
                            )
                        })
                        }
                    </List>
                }

                <div className="bottom-right">
                    <Button variant="fab" color="primary" aria-label="Add"
                        onClick={this.addTodo.bind(this)}>
                        <AddIcon />
                    </Button>
                </div>
            </div>
        );
    }
}

export default TodoList;