import React from "react";
import loader from "../assets/loading.gif"
export default function Loader() {
  return (
    <>
      <div className="">
        <img className="mx-auto rounded-lg m-5" src={loader} alt="" />
      </div>
    </>
  );
}
