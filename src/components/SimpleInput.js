import React from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const minCharactersInName = 3;
  const {
    value: enteredName,
    valueInvalid: isNameInvalid,
    lostFocus: lostNameFocus,
    valueChangeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((val) => val.trim().length >= minCharactersInName);
  const {
    value: enteredEmail,
    valueInvalid: isEmailInvalid,
    lostFocus: lostEmailFocus,
    valueChangeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((val) => val.trim().includes("@"));

  const isFormInvalid =
    !lostNameFocus || !lostEmailFocus || isNameInvalid || isEmailInvalid;

  const submitHandler = (event) => {
    event.preventDefault();

    if (isNameInvalid || isEmailInvalid) return;

    console.log(`Submitting form for ${enteredName}:${enteredEmail}`);
    resetEmail();
    resetName();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          className={isNameInvalid ? "invalid" : ""}
          onBlur={nameBlurHandler}
        />
        {isNameInvalid && (
          <p style={{ color: "red" }}>Please enter a valid username.</p>
        )}
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          className={isEmailInvalid ? "invalid" : ""}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {isEmailInvalid && (
          <p style={{ color: "red" }}>Email should include an @ symbol.</p>
        )}
      </div>
      <div className="form-actions">
        <button
          disabled={isFormInvalid}
          className={isFormInvalid ? "button-disable" : ""}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
