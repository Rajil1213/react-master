import React, { PropsWithChildren, SyntheticEvent } from "react";

import classes from "./Button.module.css";

interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  onClick: (e: SyntheticEvent) => void;
}

const Button = ({
  type,
  children,
  onClick,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={classes.button}
      type={type || "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
