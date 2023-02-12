import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const products = Array.from(Array(10).keys());
  return (
    <div>
      <h1>Products Pags</h1>
      <ul>
        {products.map((id) => {
          return (
            <li key={id}>
              <Link to={`/products/${id + 1}`}>Product {id + 1}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Products;
