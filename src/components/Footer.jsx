import React from "react";

const Footer = () => {
  return (
    <footer className="bg-sky-100 text-sky-700 p-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul>
              <li className="mb-2">
                <a href="#">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#">Contact Us</a>
              </li>
              <li className="mb-2">
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-4"><a href="#"> About Us</a></h3>
            <h3 className="text-xl font-bold mb-4"><a href="#">Products</a></h3>
            
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-4"><a href="#">Privacy Policy</a></h3>
            <h3 className="text-xl font-bold mb-4"><a href="#">Terms & Conditions</a></h3>
    
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-bold mb-4">Subscribe</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-white text-black py-2 px-4 rounded-l-3xl focus:outline-none focus:shadow-outline"
              />
              <button className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-r-3xl focus:outline-none focus:shadow-outline">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <p className="my-4 text-center"> Rashail Automation and R-Tech are Product Brands of Rashail Tech Labs Private Limited</p>
        <hr className="my-4 border-gray-800" />
        <p className="text-sm ">
          &copy; {new Date().getFullYear()} Rashail Tech Labs Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
