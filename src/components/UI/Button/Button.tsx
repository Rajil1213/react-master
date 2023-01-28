import React, { PropsWithChildren } from "react";

import classes from "./Button.module.css";

interface ButtonProps {
  className: string;
  disabled: boolean;
  type: "submit" | "reset" | "button" | undefined;
}

const Button = ({
  className,
  type,
  disabled,
  children,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      type={type}
      className={`${classes.button} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
