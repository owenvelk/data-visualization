import { Outlet, Link } from "react-router-dom";
import './App.css';

export default function AppRoutes() {
  return (
    <div className="Navbar">
      <nav>
        <ul className="AppRoutes">
          <li>
            <Link className="AppLinks" to="/">Chart 1</Link>
          </li>
          <li>
            <Link className="AppLinks" to="/chart2">Chart 2</Link>
          </li>
          <li>
            <Link className="AppLinks" to="/chart3">Chart 3</Link>
          </li>
          <li>
            <Link className="AppLinks" to="/comp">Comparison</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
};