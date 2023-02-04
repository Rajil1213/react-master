import { Item } from "../../store/cart-slice";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS: Item[] = [
  {
    id: "p1",
    price: 6,
    name: "My First Book",
    description: "The first book I ever wrote",
  },
  {
    id: "p2",
    price: 5,
    name: "My Second Book",
    description: "The second book I ever wrote",
  },
];

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            description={product.description || ""}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
