import { React } from "react";
import Address from "../components/Address";
import PaybleAmount from "../components/PaybleAmount";
const DeliveryInformation = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="mx-auto container py-10">
      <h1 className="text-2xl font-bold text-center text-sky-600">
        Delivery Information
      </h1>
      
      <div className="md:flex gap-4">
        <div className="md:w-2/3">
          <Address />
        </div>

        <div className="md:w-1/2">
          <PaybleAmount />
        </div>
        
      </div>
      </div>
      
      {/* <div className="flex justify-center m-4">
            <button
              className="bg-sky-500 text-lg hover:bg-sky-700 text-white font-bold py-3 px-10 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            
            >
              Next
            </button>
          </div> */}
    </>
  );
};
export default DeliveryInformation;
