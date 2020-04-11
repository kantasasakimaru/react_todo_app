import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

class TodoDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            detailContent: "",
            newContent: "",
        };
    }

    componentDidMount() {
        const content = JSON.parse(localStorage.getItem('detailContents')) || [];
        this.setState({ detailContent: content });
    }

    handleChange(e) {
        this.setState({ newContent: e.target.value });
        console.warn(e.target.value);
    }

    handleClickOpen() {
        this.setState({ open: true });
    }

    handleClickClose() {
        this.setState({ open: false });
    }

    handleSave(e) {
        if (this.state.newContent === "") return;
        console.warn(this.state.newContent);
        localStorage.setItem('detailContents', this.state.newContent);
        this.setState({ newTodo: "" });
    }

    render() {
        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen.bind(this)}>
                    Todo 詳細
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.state.open}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"やることの詳細"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <form noValidate autoComplete="off">
                                <TextField
                                    onChange={this.handleClickOpen.bind(this)}
                                    defaultValue={this.state.detailContent}
                                    id="outlined-basic" label="詳細内容" variant="outlined" />
                            </form>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button color="primary"
                            onClick={this.handleSave.bind(this)}
                        >
                            保存
                    </Button>
                        <Button color="primary"
                            onClick={this.handleClickClose.bind(this)}
                        >
                            閉じる
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default TodoDetails;