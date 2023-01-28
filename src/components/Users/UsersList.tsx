import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

interface UsersListProps {
  users: { name: string; age: string }[];
}

const UsersList = ({ users }: UsersListProps) => {
  return (
    <Card className={classes.users}>
      <ul>
        {users.map((user) => (
          <li key={users.indexOf(user)}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
