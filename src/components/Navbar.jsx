import React from "react";
import { SiGmail } from "react-icons/si";
import {
  FaWhatsapp,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaPhoneAlt,
} from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";
export default function Navibar({ size}) {
  return (
    <>
      <header className=" fixed w-full z-10 bg-white shadow-md">
        <div className="bg-sky-600 justify-between ">
          <div className="mx-auto flex md:mx-10 items-center justify-between">
            <ul className="flex items-center gap-2 p-2 text-white text-2xl">
              <li className="">
                <FaFacebook />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaLinkedin />
              </li>
              <li>
                <FaWhatsapp />
              </li>
              <li>
                <FaYoutube />
              </li>
            </ul>
            <div className="text-s flex lg:justify-end p-4 gap-5 text-white">
              <span className="flex gap-2 ">
                <FaPhoneAlt className="mt-1"></FaPhoneAlt>
                <span className=" hidden md:block">7725858277</span>
              </span>
              <span className="flex gap-2">
                <SiGmail className="mt-1 block"></SiGmail>
                <span className="hidden md:block">sales@rashailautomation.com</span>
              </span>
            </div>
          </div>
        </div>

        <nav
          className="mx-auto flex md:mx-10 items-center justify-between p-4 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link
              to="/"
              className="-m-1.5 p-1.5 text-2xl font-bold text-blue-800"
            >
              RASHAIL
            </Link>
          </div>
          
          <div className="text-lg md:flex lg:flex-1 lg:justify-end gap-5">
            <Link
              to="/About"
              className=" hidden md:block font-semibold text-sky-600 py-2 px-4 rounded leading-6 hover:bg-gray-100"
            >
              About Us
            </Link>
            <Link
              to="/Product"
              className=" hidden md:block font-semibold text-sky-600 py-2 px-4 rounded leading-6 hover:bg-gray-100"
            >
              Product
            </Link>

            <Link
              to="/Cart"
              className="font-semibold block text-sky-600 py-2 px-4 rounded leading-6 hover:bg-gray-100"
            >
              Cart<span className="text-superscript text-red-500"> {size}</span>
            </Link>

            <Link
              to="/Contact"
              className="hidden md:block font-semibold text-white py-2 px-4 rounded-lg bg-blue-900"
            >
              Contact US
            </Link>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
