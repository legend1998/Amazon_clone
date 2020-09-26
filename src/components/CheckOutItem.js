import React from "react";
import "../css/CheckOutItem.css";
import { useStateValue } from "../StateProvider";

export default function CheckOutItem({ image, id, price, desc }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeItem = () => {
    console.log(id);
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="basket_item">
      <img src={image} alt="" />
      <p className="desc">{desc}</p>
      <p className="price">{price}</p>
      <button className="remove_button" onClick={removeItem}>
        Remove item
      </button>
    </div>
  );
}
