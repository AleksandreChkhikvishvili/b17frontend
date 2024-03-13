import { useState, useEffect } from "react";
import { getB17, deleteB17 } from "../services/b17s.js";
import { Link, useParams, useNavigate } from "react-router-dom";

function B17Detail() {
  const [b17, setB17] = useState({});

  let { id } = useParams();
  let navigate = useNavigate();

  const fetchB17 = async () => {
    const oneB17 = await getB17(id);
    setB17(oneB17);
  };

  useEffect(() => {
    fetchB17();
  }, []);

  const handleDelete = async () => {
    await deleteB17(id);
    navigate("/b17s");
  };

  return (
    <div>
      <h1>B17 Name: {b17.name}</h1>
      <h2>{b17.serialNumber}</h2>
      <img src={b17.image} alt={b17.name} />
      {b17?.bombGroup?.map((bGroupItem, i) => (
        <p key={`group-${i}`}>Group: {bGroupItem}</p>
      ))}
      {b17?.bombSquadron?.map((bGroupItem, i) => (
        <p key={`squad-${i}`}>Squad: {bGroupItem}</p>
      ))}
      <p>B17 manufacturer: {b17.manufacturer}</p>
      <p>B17 fate: {b17.fate}</p>
      {b17.likesCuddles ? <p></p> : <p></p>}
      <div>
        <Link to={`/b17s/${id}/edit`}>
          <button>EDIT</button>
        </Link>
        <button onClick={handleDelete}>DELETE</button>
      </div>
    </div>
  );
}

export default B17Detail;
