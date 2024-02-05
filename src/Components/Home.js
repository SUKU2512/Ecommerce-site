import React, { useContext, useEffect, useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { MyContext } from "../App";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const values = useContext(MyContext);
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  // eslint-disable-next-line array-callback-return
  products.map((item)=>{
    item.number=1;
  })
  function wishcolor(prod) {
    // eslint-disable-next-line eqeqeq
    const findWish = values.wishlist.find((wish) => wish.id == prod.id);
    if (findWish) {
      values.deletewish(prod);
      toast("Product removed from wishlist");
    } else {
      values.addtowishlist(prod);
      toast("successfully added to wishlist");
    }
  }
  function addone(ele) {
    // eslint-disable-next-line eqeqeq
    const findcart = values.cartlist.find((cart) => cart.id == ele.id);
    if (findcart) {
      values.deletecart(ele);
      toast("Product removed from cartlist");
    } else {
      values.addtocart(ele);
      toast("successfully added to cartlist");
    }
  }

  return (
    <>
      <div>
        <div className="products1">
          {products.map((prod, index) => {
            return (
              <div className="hbody" key={index}>
                <div>
                  <Link to="/productpage" state={{ from: prod }}>
                    {" "}
                    <img className="himg" src={prod.image} alt="images" />
                  </Link>
                </div>
                <div className="prodtitle" title={prod.title}>
                  {prod.title}
                </div>
                <div className="prodprice">
                  <div>${prod.price}</div>
                  <div className="hheart">
                    <CiHeart
                      onClick={() => wishcolor(prod)}
                      className="heart"
                    />
                  </div>
                </div>
                <div className="btndiv">
                  <button className="hbtn" onClick={() => addone(prod)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={1000} />
    </>
  );
};

export default Home;
