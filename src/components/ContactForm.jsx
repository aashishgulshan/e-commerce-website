import React from 'react';
import { SiGmail } from "react-icons/si";
import { FaWhatsapp, FaYoutube, FaInstagram, FaLinkedin, FaFacebook, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import map from "../assets/map.png"

const ContactForm = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold uppercase text-sky-600 my-5">Contact Us</h2>
        <p className='text-center mb-5'>Let our years of expertise help you get back on track.</p>
        <div className="md:flex gap-10">
          {/* Contact Form */}
          <div className="md:w-1/2 rounded-2xl p-10 bg-sky-100 drop-shadow-2xl">
            <form className="w-full ">
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="name">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block  text-sm font-bold mb-2" htmlFor="email">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="number">
                  Phone Number:
                </label>
                <input
                  type="number"
                  id="number"
                  name="number"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="message">
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none h-32"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="selectSubject">Select Subject</label>
                <select className="appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline"
                   id="selectSubject">
                  <option className='p-5' selected>Select Subject</option>
                  <option className='p-5' value="1">GSM Moter</option>
                  <option className='p-5' value="2">Installation</option>
                  <option className='p-5' value="3">Auto Switch</option>
                  <option className='p-5' value="3">Mini Moter</option>

                </select>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Address and Map */}
          <div className="md:w-1/2 rounded-2xl p-10 text-white bg-sky-600 drop-shadow-2xl">
            <h2 className="text-xl mb-3">Contact Information</h2>
            <p className="text-white my-5">
            <span className='flex gap-5 my-2'><FaPhoneAlt/>7725858277</span>
            <span className='flex gap-5 my-2'><SiGmail/>sales@rashailautomation.com</span>
            <span className='flex gap-5 my-2'><FaLocationArrow/> S1, 2nd Floor, Malwa Tower, Ashok Nagar, Indore, Madhya Pradesh, India, 452001</span>
            </p>
            {/* Replace the iframe with your actual map integration code */}
            <div className="mt-4 rounded-lg overflow-hidden">
              <img
                title="Map"
                className="w-full rounded-lg"
                src={map}
                allowFullScreen
                loading="lazy"
              />
            </div>
            <ul className="flex gap-2 mt-10 text-3xl">
              <li><FaFacebook/></li>
              <li><FaInstagram /></li>
              <li><FaLinkedin/></li>
              <li><FaWhatsapp/></li>
              <li><FaYoutube/></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
