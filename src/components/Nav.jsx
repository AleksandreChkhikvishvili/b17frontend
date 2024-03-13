import { NavLink } from "react-router-dom"
import './Nav.css';

function Nav() {
  return (
   <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/B17s">B17s</NavLink>
    <NavLink to="/add-B17">Add a B17!</NavLink>
   </nav>
  )
}

export default Nav