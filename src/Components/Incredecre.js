import React, { useState } from 'react'

export default function Incredecre(props) {

  const [num,setNum]=useState (props.data.number); 
  function decrease(){
     if(num>1){
      setNum(num-1);
     } 
    }
    function increase(){
      setNum(num+1);
    }
  return (
    <div style={{display:"flex"}}>
      <button style={{margin:"auto"}} onClick={()=>decrease()}>-</button><p style={{marginTop:"auto",marginBottom:"auto",marginLeft:"20px",marginRight:"20px"}}>{num}</p><button style={{margin:"auto",marginBottom:"auto"}} onClick={()=>increase()}>+</button>
    </div>
  )
}
