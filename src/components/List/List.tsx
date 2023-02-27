import React, { useState } from "react";
import classes from "./List.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const List = () => {
  const [items, setItems] = useState<number[]>([1, 2, 3]);

  const addItemHandler = () => {
    setItems((prevItems) => {
      return prevItems.concat(prevItems.length + 1);
    });
  };

  const removeItemHandler = (selIndex: number) => {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => index !== selIndex);
    });
  };

  const listItems = items.map((item, index) => (
    <CSSTransition
      key={index}
      timeout={500}
      classNames={{
        enter: classes["fade-enter"],
        enterActive: classes["fade-enter-active"],
        exit: classes["fade-exit"],
        exitActive: classes["fade-exit-active"],
      }}
    >
      <li className={classes.ListItem} onClick={() => removeItemHandler(index)}>
        {item}
      </li>
    </CSSTransition>
  ));

  return (
    <div>
      <button className="Button" onClick={addItemHandler}>
        Add Item
      </button>
      <p>Click Item to Remove</p>
      <TransitionGroup className={classes.List} component="ul">
        {listItems}
      </TransitionGroup>
    </div>
  );
};

export default List;
