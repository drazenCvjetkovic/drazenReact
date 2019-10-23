import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {IUser} from "../App";

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
    }),
);

interface IMyAppBarProps {
    users: IUser[]
    loggedUser: string
}

const MyAppBar = (props: IMyAppBarProps) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color={"inherit"} aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    {props.users.map((user: IUser) => {

                        if (user.email === props.loggedUser
                        ) {
                            return (
                                <Typography variant="h6" className={classes.title}>
                                    Dobro došao {user.firstname + " " + user.lastname}
                                </Typography>
                            )
                        }

                    })}

                    <Button color="inherit">Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default MyAppBar