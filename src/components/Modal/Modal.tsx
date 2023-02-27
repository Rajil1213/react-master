import React from "react";
import classes from "./Modal.module.css";
import { Transition, TransitionStatus } from "react-transition-group";

interface ModalProps {
  show: boolean;
  closed: () => void;
}

const Modal = (props: ModalProps) => {
  return (
    <Transition in={props.show} timeout={500} unmountOnExit mountOnEnter>
      {(state: TransitionStatus) => (
        <div
          className={`${classes.Modal} ${
            state === "entering"
              ? classes.ModalOpen
              : state === "exiting"
              ? classes.ModalClosed
              : ""
          }`}
        >
          <h1>A Modal</h1>
          <button className="Button" onClick={props.closed}>
            Dismiss
          </button>
        </div>
      )}
    </Transition>
  );
};

export default Modal;
