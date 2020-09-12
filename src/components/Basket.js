import React from "react";
import "../css/Basket.css";
import Subtotal from "./Subtotal";

export default function Basket() {
  return (
    <div className="container">
      <div className="basketItems">
        <h2 className="basket_intro">shopping Cart</h2>
      </div>
      <div className="subtotal">
        <Subtotal />
      </div>
    </div>
  );
}
