import React from "react";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp, FaYoutube,FaInstagram, FaLinkedin, FaFacebook, FaPhoneAlt } from "react-icons/fa";

export default function Navibar() {
  return (
    <>
      <header className="bg-white shadow-md">

        <div className="bg-sky-600 justify-between ">
          <div className="mx-auto flex md:mx-10 items-center justify-between">
            <ul className="flex items-center gap-2 p-2 text-white text-2xl">
              <li className=""><FaFacebook/></li>
              <li><FaInstagram /></li>
              <li><FaLinkedin/></li>
              <li><FaWhatsapp/></li>
              <li><FaYoutube/></li>
            </ul>
            <div className="text-s hidden lg:flex lg:flex-1 lg:justify-end py-4 gap-5 text-white">
              <span className='flex gap-2 '><FaPhoneAlt/>7725858277</span>
              <span className='flex gap-2'><SiGmail/>sales@rashailautomation.com</span>
            </div>
          </div>
        </div>

        <nav
          className="mx-auto flex md:mx-10 items-center justify-between p-4 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 text-2xl font-bold text-blue-800">RASHAIL</a>
          </div>
          
          <div className="text-lg hidden lg:flex lg:flex-1 lg:justify-end gap-5">
            <a href="#" className="font-semibold text-sky-600 py-2 px-4 rounded leading-6 hover:bg-gray-100">About Us</a>
            <a href="#" className="font-semibold text-sky-600 py-2 px-4 rounded leading-6 hover:bg-gray-100">Product</a>
            <a href="#" className="font-semibold text-sky-600 py-2 px-4 rounded leading-6 hover:bg-gray-100">Cart</a>
            <a href="#" className="font-semibold text-white py-2 px-4 rounded-lg bg-blue-900">Contact US</a>
          </div>
        </nav>
      </header>
    </>
  );
}
