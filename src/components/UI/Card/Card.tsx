import React, { PropsWithChildren } from "react";

import classes from "./Card.module.css";

interface CardProps {
  className: string;
}

const Card = ({ className, children }: PropsWithChildren<CardProps>) => {
  return <div className={`${classes.card} ${className}`}>{children}</div>;
};

export default Card;
