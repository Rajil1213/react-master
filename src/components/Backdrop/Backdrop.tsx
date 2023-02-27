import React from "react";
import classes from "./Backdrop.module.css";

interface BackdropProps {
  show: boolean;
}

const Backdrop = (props: BackdropProps) => {
  return (
    <div
      className={`${classes.Backdrop} ${
        props.show ? classes.BackdropOpen : classes.BackdropClosed
      }`}
    ></div>
  );
};

export default Backdrop;
