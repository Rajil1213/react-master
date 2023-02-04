import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { RootState } from "./store";
import { useEffect } from "react";
import { sendCartData } from "./store/cart-slice";
import { useAppDispatch } from "./store/hooks";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const isCartVisible = useSelector(
    (state: RootState) => state.ui.cartIsVisible
  );
  const notification = useSelector((state: RootState) => state.ui.notification);

  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();

  // let deps = [cart, dispatch];
  // useWhatChanged(deps, "cart, dispatch");
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    console.log("Not initial, pushing cart to API");
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <>
      {notification.status.length > 0 && (
        <Notification
          status={notification.status}
          message={notification.message}
          title={notification.title}
        />
      )}
      <Layout>
        {isCartVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
