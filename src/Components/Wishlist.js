import React, { useContext } from "react";
import { MyContext } from "../App";
import list from './list.module.css'
import IncrementDec from "./IncrementDec";
import { MdDeleteOutline } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";

export default function Wishlist() {
  const values = useContext(MyContext);
  function movetocart (prod){
    // eslint-disable-next-line eqeqeq
    const findWish = values.cartlist.find((ele) => ele.id == prod.id);
    if(findWish){
      toast("Product is already there in cart");
      values.deletewish(prod);
    }
    else{
      toast("sucessfully moved");
      values.deletewish(prod);
      values.addtocart(prod);
    }
  }
  function proddelete(data){
    values.deletewish(data);
  }
  return (
    // eslint-disable-next-line eqeqeq
    values.wishlist.length == 0 ? <h3 style={{textAlign:"center",marginTop:"auto",marginBottom:"auto"}}>Your Wishlist is empty :( </h3>: 
    <div className={list.maindiv} style={{ marginTop: "50px", width: "100vw" }}>
      <div className="row" style={{ height: "fit-content" }}>
        <h5 className="col" style={{color:"brown",fontWeight:"bold"}}>PRICE</h5>
        <h5 className="col" style={{color:"brown",fontWeight:"bold"}}>PRODUCTS</h5>
        <h5 className="col" style={{color:"brown",fontWeight:"bold"}}>QUANTITY</h5>
        <h5 className="col" style={{color:"brown",fontWeight:"bold",marginLeft:"40px "}}>MOVE</h5>
        <h5 className="col" style={{color:"brown",fontWeight:"bold"}}>REMOVE</h5>
      </div>
      <div style={{marginTop:"20px"}}>
        {values.wishlist.map((ele) => {
          return (
            <div className="row" style={{ display: "flex" }}>
              <div className="col">
                <img
                  src={ele.image}
                  alt="Not found"
                  style={{ width: "40px", height: "80px",marginLeft:"30px" }}
                />
                <p>{ele.title}</p>
              </div>
              <h6 className="col">{ele.price}</h6>
              <div className="col">
              <IncrementDec/>
              </div>
              <div className="col">
              <button style={{marginLeft:"auto" ,backgroundColor:"brown",borderRadius:"5px",width:"fit-content"}} onClick={()=>movetocart(ele)}>MOVE TO BAG</button>
              </div>
              <p className="col">
                <MdDeleteOutline style={{fontSize:"35px",marginLeft:"30px",cursor:"pointer"}} onClick={()=> proddelete(ele)}/>
              </p>
            </div>
          );
        })}
      </div>
      <ToastContainer position="bottom-right" autoClose={1000} />
    </div>
  );
}
