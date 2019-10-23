import React from 'react';
import Header from "./components/Header";
import Body from "./components/Body";



export interface IUser {
    firstname:string,
    lastname:string,
    email:string
}

export const users:IUser[] =
    [
        {
           firstname:"Drazen",
           lastname:"Cvjetkovic",
           email:"drazen.cvjetkovic@mail.hr"
        },
        {
            firstname:"Ivan",
            lastname:"Ivankovic",
            email:"ivanivanko@mail.com"
        }
    ]



const App: React.FC = () => {

    const [loggedUser ,setLoggedUser] = React.useState("drazen.cvjetkovic@mail.hr")

    return (
        <>

            <Header users={users} loggedUser={loggedUser} setLoggedUser={setLoggedUser}/>
            <Body/>
        </>
    );
}

export default App;
