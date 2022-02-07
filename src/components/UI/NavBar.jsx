import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../../auth/authContext';

export const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);

  const { name, logged } = user;

  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/login', { replace: true });
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

      <Link
        className="navbar-brand"
        to="/"
      >
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">

          <NavLink
            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
            to="/dc"
          >
            DC
          </NavLink>

          <NavLink
            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 f-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-info">
            {name}
          </span>
          <button
            className="nav-item nav-link btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  )
}