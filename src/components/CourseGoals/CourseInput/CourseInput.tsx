import React, { SyntheticEvent, useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

type CourseInputProps = {
  onAddGoal: (enteredValue: string) => void;
};

const CourseInput = ({ onAddGoal }: CourseInputProps) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event: SyntheticEvent) => {
    const value = (event.target as HTMLInputElement).value;
    if (value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue((event.target as HTMLInputElement).value);
  };

  const formSubmitHandler = (event: SyntheticEvent) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
