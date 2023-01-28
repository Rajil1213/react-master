import React, {
  SyntheticEvent,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/AuthContext";
import Input from "../UI/Input/Input";

type BlurActions = "INPUT_BLUR" | "PW_INPUT_BLUR";

type EmailAction =
  | {
      type: string;
      val: string;
    }
  | {
      type: BlurActions;
    };
interface UserInputState {
  value: string;
  isValid: boolean;
}

const inputReducer = (
  state: UserInputState,
  action: EmailAction
): UserInputState => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }

  if (action.type === "PW_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 7 };
  }

  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }

  if (action.type === "PW_INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 7 };
  }

  return { value: "", isValid: false };
};

const Login = () => {
  const ctx = useContext(AuthContext);
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState(false);
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer<typeof inputReducer>(
    inputReducer,
    { value: "", isValid: false }
  );

  const [pwState, dispatchPw] = useReducer<typeof inputReducer>(inputReducer, {
    value: "",
    isValid: false,
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: pwIsValid } = pwState;

  useEffect(() => {
    /* save a timer that checks for form validity every 5 ms */
    const timer = setTimeout(() => {
      console.log("Checking form validity...");
      setFormIsValid(emailIsValid && pwIsValid);
    }, 500);

    /* return the cleanup function */
    return () => {
      console.log("Cleaning up...");
      /* reset the timer when new key is pressed */
      clearTimeout(timer);
    };
  }, [emailIsValid, pwIsValid]);

  const emailChangeHandler = (event: SyntheticEvent) => {
    dispatchEmail({
      type: "USER_INPUT",
      val: (event.target as HTMLInputElement).value,
    });
  };

  const passwordChangeHandler = (event: SyntheticEvent) => {
    dispatchPw({
      type: "PW_INPUT",
      val: (event.target as HTMLInputElement).value,
    });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPw({ type: "PW_INPUT_BLUR" });
  };

  const submitHandler = (event: SyntheticEvent) => {
    event.preventDefault();
    if (formIsValid) {
      ctx.onLogin(emailState.value, pwState.value);
    } else if (!emailState.isValid) {
      (emailRef.current as HTMLInputElement).focus();
    } else {
      (passwordRef.current as HTMLInputElement).focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailRef}
          id="email"
          type="email"
          label="E-mail"
          value={emailState.value}
          isValid={emailState.isValid}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordRef}
          id="password"
          type="password"
          label="Password"
          value={pwState.value}
          isValid={pwState.isValid}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button
            type="submit"
            className={classes.btn}
            // disabled={!formIsValid}
            disabled={false}
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
