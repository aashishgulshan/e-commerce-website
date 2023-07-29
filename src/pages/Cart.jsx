import React, { useState, useEffect } from "react";
import PaybleAmount from "../components/PaybleAmount";
import { Link } from "react-router-dom";
import { LuTrash } from "react-icons/lu";

const Cart = ({ cart, setCart }) => {
  // logic for set quantity of product

  const [quantity, setQuantity] = useState(1);
  function decrementQuantity() {
    setQuantity((preQuantity) => preQuantity - 1);
  }
  function incrementQuantity() {
    setQuantity((preQuantity) => preQuantity + 1);
  }

  const [price, setPrice] = useState(0);
  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.price * item.id));
    setPrice(ans);
  };
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    // handlePrice();
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container mx-auto p-4">
        <table className="table-auto w-full">
          <thead className="bg-sky-600">
            <tr className="text-white">
              <th className="py-2">S.No.</th>
              <th className="py-2">Image</th>
              <th className="py-2">Product name</th>
              <th className="py-2">Price</th>
              <th className="py-2">Quantity</th>
              <th className="py-2">Remove</th>
            </tr>
          </thead>

          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-2">1</td>
                <td className="px-4 py-2">
                  <img className="h-20" src={item.image} alt={item.title} />
                </td>
                <td className="text-center px-4 py-2">
                  <p>{item.title}</p>
                </td>
                <td className=" text-center px-4 py-2">
                  <span>₹ {item.price}</span>
                </td>
                <td className="px-4 py-2">
                  <div className="flex justify-around px-2 rounded-xl shadow-lg font-bold bg-slate-50">
                    <button className="p-1" onClick={decrementQuantity}>
                      -
                    </button>

                    <p className="p-1">{quantity}</p>
                    <button className="p-1" onClick={incrementQuantity}>
                      +
                    </button>
                  </div>
                </td>
                <td className="text-center py-2">
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="p-2 ring-2 text-red-600 ring-red-600 rounded-full hover:text-white hover:bg-red-600"
                  >
                    <LuTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* <div className="bg-sky-600 p-5 text-white font-bold">
          <span>Total Cart Price </span>
          <span> Rs - {price}</span>
        </div> */}
        <hr />
        <PaybleAmount setPrice={price} />
        <div className="flex justify-around my-4">
          <Link
            to="/DeliveryInformation"
            className="bg-gradient-to-r from-blue-900 to-sky-600 text-lg text-white font-bold py-3 w-1/4 text-center rounded focus:outline-none focus:shadow-outline"
          >
            Next
          </Link>
        </div>
      </div>
    </>
  );
};
export default Cart;
