import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { RootState } from "../../store";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            title={item.name}
            quantity={item.quantity || 1}
            total={item.totalPrice || 0}
            price={item.price}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
