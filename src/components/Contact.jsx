import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-200 min-h-screen p-4">
      <div className="container mx-auto">
        <div className="md:flex">
          {/* Contact Form */}
          <div className="md:w-2/3 p-4 bg-blue-200 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <form className="w-full max-w-lg">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
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
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
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
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none h-32"
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Address and Map */}
          <div className="md:w-1/2 p-4 bg-sky-500 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Our Address</h2>
            <p className="text-gray-700">
              1234 Main Street,
              <br />
              City, State ZIP Code,
              <br />
              Country
            </p>
            {/* Replace the iframe with your actual map integration code */}
            <div className="mt-4 rounded-lg overflow-hidden">
              <iframe
                title="Map"
                className="w-full h-64"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d...."
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
