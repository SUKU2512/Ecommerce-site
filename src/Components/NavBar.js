import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import { useContext } from "react";
import { MyContext } from "../App";

const NavBar = () => {
  const value = useContext(MyContext)

  return (
    <div>
      <div className="nav">
        <div className="left">
          <Link to="/">
            <h1 style={{color:"brown"}}>STYLISH</h1>
            <h6 style={{color:"brown"}} className="com">.com</h6>
          </Link>
        </div>
        <div className="right">
        <Link to="/wishlist"><CiHeart size={38} />{value.wishlist.length}</Link>
        <Link to='/cart'><CiShoppingCart size={40} style={{marginLeft:"10px"}}/>{value.cartlist.length}</Link>
        <CiUser size={36} style={{marginLeft:"10px"}} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
