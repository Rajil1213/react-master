import React from "react";
import classes from "./Modal.module.css";

interface ModalProps {
  show: boolean;
  closed: () => void;
}

const Modal = (props: ModalProps) => {
  return (
    <div
      className={`${classes.Modal} ${
        props.show ? classes.ModalOpen : classes.ModalClosed
      }`}
    >
      <h1>A Modal</h1>
      <button
        className="Button"
        onClick={props.closed}
      >
        Dismiss
      </button>
    </div>
  );
};

export default Modal;
