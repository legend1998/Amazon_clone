import React from "react";
import "../css/Subtotal.css";
import { getBasketTotal } from "../Reducer";
import { useStateValue } from "../StateProvider";

export default function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  let total = getBasketTotal(basket);
  return (
    <div className="basket">
      <p className="subtotalitem">
        {" "}
        Subtotal({basket?.length} items): <strong>₹ {total}</strong>{" "}
      </p>
      <p>
        <input type="checkbox" name="giftitem" />
        <label for="giftitem"> this item contains gift.</label>
      </p>
      <button className="button">proceed to checkout</button>
    </div>
  );
}
