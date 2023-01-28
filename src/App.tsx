import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

import { default as dummyUsers } from "./data/users";
import { User } from "./models/User";

function App() {
  const [usersList, setUsersList] = useState(dummyUsers);
  const addUserToListHandler = ({ name, age }: User) => {
    setUsersList((prevState) => [{ name, age }, ...prevState]);
  };

  return (
    <>
      <AddUser addUserToList={addUserToListHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
