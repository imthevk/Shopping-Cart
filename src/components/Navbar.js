import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul className="left">
        <li>
          <Link to="/">Lets Shopping</Link>
        </li>
      </ul>
      <ul className="right">
        <li>
          <Link to="/cart" >
            <span className="cart">
              <i className="fas fa-shopping-cart"></i>
            </span>
            <span className="cartCount">0</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
