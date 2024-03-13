import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createB17 } from "../services/b17s.js";
import './B17Create.css'

function B17Create() {
  const [B17, setB17] = useState({
    productionBlock: {
      model: "",
      serialNumberRange: ""
    },
    serialNumber: "",
    name: "",
    bombGroup: [],
    bombSquadron: [],
    manufacturer: "",
    fate: "",
    image: "",
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createB17(B17);
    navigate("/b17s");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "model") {
      setB17((prevB17) => ({
        ...prevB17,
        productionBlock: {
          ...prevB17.productionBlock,
          [name]: value
        }
      }));
    } else {
      setB17((prevB17) => ({
        ...prevB17,
        [name]: value,
      }));
    }

  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    setB17((prevB17) => ({
      ...prevB17,
      [name]: checked,
    }));
  };

  return (
    <div>
      <h1>Add a B17 to our Database!</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={B17.name}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Serial Number"
            name="serialNumber"
            value={B17.serialNumber}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter Model"
            name="model"
            value={B17.productionBlock.model}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Manufacturer"
            name="manufacturer"
            value={B17.manufacturer}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Fate"
            name="fate"
            value={B17.fate}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Add image url"
            name="image"
            value={B17.image}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add a B17 to our database!</button>
      </form>
    </div>
  );
}

export default B17Create;
