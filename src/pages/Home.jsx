import React from "react";
import {Link } from "react-router-dom";
// import heroImage from './images/hero-image.jpg';

const Home = () => {
  return (
    <>
    <br />
    <br />
    <br />
      <div className="relative">
        <img
          src="https://source.unsplash.com/700x600/?computer,login"
          alt="Hero Background"
          className="w-full h-screen object-cover"
        />

        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">
              Welcome to Rashail Automation
            </h1>
            <p className="text-white text-lg md:text-xl mb-8">
              We deliver cutting-edge automation solutions for your business
              needs
            </p>
            <Link to="/Product" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-bold shadow-lg">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
