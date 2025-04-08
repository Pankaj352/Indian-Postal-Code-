import React from "react";

const Form = ({ pinCode, setPinCode, fetchPinCodeData }) => {
  return (
    // form
    <form onSubmit={fetchPinCodeData} className="mb-4 w-100 d-block bg-light p-3" style={{height:"50vh"}}>
      <p className="fw-bold">Enter Pincode</p>
      <input
        type="text"
        id="pincode"
        className="input-box px-2 py-1 d-block w-100 border-3"
        value={pinCode}
        onChange={(e) => setPinCode(e.target.value)}
        placeholder="Pincode"
      />
      <button type="submit" className="btn mt-2 px-5 d-block" style={{backgroundColor:"#000",color:"#fff"}}>
        Lookup
      </button>
    </form>
  );
};

export default Form;
