import React from "react";

const FilterPinCode = ({ postOffices, onFilterChange, pinCode }) => {
  return (
    <div className="w-100 bg-light p-3">
      <div>
        {/* display current pincode */}
        <p>
          <strong>Pincode :</strong> {pinCode}?{pinCode}:{`Please enter pincode`}
        </p>
        {/* display the message according to the pincode */}
        <p>
          <strong>Message :</strong>{" "}
          {pinCode
            ? `${postOffices.length} post offices found at the current pincode:`
            : `Post office is not found!....`}
        </p>
      </div>
      {/* search by postoffice name */}
      <div className="input-group mb-3">
        <span className="input-group-text" id="filter">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </span>
        <input
          type="text"
          className="form-control"
          style={{ border: "1px solid #000", borderRadius: "0px" }}
          placeholder="Filter"
          aria-label="Filter"
          aria-describedby="filter"
          onChange={onFilterChange}
        />
      </div>

      {/* <input
        type="text"
        className="w-100 border-3 d-block px-2 py-1 mb-4"
        style={{ border: "1px solid #000", borderRadius: "0px" }}
        placeholder="Filter"
      /> */}

      {/* postoffices */}
      <div className="row">
        {postOffices.map((office, index) => (
          <div key={index} className="col-md-6 col-lg-6 mb-4">
            <div className="card h-100 border-3 border-black rounded-0">
              <div className="card-body">
                <p className="mb-3">Name : {office.Name}</p>
                <p className="mb-3">Branch Type : {office.BranchType}</p>
                <p className="mb-3">
                  Delivery Status : {office.DeliveryStatus}
                </p>
                <p className="mb-3">District : {office.District}</p>
                <p className="">Division : {office.Division}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterPinCode;
