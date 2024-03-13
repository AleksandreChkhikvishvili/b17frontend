import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getB17, editB17 } from "../services/b17s.js";

function B17Edit() {
  const [b17, setB17] = useState({
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

  let { id } = useParams();
  let navigate = useNavigate();

  async function fetchB17() {
    const oneB17 = await getB17(id);
    setB17(oneB17);
  }

  useEffect(() => {
    fetchB17();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await editB17(id, b17);
    navigate(`/b17s/${id}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setB17((prevB17) => ({
      ...prevB17,
      [name]: value,
    }));
  };

  return (
    <div className="form-container">
      <h1>Edit a B17 in our Database!</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={b17.name}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Serial Number"
            name="serialNumber"
            value={b17.serialNumber}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter Model"
            name="model"
            value={b17.productionBlock.model}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Manufacturer"
            name="manufacturer"
            value={b17.manufacturer}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Fate"
            name="fate"
            value={b17.fate}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Add image url"
            name="image"
            value={b17.image}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update your B17!</button>
      </form>
    </div>
  );
}

export default B17Edit;
