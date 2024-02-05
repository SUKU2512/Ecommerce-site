import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { MyContext } from "../App";
// import "./productpage.css";
import Star from "./Star";
import { FaTruck } from "react-icons/fa";
import prod from './productpage.module.css';
import { ToastContainer, toast } from "react-toastify";
import Incredecre from "./Incredecre";

export default function ProductPage() {
  const location = useLocation();
  const value = useContext(MyContext);
  // eslint-disable-next-line no-unused-vars
  const [size, setSize] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  const from = location.state;
  function laddtocart() {
    // eslint-disable-next-line eqeqeq
    const findcart = value.cartlist.find((cart) => cart.id == from.from.id);
    if (findcart) {
      toast("Product already there in cart");
    } else {
      value.addtocart(from.from);
      toast("successfully added to cart");
    }
    
  }
  return (
    <div className="row" style={{height:"100vh",overflow:"hidden"}}>
      <div className={prod.ppleft} style={{ marginTop: "20px" }}>
        <div className={prod.productpageimage}>
          <img className={prod.ppimg} src={from.from.image} alt="Not Found" />
        </div>
      </div>
      <div className={prod.ppright} style={{ marginTop: "10px" }}>
        <b>
          <p style={{ fontSize: "24px",color:"brown"}}>{from.from.title}</p>
        </b>
        <Star star={from} />
        <div className={prod.truckbox}>
          <div>
            <FaTruck style={{ fontSize: "24px", marginRight: "10px" }} /> 2 day
            shipping
          </div>
          <div style={{ color: "brown" }}>See Options</div>
        </div>
        <div style={{ display: "flex",marginTop: "10px", marginBottom: "10px"  }}>
          <div style={{border: "1px solid black",width:"40%",display:"flex",paddingLeft:"10px",justifyContent:"space-between"}}>
          <div>
            size:
          </div>
          <div>
            <select >
              {size.map((ele) => {
                return <option style={{fontWeight:"0px"}}>{ele}</option>;
              })}
            </select>
          </div>
          </div>
          
          <div style={{marginLeft:"10px",color:"brown"}}>size guide</div>
        </div>
        <div><Incredecre data={from.from}/></div>
        <div style={{marginBottom:"5px",textAlign:"left"}}>
          Hurray up only 4 items left
        </div>
        
        <button style={{ margin: 0, marginTop: "10px" ,width:"100%",borderRadius:"0",border:"none",marginBottom:'10px'}}  onClick={laddtocart}>Add to cart</button>
        <p style={{fontWeight:"bold",padding:"0",margin:"0"}}>Description : </p>
        <p className={prod.p}>{from.from.description}</p>
        <br></br>
        <div style={{ display:"flex"}}>
          <b>Category : </b>
          <p >{from.from.category}</p>
        </div>
        
      </div>
      <ToastContainer position="bottom-right" autoClose={1000} />
    </div>
  );
}
