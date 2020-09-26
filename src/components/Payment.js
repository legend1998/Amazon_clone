import { Link } from "@material-ui/core";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import "../css/Payment.css";
import { useStateValue } from "../StateProvider";
import CheckOutItem from "./CheckOutItem";
import { getBasketTotal } from "../Reducer";
import axios from "../axiosRequest";
import { useHistory } from "react-router-dom";
import { db } from "../firebase";

export default function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();
  const [succeeded, setsucceeded] = useState(false);
  const [processing, setprocessing] = useState(false);
  const [error, seterror] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [ClientSecret, setClientSecret] = useState("empty");
  let value = getBasketTotal(basket);
  useEffect(() => {
    //generate the special stripe secret which allows us to make payment

    const getclientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      console.log("the response is", response);
      setClientSecret(response.data.clientSecret);
    };
    getclientSecret();
  }, [basket]);

  console.log("the secret is ", ClientSecret);

  const handleSubmit = async (e) => {
    //do all the stripe payment handling
    e.preventDefault();
    setprocessing(true);

    const payload = await stripe
      .confirmCardPayment(ClientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        //payemnt = payment confirmation
        setsucceeded(true);
        seterror(null);
        setprocessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        history.replace("/orders");
      });

    // const payload = await stripe
  };

  const handleChange = (e) => {
    // handle the change in stripe payment

    setDisabled(e.empty);
    seterror(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <h1>
        CheckOout(
        <Link to="/basket">{basket?.length} items</Link>)
      </h1>
      {/* address  */}
      <div className="payment__section">
        <div className="payment__title">
          <h3>Delivery Address</h3>
        </div>
        <div className="payment__address">
          <p>{user?.email}</p>
          <p>123 sarkanda chowk godda</p>
        </div>
      </div>
      {/* produdct description  */}
      <div className="payment__section">
        <div className="payment__title">
          <h3>review items and delivery</h3>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckOutItem
                id={item.id}
                image={item.image}
                price={item.price}
                desc={item.desc}
              />
            ))}
          </div>
        </div>
      </div>
      {/* payment  */}
      <div className="payment__section">
        <div className="payment__title">
          <h3>Payment Method</h3>
        </div>
        <div className="payment__details">
          {/* stripe payment gateway */}

          <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} />
            <div className="payment__price_container">
              <h3>Order Total: {value}</h3>
            </div>
            <button disabled={processing || disabled || succeeded}>
              <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
