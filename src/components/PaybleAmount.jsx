import React from 'react';

const PaybleAmount = () => {
  // Sample data for demonstration purposes
  const subtotal = 1000;
  const tax = 100;
  const shipping = 50;
  const total = subtotal + tax + shipping;

  return (
    <div className="p-4 bg-white">
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
