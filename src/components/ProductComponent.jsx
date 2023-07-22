
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductComponent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 uppercase text-center py-3 text-sky-600">OUR PRODUCTS</h1>
      <div className="grid gap-4 grid-cols-1 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-xl border rounded-xl p-4 flex flex-col justify-between"
          >
            <div>
              <img className='w-32 h-32 object-contain mb-4' src={product.image} alt={product.title} />
              <h2 className="text-lg font-bold mb-2">{product.title}</h2>
              <p className="text-gray-400 mb-4 hidden sm:block">{product.description}</p>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white rounded-br-2xl rounded-tl-2xl shadow-inner font-bold border py-2 px-4 bg-sky-600">₹ {product.price}</span>
              <button className="bg-blue-900 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductComponent;

