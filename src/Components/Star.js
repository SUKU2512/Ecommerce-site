import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

export default function Star({ star }) {
  
  const [star1, setStar] = useState([]);
  let number = Math.floor(star.from.rating.rate);
  useEffect(() => {
    const arr = new Array(5);
    setStar(arr.fill(0, 0));
  }, [number]);
  return (
    <>
      <br />
      <div style={{display:"flex"}}>
      <div style={{display:"flex"}}>
        {star1.map((value, index) => (
         <>
            {number <= index ? <div key={index} ><AiOutlineStar /></div> : <div key={index}> <FaStar style={{fill:"gold"}}/></div>}
         </>
        ))}
      </div>
      <div style={{marginLeft:"5px"}}>({number}/{5})</div>

      <div style={{fontWeight:"bold",marginLeft:"auto",fontSize:"24px"}}>
        ${star.from.price}
      </div>
      </div>
      <br />
    </>
  );
}
