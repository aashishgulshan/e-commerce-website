import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function APIData({handleClick}) {
  const [data, setData] = useState(null);
  const [addRemove, setAddRemove] = useState(false);
  function addToCartClick() {
    setAddRemove(!addRemove);
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://dhruvj02.pythonanywhere.com/api/store/7d9f6272-781e-4a33-9cc1-020167be40b3/product",
        {
          headers: {
            Authorization: "Token 543c793bba983edb993f167c8f01586cc4fbd49b",
          },
        }
      );
      if (!response.ok) {
        console.error("Error:", response.status, response.statusText);
        return;
      }
      const data = await response.json();
      console.log(data);
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <br /><br /><br /><br /><br /><br />
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4 uppercase text-center py-3 text-sky-600">
          OUR PRODUCTS
        </h1>
        {data ? (
          data.results.map((product) => (
            <div key={product.product_id} className="flex flex-row py-5 gap-5 border-b-2  w-full">
              
              <div className="w-1/4">
                <img className=" w-32 mx-auto py-5" src={product.product_primary_image.image} alt={product.product_name}/>
              </div>
              
              <div className="w-1/2 flex-col">
                <h2 className="font-bold capitalize">{product.product_name}</h2>
                <p className=" font-semibold text-sm text-sky-500">Available</p>
                <p className=" truncate">{product.product_description}</p>
                <Link to="/Card"><button className=" text-gray-500 hover:text-gray-400">Read More...</button> </Link>
              </div>
              
              
              <div className="w-1/4 mx-auto flex-col justify-center text-center">
                <h3 className="font-semibold mb-4">Rs. {product.product_price}</h3>
                <button  onClick={() => handleClick(product)}
                className=" border-2 px-4 py-1  border-sky-500 rounded-md text-sky-500 text-sm">Add To Cart</button>
              </div>
             
            
            </div>
          ))
        ) : (
          <div>

          </div>

        )}
      </div>
    </>
  );
}

export default APIData;
