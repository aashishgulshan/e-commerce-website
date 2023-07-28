import React from 'react';
import { SiGmail } from "react-icons/si";
import { FaWhatsapp, FaYoutube, FaInstagram, FaLinkedin, FaFacebook, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import map from "../assets/map.png"

const Contact = () => {
  return (
    <div className="bg-gray-50 p-4">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold uppercase text-sky-600 my-5">Contact Us</h2>
        <p className='text-center mb-5'>Let our years of expertise help you get back on track.</p>
        <div className="md:flex gap-10">
          {/* Contact Form */}
          <div className="md:w-2/3 rounded-2xl mb-5 p-10 bg-white drop-shadow-2xl">
            <form className="w-full px-5">
              <div className="py-4">
                <label className="block font-bold mb-2" htmlFor="name">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder='Please enter your name'
                  className="appearance-none text-sm border-b-2 border-sky-600 w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="py-4">
                <label className="block font-bold mb-2" htmlFor="email">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Please enter your email address...."
                  className="appearance-none text-sm border-b-2 border-sky-600 w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="py-4">
                <label className="block font-bold mb-2" htmlFor="phone">
                  Phone Number:
                </label>
                <input
                  type="number"
                  id="phone"
                  name="number"
                  placeholder="Please enter your Phone number...."
                  className="appearance-none text-sm border-b-2 border-sky-600 w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="py-4">
                <label className="block font-bold mb-2" htmlFor="message">
                  Message:
                </label>
                <input
                  id="message"
                  name="message"
                  placeholder="Please enter your message....."
                  className="appearance-none text-sm border-b-2 border-sky-600 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="py-4">
                <label className="block font-bold mb-2" htmlFor="selectSubject">Select Subject <span className="text-red-600">*</span></label>
                <select 
                  className="appearance-none text-sm bg-white border-b-2 border-sky-600 w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                   id="selectSubject"
                   required
                   >
                  <option className='p-5' defaultValue>Select Subject</option>
                  <option className='p-5' value="1">GSM Moter</option>
                  <option className='p-5' value="2">Installation</option>
                  <option className='p-5' value="3">Auto Switch</option>
                  <option className='p-5' value="3">Mini Moter</option>

                </select>
              </div>
              <div className="flex justify-content-center py-4">
                <button
                  className="bg-sky-500 text-lg hover:bg-sky-700 text-white font-bold py-3 w-full rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Address and Map */}
          <div className="md:w-1/2 rounded-2xl p-10 bg-sky-600 drop-shadow-2xl">
            <h2 className="text-xl mb-3">Contact Information</h2>
            <p className="text-white my-5">
            <span className='flex gap-5 my-2'><FaPhoneAlt/>7725858277</span>
            <span className='flex gap-5 my-2'><SiGmail/>sales@rashailautomation.com</span>
            <span className='flex gap-5 my-2'><FaLocationArrow/> S1, 2nd Floor, Malwa Tower, 
            <br />
            Ashok Nagar, Indore, Madhya Pradesh, India, 452001</span>
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

export default Contact;
