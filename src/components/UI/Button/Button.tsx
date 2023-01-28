import React, { PropsWithChildren, ReactNode } from "react";

import styles from "./Button.module.css";

interface ButtonProps {
  type: "submit" | "button";
  children: ReactNode;
}

const Button = ({ type, children }: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      type={type}
      className={styles.button}
    >
      {children}
    </button>
  );
};

export default Button;
