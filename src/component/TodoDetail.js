import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export default function AlertDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '100%',
                color: 'white',
            },
        },
    }));

    const classes = useStyles();


    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Todo 詳細
      </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"やることの詳細"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField id="outlined-basic" label="詳細内容" variant="outlined" />
                        </form>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        保存
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}