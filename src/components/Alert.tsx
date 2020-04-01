import * as React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from "@material-ui/core";

interface IAlertProps {
  setAlert: Function;
  open: boolean;
}

//TODO::Napraviti negdje switch loggedUsera, expand ikona koja expanda listu svig usera
const Alert = (props: IAlertProps) => {
  return (
    <div>
      {/*  <Button variant="outlined" color="primary" onClick={handleClickOpen}>
     Open alert dialog
   </Button> */}

      <Dialog
        open={props.open}
        onClose={() => props.setAlert()}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Izgubio si"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Potrošio si sve dozvoljene promašaje
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => props.setAlert()}
            size="medium"
            variant={"outlined"}
            color="primary"
          >
            Nova igra
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
