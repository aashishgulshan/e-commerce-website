import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import ProductList from "./components/ProductList";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NoPage from "./pages/NoPage";
import DeliveryInformation from "./pages/DeliveryInformation";

export default function App() {
  const [cart, setCart] = useState([]);
  const handleClick = (item) => {
    console.log(item);
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) {
      return;
    }
    setCart([...cart, item]);
  };

  const handleChange = (item, d) =>{
    // console.log(item, d);
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].id += d;
		
		if (tempArr[ind].id === 0)
			tempArr[ind].id = 1;
		setCart([...tempArr])
	}
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar size={cart.length} />}>
            <Route
              path="/Product"
              element={<ProductList handleClick={handleClick} />}
            />
            <Route
              path="/Cart"
              element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />}
            />
            <Route index element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
            <Route path="/DeliveryInformation" element={ <DeliveryInformation/> } />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Contact /> */}
      <Footer />
    </>
  );
}
