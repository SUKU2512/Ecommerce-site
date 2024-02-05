import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { createContext, useReducer } from "react";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import ProductPage from "./Components/ProductPage";
import Wishlist from "./Components/Wishlist";
import Cartlist from "./Components/Cartlist";
export let MyContext = createContext(null);
function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADDWISH":
        return [...state, action.payload];
      case "ADDCART":
        return [...state, action.payload];
      case "DELETEWISH":
        return state.filter((item) => item.id !== action.payload.id);
      case "DELETECART":
        return state.filter((item) => item.id !== action.payload.id);
      default:
        return state;
    }
  };
  const [wishlist, dispatch] = useReducer(reducer, []);
  const [cartlist, adispatch] = useReducer(reducer, []);

  function addtowishlist(data) {
    dispatch({ type: "ADDWISH", payload: data });
  }
  function addtocart(data) {
    adispatch({ type: "ADDCART", payload: data });
  }
  function deletewish(data) {
    dispatch({ type: "DELETEWISH", payload: data });
  }
  function deletecart(data){
    adispatch({ type:"DELETECART", payload:data });
  }

  return (
    <MyContext.Provider
      value={{ addtowishlist, wishlist, addtocart, cartlist, deletewish,deletecart }}
    >
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cartlist />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
