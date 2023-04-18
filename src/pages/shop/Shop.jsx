import React from "react";
import { PRODUCTS } from "../../Products";
import Product from "./product";
import "./shop.css";

function Shop() {
  return (
    <div className="shop">
      <div className="shop">
        <h1>J's Electrical</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
