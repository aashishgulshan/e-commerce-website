import {React, useState} from "react";

const Address = () => {
  const [address, setAddress] = useState({
    fullName: '',
    email:'',
    phoneNumber:'',
    pinCode: '',
    street:'',
    landmark:'',
    city: '',
    state: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Use the 'address' object as needed, e.g., send it to a server, process the data, etc.
    console.log(address);
  };

  return (
    <div class="flex flex-col p-4 bg-white">
      <div class="text-lg font-semibold">
        <h1>Delivery Address</h1>
      </div>
      <div className=" rounded-2xl mb-5">
        <form onSubmit={handleSubmit} className="w-full px-5">

          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-1/2 py-4">
              <label className="block font-bold mb-2" htmlFor="fullName">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={address.fullName}
                onChange={handleChange}
                placeholder="Please enter your name"
                className="appearance-none text-sm border-b-2 border-sky-600 w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <div className="w-1/2 py-4">
              <label className="block font-bold mb-2" htmlFor="email">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={address.email}
                onChange={handleChange}
                placeholder="Please enter your email ...."
                className="appearance-none text-sm border-b-2 border-sky-600 w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
          </div>

          <div class="flex flex-col md:flex-row gap-5 ">
            <div className="w-1/2 py-4">
              <label className="block font-bold mb-2" htmlFor="phoneNumber">
                Phone Number
              </label>
              <input
               type="number"
               id="phoneNumber"
               name="phoneNumber"
               value={address.phoneNumber}
               onChange={handleChange}
                placeholder="Please enter mobile number"
                className="appearance-none text-sm border-b-2 border-sky-600 w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="w-1/2 py-4">
              <label className="block font-bold mb-2" htmlFor="pinCode">
                PIN Code
              </label>
              <input
                type="text"
                id="pinCode"
                name="pinCode"
                value={address.pinCode}
                onChange={handleChange}
                placeholder="Please postal Code"
                className="appearance-none text-sm border-b-2 border-sky-600 w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
          </div>

          <div class="flex flex-col md:flex-row gap-5 ">
            <div className="w-1/2 py-4">
              <label className="block font-bold mb-2" htmlFor="street">
                Street
              </label>
              <input
                type="text"
                id="street"
                name="street"
                value={address.street}
                onChange={handleChange}
                placeholder="street address"
                className="appearance-none text-sm border-b-2 border-sky-600 w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="w-1/2 py-4">
              <label className="block font-bold mb-2" htmlFor="landmark">
                Landmark
              </label>
              <input
                type="text"
                id="landmark"
                name="landmark"
                value={address.landmark}
                onChange={handleChange}
                placeholder="landmark"
                className="appearance-none text-sm border-b-2 border-sky-600 w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
          </div>
          
          <div class="flex flex-col md:flex-row gap-5 ">
            <div className="w-1/2 py-4">
              <label className="block font-bold mb-2" htmlFor="city">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={address.city}
                onChange={handleChange}
                placeholder="Please enter city"
                className="appearance-none text-sm border-b-2 border-sky-600 w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="w-1/2 py-4">
              <label className="block font-bold mb-2" htmlFor="state">
                State
              </label>
              <input
               type="text"
               id="state"
               name="state"
               value={address.state}
               onChange={handleChange}
                placeholder="Please enter state"
                className="appearance-none text-sm border-b-2 border-sky-600 w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
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
    </div>
  );
};

export default Address;
