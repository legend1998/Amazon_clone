import React from "react";
import "../css/Subtotal.css";
import { getBasketTotal } from "../Reducer";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router-dom";

export default function Subtotal() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();
  let total = getBasketTotal(basket);

  const payment = (e) => {
    if (user) {
      history.push("/payment");
    } else {
      history.push("/login");
      alert("login to proceed further.");
    }
  };
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
      <button onClick={payment} className="button">
        proceed to checkout
      </button>
    </div>
  );
}
