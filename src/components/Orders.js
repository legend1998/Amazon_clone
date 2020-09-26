import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { useStateValue } from "../StateProvider";
import Order from "./Order";

export default function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setorders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          console.log(snapshot.docs);
          setorders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setorders([]);
    }
  }, [user]);

  return (
    <div>
      {orders.map((order) => (
        <Order order={order} />
      ))}
    </div>
  );
}
