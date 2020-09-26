import React from "react";
import moment from "moment";
import CheckOutItem from "./CheckOutItem";

export default function Order({ order }) {
  console.log(order);
  return (
    <div>
      <p>{moment.unix(order.data.created).format("MMMM-DD-YYYY, HH:MM")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckOutItem
          id={item.id}
          image={item.image}
          price={item.price}
          desc={item.desc}
        />
      ))}
    </div>
  );
}
