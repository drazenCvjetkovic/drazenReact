import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { IUser } from "../App";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Card,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: "green",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    container: {
      display: "block",
      //  width:"400px",
      marginLeft: "auto",
      marginRight: "auto",
      // flexWrap: "wrap"
    },
    textField: {

    },
    button: {
      backgroundColor: "lightblue",
      textAlign:"center",
      marginTop:10
    },
   card: {
     padding:30,
     backgroundColor:"lightGrey"
   }
  })
);

interface IMyAppBarProps {
  // users: IUser[]
  points: number;
  setPlayer: Function
}

const MyAppBar = (props: IMyAppBarProps) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [name, setName] = React.useState("");

  const handleSave = () => {
    props.setPlayer(name)
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color={"inherit"}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          {/*  {props.users.map((user: IUser) => {

                        if (user.email === props.loggedUser
                        ) {
                            return (
                                <Typography variant="h6" className={classes.title}>
                                    Dobro došao {user.firstname + " " + user.lastname}
                                </Typography>
                            )
                        } */}

          <Typography variant="h6" className={classes.title}>
            Dobro došao {name}
          </Typography>

          <Typography
            variant="h6"
            className={classes.title}
            style={{ textAlign: "right" }}
          >
            Bodovi:
            {props.points}
          </Typography>

          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>

      <Dialog
        disableEscapeKeyDown
        fullWidth
        fullScreen
        // maxWidth={"xs"}
        open={open}
        // style={{width:"450px" ,textAlign:"center"}}
        //  onClose={() => props.setAlert()}
      >
        <DialogTitle style={{ textAlign: "center" }}>Upiši ime</DialogTitle>
        <DialogContent className={classes.container}>
         {/*  <DialogContentText style={{ textAlign: "center" }}>
            enter name
          </DialogContentText> */}

          <Card className={classes.card} >
            <form>
              <div>
                <TextField
                  label="Ime"
                  className={classes.textField}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                   // placeholder={"Email"}
                />
              </div>
              <Button
              fullWidth
                variant={"outlined"}
                color={"primary"}
               className={classes.button}
                onClick={() => handleSave()}
              >
                Spremi
              </Button>
            </form>
          </Card>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MyAppBar;
