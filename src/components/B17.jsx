import { Link } from 'react-router-dom'

function B17({ b17 }) {
  return (
    <div>
      <Link to={`/B17s/${b17._id}`}>
        <img className="b17-images" src={b17.image} alt={b17.name} />
      </Link>
    </div>
  )
}

export default B17