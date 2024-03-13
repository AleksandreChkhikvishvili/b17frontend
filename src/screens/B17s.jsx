import { useState, useEffect } from 'react';
import { getB17s } from "../services/b17s.js";
import B17 from '../components/B17.jsx';
import './B17s.css'

function B17s() {
  const [b17s, setB17s] = useState([])

  async function fetchB17s() {
    const allB17s = await getB17s()
    setB17s(allB17s)
  }

  useEffect(() => {
    fetchB17s()
  }, [])

  return (
    <div>
      <h1>All the B17s!</h1>
      <div className="b17s-container">
        {
          b17s.map((b17) => (
            <B17 b17={b17} />
          ))
        }
      </div>
    </div>
  )
}

export default B17s