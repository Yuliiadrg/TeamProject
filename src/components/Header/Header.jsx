import { NavLink } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <header className="">
      <nav>
        <ul>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => isActive ? "active" : null}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='services'> Servicer </NavLink>
          </li>
          <li>
            <NavLink to='technologies'> Technologies </NavLink>
          </li>
          <li>
            <NavLink to='products'> Products </NavLink>
          </li>
          <li>
            <NavLink to='portfolio'> Portfolio </NavLink>
          </li>
          <li>
            <NavLink to='blog'> Blog  </NavLink>
          </li>
          <li>
            <NavLink to='about'> About us </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;