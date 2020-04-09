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
        };
    }

    handleChange(e) {
        this.setState({ detailContent: e.target.value });
    }

    handleClickOpen() {
        this.setState({ open: true });
    }

    handleClickClose() {
        this.setState({ open: false });

    }


    render() {
        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen.bind(this)}>
                    Todo 詳細
                </Button>
                <Dialog
                    open={true}
                    onClose={false}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"やることの詳細"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <form noValidate autoComplete="off">
                                <TextField
                                    onChange={this.handleClickOpen.bind(this)}
                                    id="outlined-basic" label="詳細内容" variant="outlined" />
                            </form>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button color="primary"
                            onClick={this.handleClickClose.bind(this)}
                        >
                            保存
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default TodoDetails;