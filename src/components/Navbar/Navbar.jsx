// import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Link className="navLink" to="/">
        <span className="logo">FakeShop.com</span>
      </Link>
      <div>
        <Link className="navLink cartCount" to="/cart">
          🛒 {items.items.length}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
