import React, { PropsWithChildren } from "react";
import classes from "./Card.module.css";

interface CardProps {
  className: string;
  children: React.ReactNode;
}

const Card = ({ className, children }: PropsWithChildren<CardProps>) => {
  return <div className={`${classes.card} ${className}`}>{children}</div>;
};

export default Card;
