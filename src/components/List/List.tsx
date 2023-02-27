import React, { useState } from "react";
import classes from "./List.module.css";

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
    <li
      key={index}
      className={classes.ListItem}
      onClick={() => removeItemHandler(index)}
    >
      {item}
    </li>
  ));

  return (
    <div>
      <button
        className="Button"
        onClick={addItemHandler}
      >
        Add Item
      </button>
      <p>Click Item to Remove</p>
      <ul className={classes.List}>{listItems}</ul>
    </div>
  );
};

export default List;
