import * as React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@material-ui/core';
import { lightGreen, red } from '@material-ui/core/colors';

interface IAlertProps {
  onClose: Function;
  open: boolean;
  lose?: boolean;
  country?: string;
}

const Alert = (props: IAlertProps) => {
  const country = props.country && props.country.toUpperCase();
  return (
    <div>
      {/*  <Button variant="outlined" color="primary" onClick={handleClickOpen}>
     Open alert dialog
   </Button> */}

      <Dialog
        disableEscapeKeyDown
        fullWidth
        maxWidth={'xs'}
        open={props.open}
        // style={{width:"450px" ,textAlign:"center"}}
        //  onClose={() => props.setAlert()}
      >
        <DialogTitle style={{ textAlign: 'center' }}>
          {props.lose ? 'Izgubio si' : country + ' odlično'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText style={{ textAlign: 'center' }}>
            {props.lose
              ? 'Potrošio si sve dozvoljene promašaje,klikni za novu igru.'
              : 'Klikni za sljedeću zastavu.'}
          </DialogContentText>
        </DialogContent>
        <DialogActions onDragEnter={() => props.onClose()}>
          <Button
            //onClick={() => props.onClose()}
            onKeyDown={() => props.onClose()}
            onBlur={() => props.onClose()}
            fullWidth={true}
            size='large'
            variant={'outlined'}
            style={{ backgroundColor: 'lightblue' }}
          >
            {'Start'}
          </Button>
          {/*  <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default Alert;
