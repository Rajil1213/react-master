import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [lostFocus, setLostFocus] = useState(false);

  const valueInvalid = lostFocus && !validateValue(enteredValue);

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const blurHandler = (event) => {
    setLostFocus(true);
  };

  const reset = () => {
    setEnteredValue("");
    setLostFocus(false);
  };

  return {
    value: enteredValue,
    lostFocus,
    valueInvalid,
    valueChangeHandler,
    blurHandler,
    reset,
  };
};

export default useInput;
