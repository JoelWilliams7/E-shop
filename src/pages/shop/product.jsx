import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

function product(props) {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const getProductCount = (productId) => {
    const amount = cartItems[productId];
    if (amount) {
      return `(${amount})`;
    }
    return null;
  };

  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {getProductCount(id)}
      </button>
    </div>
  );
}

export default product;
