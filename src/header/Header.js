import React from "react";
// import { Input } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";

function Header() {
  const [{ cart }] = useStateValue();

  return (
    <div className="header">
      {/* logo */}
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      {/* serach */}
      <div className="header__search">
        <input className="header__input" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/* 3 links */}
      <div className="header__nav">
        <div className="header__navItem">
          <span className="header__navTextTop">Bonjour</span>
          <span className="header__navTextBottom">
            <strong>Compte et listes</strong>
          </span>
        </div>
        <div className="header__navItem">
          <span className="header__navTextTop">Retours</span>
          <span className="header__navTextBottom">
            <strong>et Commandes</strong>
          </span>
        </div>
        <div className="header__navItem">
          <span className="header__navTextTop">Testez</span>
          <span className="header__navTextBottom">
            <strong>Prime</strong>
          </span>
        </div>
        <Link to="/cart">
          {/* basket with number */}
          <div className="header__cart">
            <ShoppingCartOutlinedIcon className="header__cartLogo" />
            <span className="header__cartCount">
              <strong>{cart.length}</strong>
            </span>
            <span className="header__cartText">
              <strong>Panier</strong>
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
