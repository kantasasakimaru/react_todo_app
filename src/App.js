import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeletIcon from '@material-ui/icons/Delete';
import Divider from '@material-ui/core/Divider';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: "1", text: "todo 1" },
        { id: "2", text: "todo 2" },
        { id: "3", text: "todo 3" }
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
      <List>
        {
          this.state.todos.map((todo) => {
            return (
              <div>
                <ListItem key={todo.id}>
                  <ListItemText>{todo.text}</ListItemText>
                  <IconButton variant="fab" aria-label="delete"
                    onClick={this.deleteTodo.bind(this, todo.id)}>
                    <DeletIcon />
                  </IconButton>
                </ListItem>
                <Divider />
              </div>
            )
          })
        }
      </List>

    )
  }
}

export default App;