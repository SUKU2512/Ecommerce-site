/* eslint-disable eqeqeq */
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

export default function IncrementDec() {
  const [num,setNum]=useState(1);
  function increment(){
    if(num >= 10){
      toast("More than 10 orders are not permitted");
    }
    else{
      setNum(num+1);
    }
  }
  function decrement(){
    if(num == 1){
      setNum(1);
    }
    else{

      setNum(num-1);
    }
  }
  return (
    <div style={{marginRight:"70%",display:"flex",justifyContent:"left",marginTop:"5px"}}>
      <button onClick={decrement} style={{border:"0",borderRadius:"5px",height:"fit-content",width:"25px",backgroundColor:"brown",color:"white",marginLeft:"20px",margin:"auto"}}>-</button>
      <span style={{height:"fit-content",margin:"auto"}}>{num}</span>
      <button onClick={increment} style={{border:"0",borderRadius:"5px",height:"fit-content",width:"25px",backgroundColor:"brown",color:"white",margin:"auto"}}>+</button>
      <ToastContainer position="bottom-right" autoClose={1000} />
    </div>
  )
}
