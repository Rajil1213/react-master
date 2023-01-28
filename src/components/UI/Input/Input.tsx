import React, { SyntheticEvent, useImperativeHandle, useRef } from "react";

import classes from "./Input.module.css";

interface InputProps {
  isValid: boolean;
  value: string;
  id: string;
  type: string;
  label: string;
  onChange: (e: SyntheticEvent) => void;
  onBlur: (e: SyntheticEvent) => void;
}

const Input = React.forwardRef(
  ({ isValid, value, id, type, label, onChange, onBlur }: InputProps, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const activate = () => {
      (inputRef.current as HTMLInputElement).focus();
    };

    useImperativeHandle(ref, () => {
      return {
        focus: activate,
      };
    });

    return (
      <div className={`${classes.control} ${!isValid ? classes.invalid : ""}`}>
        <label htmlFor={id}>{label}</label>
        <input
          ref={inputRef}
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    );
  }
);

export default Input;
