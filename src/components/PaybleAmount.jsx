import React from 'react';

const PaybleAmount = ({setPrice}) => {
  // Sample data for demonstration purposes
  let subtotal = setPrice;
  let tax = 100;
  let shipping = 50;
  let total = subtotal + tax + shipping;

  return (
    <div className="p-4 bg-white h-full w-full mt-5">
      
      <h2 className="text-xl font-bold mb-4">Payment Summary</h2>
      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>₹{subtotal}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Tax</span>
        <span>₹{tax}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Shipping</span>
        <span>₹{shipping}</span>
      </div>
      <div className="border-t border-gray-400 mt-4"></div>
      <div className="flex justify-between mt-4">
        <span className="font-semibold">Total</span>
        <span className="font-semibold">₹{total}</span>
      </div>
    </div>
  );
};

export default PaybleAmount;
