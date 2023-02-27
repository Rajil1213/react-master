import React from "react";
// import classes from "./Modal.module.css";
import "./Modal.css";
import { CSSTransition } from "react-transition-group";

interface ModalProps {
  show: boolean;
  closed: () => void;
}

const Modal = (props: ModalProps) => {
  return (
    <CSSTransition in={props.show} timeout={500} unmountOnExit mountOnEnter classNames="fade-slide">
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default Modal;
