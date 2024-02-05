/* eslint-disable eqeqeq */
import React, { useContext} from "react";
import list from './list.module.css'
import { MyContext } from "../App";
import IncrementDec from "./IncrementDec";
import { MdDeleteOutline } from "react-icons/md";

export default function ProductPage() {
const value=useContext(MyContext);
const total=value.cartlist.reduce((acc=0,ele)=>acc+=ele.price)
console.log(total);
function proddelete (data){
  value.deletecart(data);
}
console.log("............................")
console.log(value.cartlist.length);
  return (
    
    value.cartlist.length == 0 ? <h3 style={{textAlign:"center",marginTop:"auto",marginBottom:"auto"}}>Your Cartlist is empty :( </h3>:
    <div className={list.maindiv} style={{ marginTop: "50px", width: "100vw" }}>
    <div className="row" style={{ height: "fit-content" }}>
      <h5 className="col" style={{color:"brown",fontWeight:"bold"}}>PRODUCTS</h5>
      <h5 className="col" style={{color:"brown",fontWeight:"bold"}}>PRICE</h5>
      <h5 className="col" style={{color:"brown",fontWeight:"bold"}}>QUANTITY</h5>
      <h5 className="col" style={{color:"brown",fontWeight:"bold"}}>REMOVE</h5>
    </div>
    <div style={{marginTop:"20px"}}>
      {value.cartlist.map((ele) => {
        
        return (
          <div className="row" style={{ display: "flex" }}>
            <div className="col">
              <img
                src={ele.image}
                alt="Not found"
                style={{ width: "40px", height: "80px",marginLeft:"30px"}}
              />
              <p>{ele.title}</p>
            </div>

            <h6 className="col ">{ele.price}</h6>
            <div className="col ">
            <IncrementDec/>
            </div>
            <p className="col">
              <MdDeleteOutline style={{fontSize:"35px",marginLeft:"20px",cursor:"pointer"}} onClick={()=> proddelete(ele)}/>
            </p>
          </div>
        );
      })}
    </div>
  </div>
  );
}
