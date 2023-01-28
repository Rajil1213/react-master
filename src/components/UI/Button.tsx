import React, { PropsWithChildren, SyntheticEvent } from "react";

import classes from "./Button.module.css";

interface ButtonProps {
  className: string;
  type: "submit" | "reset" | "button" | undefined;
  onClick: (e: SyntheticEvent) => void;
  disabled: boolean;
}

const Button = ({
  className,
  onClick,
  disabled,
  type,
  children,
}: PropsWithChildren<ButtonProps>) => {
  console.log("Rendering Button...");
  return (
    <button
      type={type || "button"}
      className={`${classes.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
