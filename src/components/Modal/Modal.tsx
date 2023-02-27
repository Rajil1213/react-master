import React from "react";
import classes from "./Modal.module.css";

interface ModalProps {
  closed: () => void;
}

const Modal = (props: ModalProps) => {
  return (
    <div className={classes.Modal}>
      <h1>A Modal</h1>
      <button
        className="Button"
        onClick={props.closed}
      ></button>
    </div>
  );
};

export default Modal;
