import React, { SyntheticEvent, useRef, useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import { User } from "../../models/User";
import ErrorModal from "../UI/ErrorModal";

interface AddUserProps {
  addUserToList: ({ name, age }: User) => void;
}

const AddUser = ({ addUserToList }: AddUserProps) => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const ageInputRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState({ title: "", message: "" });

  const addUserHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    const enteredUsername = (nameInputRef.current as HTMLInputElement).value;
    const enteredAge = (ageInputRef.current as HTMLInputElement).value;

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Empty Input",
        message: "Username or Age field is empty!",
      });
      return;
    }

    if (parseInt(enteredAge) < 1) {
      setError({ title: "Invalid Input", message: "Age less than 1!" });
      return;
    }

    addUserToList({ name: enteredUsername, age: enteredAge });
    /* changing DOM state like below is not recommended, but is probably okay for this simple use case */
    (nameInputRef.current as HTMLInputElement).value = "";
    (ageInputRef.current as HTMLInputElement).value = "";
  };

  const okayHandler = () => {
    setError({ title: "", message: "" });
  };

  return (
    <>
      {error.title.length > 0 && error.message.length > 0 && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onOkay={okayHandler}
        />
      )}
      <Card className={classes.input}>
        <form>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            type="text"
            id="age"
            ref={ageInputRef}
          />
          <Button
            type="submit"
            onClick={addUserHandler}
          >
            Add User
          </Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
