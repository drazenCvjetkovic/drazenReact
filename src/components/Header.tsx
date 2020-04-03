import * as React from "react";
import MyAppBar from "./MyAppBar";

import {IUser} from "../App"

interface IHeaderProps {
    users:IUser[]
    setLoggedUser:Function,
    loggedUser:string
}

//TODO::Napraviti negdje switch loggedUsera, expand ikona koja expanda listu svig usera
const Header =(props:IHeaderProps) => {
    return (

        <>
           
            {/* <MyAppBar loggedUser={props.loggedUser} users={props.users}/> */}

        
            </>
    )
}

export default Header
