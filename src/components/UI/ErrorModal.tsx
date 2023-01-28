import React, { SyntheticEvent } from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

interface ErrorModalProps {
  title: string;
  message: string;
  onOkay: () => void;
}

const Backdrop = () => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay = ({ title, message, onOkay }: ErrorModalProps) => {
  const clickHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    onOkay();
  };
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{title}</h2>
      </header>
      <div className={classes.content}>
        <p>{message}</p>
      </div>
      <footer className={classes.actions}>
        <Button
          type="submit"
          onClick={clickHandler}
        >
          Okay
        </Button>
      </footer>
    </Card>
  );
};

const ErrorModal = ({ title, message, onOkay }: ErrorModalProps) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")! /* ! => non-null assertion */
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={title}
          message={message}
          onOkay={onOkay}
        />,
        document.getElementById("overlay-root")!
      )}
    </>
  );
};

export default ErrorModal;
