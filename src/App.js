import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import CartList from "./pages/CartList";
import Card from "./components/Cards";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NoPage from "./pages/NoPage";
import DeliveryInformation from "./pages/DeliveryInformation";
import APIData from "./components/APIData";

export default function App() {
  const [warning, setWarning] = useState(false);
  const [cart, setCart] = useState([]);
  // console.log(cart);
  // const addToCart = (data) => {
  //   let isPresent = false;
  //   cart.map((product)=>{
  //     if(data.id === product.id)
  //     isPresent = true;
  //   })
  //   if(isPresent){
  //     setWarning(true);
  //     setTimeout( () =>{
  //       setWarning(false);
  //     }, 2000);
  //     return;
  //   }
  //   setCart([...cart,{...data,quantity: 1}])
  // };

  const addToCart = (data) => {
    setCart([...cart,{...data,quantity: 1}])
  };

  // const handleChange = (item, d) => {
  //   // console.log(item, d);
  //   let ind = -1;
  //   cart.forEach((data, index) => {
  //     if (data.id === item.id) ind = index;
  //   });
  //   const tempArr = cart;
  //   tempArr[ind].id += d;

  //   if (tempArr[ind].id === 0) tempArr[ind].id = 1;
  //   setCart([...tempArr]);
  // };
  return (
    <>
    {
      warning && <div className=""> Item is Already added to cart</div>
    }
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar size={cart.length} />}>
            <Route path="/" index element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Product" element={<APIData addToCart={addToCart} />} />
            <Route path="/card" element={<Card />} />
            <Route path="/Cart" element={ <CartList cart={cart} setCart={setCart}/>}/>
            <Route path="/DeliveryInformation" element={<DeliveryInformation />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
