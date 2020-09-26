import React from "react";
import "../css/Product.css";
import { useStateValue } from "../StateProvider";

export default function Product({ id, desc, price, image }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        desc: desc,
        price: price,
        image: image,
      },
    });
  };

  return (
    <div className="product">
      <p className="product_desc"> {desc} </p>
      <p>
        ₹<strong> {price}</strong>
      </p>
      <img className="product_image" src={image} alt="" />
      <button className="product_button" onClick={addToBasket}>
        Add to basket
      </button>
    </div>
  );
}
