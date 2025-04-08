import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import FilterPinCode from "./components/FilterPinCode";

function App() {
  const [pinCode, setPinCode] = useState("");// to store the pincode in ""
  const [postOffices, setPostOffices] = useState([]);//to store the postoffices in the []
  const [filter, setFilter] = useState(""); // to filter the postoffice via name

  const fetchPinCodeData = async (e) => {
    e.preventDefault(); // for page reload
    try {
      const res = await fetch(
        `https://api.postalpincode.in/pincode/${pinCode}`//fetch pincode and store in res
      );
      // console.log(res);
      const data = await res.json();//converting res in json format and store in data
      const result = data[0];
      if (result.Status !== "Success") {
        console.error("postoffice not found.");
        setPostOffices([]);
      } else {
        setPostOffices(result.PostOffice); // set postoffices
      }
    } catch (err) {
      console.error(err);
    }
  };

  // filter the postoffices with the name
  const filteredOffices = postOffices.filter((office) =>
    office.Name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="d-flex">
      <div className="w-50 p-2">
        {/* form */}
        <Form
          pinCode={pinCode}
          setPinCode={setPinCode}
          fetchPinCodeData={fetchPinCodeData}
        />
      </div>
      <div className="w-50 p-2">
        {/* postoffices */}
        <FilterPinCode
          pinCode={pinCode}
          postOffices={filteredOffices}
          onFilterChange={(e) => setFilter(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
