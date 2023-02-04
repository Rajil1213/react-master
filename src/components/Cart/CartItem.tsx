import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cart-slice";

type CartItemProps = {
  id: string;
  title: string;
  quantity: number;
  total: number;
  price: number;
};

const CartItem = ({ id, title, quantity, total, price }: CartItemProps) => {
  const dispatch = useDispatch();

  const itemRemoveHandler = () => {
    dispatch(cartActions.removeItemFromCart({ id }));
  };

  const itemAddHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        item: {
          id,
          name: title,
          quantity,
          totalPrice: total,
          price: price,
        },
      })
    );
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={itemRemoveHandler}>-</button>
          <button onClick={itemAddHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
