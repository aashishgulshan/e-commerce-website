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
      <h1 className="text-2xl font-bold text-center text-sky-600 py-5">
        Delivery Information
      </h1>
      <hr />
      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-2/3">
          <Address />
        </div>

        <div className="w-1/2">
          <PaybleAmount />
        </div>
      </div>
    </>
  );
};
export default DeliveryInformation;
