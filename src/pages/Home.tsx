import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div>This is my homepage.</div>
      <p>
        Go to <Link to="/products">the list of products.</Link>
      </p>
    </>
  );
};

export default Homepage;
