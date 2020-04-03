import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import MyAppBar from "./components/MyAppBar";

export interface IUser {
  firstname: string;
  lastname: string;
  email: string;
}

export const users: IUser[] = [
  {
    firstname: "Drazen",
    lastname: "Cvjetkovic",
    email: "drazen.cvjetkovic@mail.hr",
  },
  {
    firstname: "Ivan",
    lastname: "Ivankovic",
    email: "ivanivanko@mail.com",
  },
];

const App: React.FC = () => {
  const [loggedUser, setLoggedUser] = React.useState(
    "drazen.cvjetkovic@mail.hr"
  );
  const [player, setPlayer] = React.useState(String);
  const [points, setPoints] = React.useState(Number);


  return (
    <>
      {/* <Header users={users} loggedUser={loggedUser} setLoggedUser={setLoggedUser}/> */}
      <MyAppBar points={points} setPlayer={setPlayer} />

      {player && <Body setPoints={setPoints} points={points} player={player}/>}
    </>
  );
};

export default App;
