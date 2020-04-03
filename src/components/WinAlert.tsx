import * as React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from "@material-ui/core";
import { lightGreen, red } from "@material-ui/core/colors";

interface IWinAlertProps {
  onClose: Function;
  open: boolean;

  player: string;
  points: number;
}

const WinAlert = (props: IWinAlertProps) => {

  return (
    <div>
    
      <Dialog
        disableEscapeKeyDown
        fullWidth
        maxWidth={"xs"}
        open={props.open}
     
      >
        <DialogTitle style={{ textAlign: "center" }}>
          Bravo {props.player} !!! Došao si do kraja igre."
          Osvoijo si {props.points} bodova.
        </DialogTitle>
        <DialogContent>
          <DialogContentText style={{ textAlign: "center" }}>
            
            Klikni za sljedeću zastavu.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => props.onClose()}
            fullWidth={true}
            size="large"
            variant={"outlined"}
            style={{ backgroundColor: "lightblue" }}
          >
            {"Spremi"}
          </Button>
          {/*  <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default WinAlert;
