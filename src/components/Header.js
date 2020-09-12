import React from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../StateProvider";

export default function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div>
      <header className="header">
        <div className="header__child header_logo">
          <Link className="" to="/">
            <img
              src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
              className="logo"
            />
          </Link>
        </div>
        <div className="header__child header_search">
          <input type="text" className="search__bar" />
          <SearchIcon className="search_icon" />
        </div>
        <div className="header__child header_nav">
          <div className="col">
            <p className="upper">Hello, sign in</p>
            <p className="lower">Accounts & Lists</p>
          </div>
          <div className="col">
            <p className="upper">Returns</p>
            <p className="lower">& Orders</p>
          </div>
          <div className="col">
            <p className="upper">Try</p>
            <p className="lower">Prime</p>
          </div>
        </div>
        <div className="header__child header_basket">
          <Link to="/basket">
            <ShoppingBasketIcon className="basket_icon" />
          </Link>
          <p>
            <strong>{basket?.length}</strong>
          </p>
        </div>
      </header>
    </div>
  );
}
