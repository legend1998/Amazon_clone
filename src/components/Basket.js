import React from "react";
import "../css/Basket.css";
import { useStateValue } from "../StateProvider";
import CheckOutItem from "./CheckOutItem";
import Subtotal from "./Subtotal";

export default function Basket() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="container">
      <div className="basketItems">
        <h3>hello , {user ? user.email : ""} </h3>
        <h2 className="basket_intro">your shopping Cart</h2>
        {basket.map((item) => (
          <CheckOutItem
            id={item.id}
            image={item.image}
            price={item.price}
            desc={item.desc}
          />
        ))}
      </div>
      <div className="subtotal">
        <Subtotal />
      </div>
    </div>
  );
}
