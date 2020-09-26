import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Basket from "./components/Basket";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Payment from "./components/Payment";
import Orders from "./components/Orders";

const promise = loadStripe(
  "pk_test_51HVEJCLTUo6UkKpKNkCQ0kM8JAIindn3d82O9HhSquCx0dvuqjgAXZ8ga1v0IumvAKKDDfQBVxGVHkCRY3wNCQoa00uRPlZ65N"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is >>", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/regiester">
            <Register />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/basket">
            <Basket />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
