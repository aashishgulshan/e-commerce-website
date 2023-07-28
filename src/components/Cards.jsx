import React from "react";
import { Link } from "react-router-dom";
export default function Card() {
  return (
    <>
      <div class="flex items-center justify-center h-screen">
        <div class="flex flex-col md:flex-row w-[70%] items-center space-y-4">
          <div class="flex-col space-y-4 text-center md:w-1/2 w-[80%]">
            <div class="text-fuchsia-600 text-xl font-medium">Product Page</div>
            <div class="text-5xl font-medium">Under Development</div>
            <div class="text-gray-500">
              Sorry, the page you're looking for is under construction.
            </div>
            <div class="flex items-center justify-center">
              <Link to="/Product" class="bg-fuchsia-600 px-4 py-1 text-white font-medium rounded-lg  hover:scale-105 cursor-pointer">
                Visit Product Page
              </Link>
            </div>
          </div>
          <div class="md:w-96 w-[70%] md:h-96 h-48  bg-gray-200 rounded-xl overflow-hidden">
            <img
              src="https://source.unsplash.com/800x1200/?robot,error"
              alt=""
              class=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
